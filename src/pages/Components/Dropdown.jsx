import React from 'react'
import { Box } from '~/layouts/Comp/GridSystem'
import { PositionItem } from '~/layouts/Comp/GridSystem/CommonStyled';
console.time()
function DropdownPage() {
    return (
        <Box>
            clg
            <Box w="20rem"> 1 </Box>
            <Box w="20rem"> 1 </Box>
            <Box w="20rem"> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box> 1 </Box>
            <Box left="2rem"> 1 </Box>
            <PositionItem className='position-relative' left="2rem" t>hello</PositionItem>
        </Box>
    )
}
console.timeEnd();

export default DropdownPage