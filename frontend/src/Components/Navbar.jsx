import { Box, Button, Heading, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function Navbar(props) {

    const {data,setData,token,setToken}=useContext(AppContext)

    const handleLogout=()=>{
        setData({})
        setToken("")
        localStorage.removeItem("vooshToken")
    }

    return (
        <Box width={"100%"} background="#EAEAEA" px="5%" height="70px" display={"flex"} justifyContent="space-between" alignItems={"center"}>
            <Link to="/"><Image w="150px" src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png" alt="error"/></Link>
        
        </Box>
    );
}

export default Navbar;