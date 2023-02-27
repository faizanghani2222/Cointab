import { Box, Button } from '@chakra-ui/react';
import React from 'react';



const createArray=(n)=>{
    return new Array(n).fill(0);
}


function Pagination({total,currentpage,handlePageChange}) {
    let t=Math.ceil(Number(total)/10)||1
    let buttons=createArray(t).map((a,i) => {
        return  <Button key={i} onClick={()=>handlePageChange(i+1)} disabled={i+1===currentpage}>{i+1}</Button>;
        });
    return (
        <Box>{buttons}</Box>
    );
}

export default Pagination;