import { Box, Button, Heading, Image, Radio, RadioGroup, Spinner, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import Pagination from '../Components/Pagination';


function Userdetails() {
     const [loading,setLoading]=useState(false)
     const [currentpage,setCurrentpage]=useState(1)
     const [total,setTotal]=useState(10)
     const [data,setData]=useState([])
     const [query,setQuery]=useState("")


    const handleChange=(e)=>{
        setQuery(e)
    }

    const handleFilter=()=>{
        if(query){
            setLoading(true)
        axios.get(`https://cointab-up43.onrender.com/user-list?gender=${query}&page=${currentpage}`).then((res)=>{
            setTotal(res.data.total)
            setData(res.data.users)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
        setQuery("")
        }
    }


    const getData=()=>{
        setLoading(true)
        axios.get(`https://cointab-up43.onrender.com/user-list?page=${currentpage}`).then((res)=>{
            setTotal(res.data.total)
            setData(res.data.users)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }
    
    useEffect(()=>{
        getData()
    },[currentpage])


    if(loading===true){

        return ( <Box w={"60%"} m="auto" mt="40vh" textAlign="center">
         <Spinner
             thickness='4px'
             speed='0.65s'
             emptyColor='gray.200'
             color='blue.500'
             size='xl'
             />
         </Box>)

    }else{

            return (
                <Box width="100%" display="flex" p="20px" gap="10px">

                    {/* Filter Box */}
                    <Box borderRight="1px solid #EAEAEA" width="15%" minHeight={"100vh"} pt="10px">
                     <Heading textAlign="center" fontWeight="500" fontSize="24px">Filter</Heading> 

                    <Box mt="30px">

                        <Heading fontWeight="500" fontSize="21px">Gender</Heading>
                        <RadioGroup value={query.gender} onChange={(e)=>handleChange(e)} margin="10px">
                            <Stack direction='column'>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                            </Stack>
                        </RadioGroup>

                        <Button onClick={handleFilter} width="90%" color="white" background="#00CF95">Filter</Button>
                    </Box>

                    </Box>

                    {/* User Table */}
                     <TableContainer >
                        <Table>
                        <Thead>
                            <Tr>
                                <Th>User</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Gender</Th>
                                <Th>Age</Th>
                                <Th>Country</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.map((el,i)=>{
                                return <Tr key={i}>
                                    <Td><Image borderRadius="50%" src={el.picture.thumbnail} alt="thumbnail"/></Td>
                                    <Td><Heading fontWeight="500" fontSize="19px">{el.name.title} {el.name.first} {el.name.last}</Heading></Td>
                                    <Td><Heading fontWeight="500" fontSize="19px">{el.email}</Heading></Td>
                                    <Td><Heading fontWeight="500" fontSize="19px">{el.gender}</Heading></Td>
                                    <Td><Heading fontWeight="500" fontSize="19px">{el.dob.age}</Heading></Td>
                                    <Td><Heading fontWeight="500" fontSize="19px">{el.location.country}</Heading></Td>
                                </Tr>
                            })}
                        </Tbody>
                        </Table>
                        <Pagination currentpage={currentpage} handlePageChange={setCurrentpage} total={total}/>
                     </TableContainer>   
                     

                </Box>
            );

        }

    
}

export default Userdetails;