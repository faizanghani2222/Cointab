import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {



    return (
        <Box width={"100%"} background="#EAEAEA" px="5%" height="70px" display={"flex"} justifyContent="space-between" alignItems={"center"}>
            <Link to="/"><Image w="150px" src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png" alt="error"/></Link>
        </Box>
    );
}

export default Navbar;