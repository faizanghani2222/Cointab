import { Box, Button, Heading, Image, Input, Radio, RadioGroup, Spinner, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


function Userdetails() {
     const [loading,setLoading]=useState(false)
     const [data,setData]=useState([{"gender":"male","name":{"title":"Mr","first":"Renato","last":"Stevens"},"location":{"street":{"number":1130,"name":"Breslauer Straße"},"city":"Fürth","state":"Rheinland-Pfalz","country":"Germany","postcode":59772,"coordinates":{"latitude":"-53.3234","longitude":"-175.3227"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"renato.stevens@example.com","login":{"uuid":"cda124a8-b195-4ef2-839a-995c67bbf6c9","username":"organicmouse659","password":"carmen","salt":"TfJv38js","md5":"b4b3d9a13400de4e671af8cc3ed83740","sha1":"be24774308db97594389cfa0d0490d6c3a2e8564","sha256":"df28bec196ab8f2af282bc2682e9e499503c8a9abccd0305fc24a08d710ab20c"},"dob":{"date":"1979-09-29T17:43:24.261Z","age":43},"registered":{"date":"2009-02-15T17:32:21.587Z","age":14},"phone":"0347-6947517","cell":"0170-1206802","id":{"name":"SVNR","value":"46 290979 S 357"},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"Mr","first":"Renato","last":"Stevens"},"location":{"street":{"number":1130,"name":"Breslauer Straße"},"city":"Fürth","state":"Rheinland-Pfalz","country":"Germany","postcode":59772,"coordinates":{"latitude":"-53.3234","longitude":"-175.3227"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"renato.stevens@example.com","login":{"uuid":"cda124a8-b195-4ef2-839a-995c67bbf6c9","username":"organicmouse659","password":"carmen","salt":"TfJv38js","md5":"b4b3d9a13400de4e671af8cc3ed83740","sha1":"be24774308db97594389cfa0d0490d6c3a2e8564","sha256":"df28bec196ab8f2af282bc2682e9e499503c8a9abccd0305fc24a08d710ab20c"},"dob":{"date":"1979-09-29T17:43:24.261Z","age":43},"registered":{"date":"2009-02-15T17:32:21.587Z","age":14},"phone":"0347-6947517","cell":"0170-1206802","id":{"name":"SVNR","value":"46 290979 S 357"},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"DE"}])
     const [query,setQuery]=useState("")


    const handleChange=(e)=>{
        setQuery(e)
    }

    const handleFilter=()=>{
        setQuery("")
    }





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

                    <Box mt="20px">
                        <Heading fontWeight="500" fontSize="21px">Age</Heading>
                        <RadioGroup value={query.age} onChange={(e)=>handleChange(e,"age")} margin="10px">
                            <Stack direction='column'>
                                <Radio value='21'>21-40</Radio>
                                <Radio value='41'>41-60</Radio>
                                <Radio value='61'>Above 60</Radio>
                            </Stack>
                        </RadioGroup>

                        <Heading fontWeight="500" fontSize="21px" mt="20px">Gender</Heading>
                        <RadioGroup value={query.gender} onChange={(e)=>handleChange(e,"gender")} margin="10px">
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
                            {data && data.map((el)=>{
                                return <Tr>
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
                     </TableContainer>   

                </Box>
            );

        }

    
}

export default Userdetails;