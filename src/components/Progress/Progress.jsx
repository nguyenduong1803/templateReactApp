import { useEffect, useRef } from 'react'
import styled from "styled-components"

function Progress({ inputColor = "#007fff", percent, scale = "200px", borderWidth ='0.02',fontText=0.25 }) {
    const refCanva = useRef()
    useEffect(() => {
        let c = refCanva.current
        let ctx = c.getContext("2d");
        let canvasWidth = c.width;
        let canvasHeight = c.height;

        function GetNextCirclePoint(circleObj) {
            circleObj.degree -= 2;
            let xSet = Math.cos(circleObj.degree * Math.PI / 180) * circleObj.radius;
            let ySet = Math.sin(circleObj.degree * Math.PI / 180) * circleObj.radius;
            circleObj.x = circleObj.centerX - xSet;
            circleObj.y = circleObj.centerY - ySet;
        }
        //Error if canvas does not have percentage defined
        let percentage;
        console.log(refCanva.current)
        if (c?.hasAttribute('data-percentage')) {
            percentage = c.dataset.percentage;
            if (percentage < 0 || percentage > 100) {
                console.error('Error: \'data-percentage\' attribute for ProgressGauge must be between 0 and 100.');
            }
        }
        else {
            console.error('Error: Canvas for ProgressGauge must have \'data-percentage\' attribute.');
        }

        //Get the canvas data.
        let ringWidth = canvasWidth * Number(borderWidth);
        //Create the dark circle.
        let darkCircle = {
            x: canvasWidth / 2,
            y: canvasHeight * 0.1,
            degree: 90,
            centerX: canvasWidth / 2,
            centerY: canvasHeight / 2,
            radius: (canvasHeight / 2) - (canvasHeight * 0.1)
        };
        //Create the light circle.
        let lightCircle = {
            x: canvasWidth / 2,
            y: canvasHeight * 0.1,
            degree: 90,
            centerX: canvasWidth / 2,
            centerY: canvasHeight / 2,
            radius: (canvasHeight / 2) - (canvasHeight * 0.1)
        };
        //Write the percentages as text at the center of each canvas.
        ctx.fillStyle = inputColor;
        ctx.font = `${canvasWidth * fontText}px serif`;
        let percentText = `${percentage}%`;
        let textWidth = ctx.measureText(percentText).width;
        ctx.fillText(percentText, (canvasWidth / 2) - (textWidth / 2), (canvasHeight / 2) + canvasHeight * 0.07);
        //Function called for every animation frame.
        function step(timestamp) {
            if (start === undefined) {
                start = timestamp;
            }
            //Calculate total time elapsed.
            const elapsed = timestamp - start;
            //Time has passed.
            if (previousTimeStamp !== timestamp) {
                //Draw the next dark circle until it has wrapped all the way around.
                if (darkCircle.degree > -270) {
                    GetNextCirclePoint(darkCircle);
                    ctx.fillStyle = '#D3D3D3';
                    ctx.beginPath();
                    ctx.arc(darkCircle.x, darkCircle.y, ringWidth, 0, 2 * Math.PI);
                    ctx.fill();
                }
                //Draw the next light circle if the dark circle has already traveled 15 degrees and the degree has not reached the degree that equals the percentage
                if (darkCircle.degree < 75 && lightCircle.degree > 90 - (percentage / 100 * 360)) {
                    GetNextCirclePoint(lightCircle);
                    ctx.fillStyle = inputColor;
                    ctx.beginPath();
                    ctx.arc(lightCircle.x, lightCircle.y, ringWidth, 0, 2 * Math.PI);
                    ctx.fill();
                }
                //If dark and light circles have reached their final points, set done = true.
                if (darkCircle.degree <= -270 && lightCircle.degree <= 90 - (percentage / 100 * 360)) {
                    done = true;
                }
            }
            //Max time allowed is 5 seconds.
            if (elapsed <= 5000 && done === false) {
                window.requestAnimationFrame(step);
            }
        }
        //Begin the animations.
        let start, previousTimeStamp;
        let done = false;
        window.requestAnimationFrame(step);
    }, [])
    return (
        <canvas ref={refCanva} id="myProgress2"
            className="ProgressGauge "
            data-percentage={percent}
            width={scale}
            height={scale}>
        </canvas>
    )
}

export default Progress