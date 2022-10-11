import {useState} from 'react'
import ImageDefault from '~/assets/svg/ImageDefault.svg'
import styled from 'styled-components'
const Img = styled.img`
width:100%;
height:100%;
`
function Image({src,...props}) {
    const [errorImage,setErrorImage]=useState("")
    const errorImages =()=>{
        setErrorImage(ImageDefault)
    }
  return <Img onError={errorImages} src={errorImage.toString()||src.toString()}  {...props}/>

}

export default Image