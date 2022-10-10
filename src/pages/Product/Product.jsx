import { useState } from 'react'
import Drawer from '~/components/Drawer/Drawer'
import styled from "styled-components"
import Skeleton from '~/components/Skeleton/Skeleton';
import Tippy from '~/components/Tippy/Tippy';
import Progress from '~/components/Progress/Progress';
import InputText from '~/components/Input/InputText';
import InputPassword from '~/components/Input/InputPassword';
const Button = styled.button`
margin: 20px;
`
function Product() {
    const [drawerActive, setDrawerActive] = useState(false);
    return (
        <>
            <div>
                <Drawer setDrawerActive={setDrawerActive} drawerActive={drawerActive}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </Drawer>
                <Button onClick={() => setDrawerActive(true)}>Click</Button>
                <Skeleton />
            </div>
            <Tippy Title={() => <h2>Hover me</h2>}>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </Tippy>
            <Progress percent={80} scale='100px'/>
            <InputText name="name"/>
            <InputPassword name="name"/>

        </>
    )
}

export default Product