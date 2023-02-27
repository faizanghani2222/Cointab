import { Box, Button, Heading, Image, Spinner, useDisclosure } from '@chakra-ui/react';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
  } from '@chakra-ui/react'
import axios from 'axios';


function Dashboard() {

    const [loading,setLoading]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState([])

    const handleFetch=()=>{
      if(loading===false){
        setLoading(true)
        axios.get("https://cointab-up43.onrender.com").then((res)=>{
          setData(res.data)
           setLoading(false)
        }).catch((err)=>{
         alert("Error try again")
         setLoading(false)
         })
      }else{
        alert("Error fetching users still in progress")
      }
    }

    const handleDelete=()=>{
        setLoading(true)
        axios.delete("https://cointab-up43.onrender.com/delete-users").then((res)=>{
            setData([])
            setLoading(false)
            onClose()
        }).catch((err)=>{
            alert("Error try again")
            setLoading(false)
            onClose()
        })
    }


    return (
        <Box >
            <Box width="70%" m="auto" display="flex" justifyContent="space-between" pt="5vh"  alignItems="center">
                <Heading fontWeight="600" fontSize="30px" textDecoration="underline">User List</Heading>
                <Box width="50%" display="flex" justifyContent="space-between" alignItems="center">
                    <Button onClick={handleFetch} color="white" background="#00CF95">Fetch Users</Button>
                    <Link to="/userdetails"><Button color="white" background="#00CF95">User Details</Button></Link>
                    <Button onClick={onOpen} color="white" background="rgb(219, 8, 8)">Delete Users</Button>
                </Box>
            </Box>

            { loading?<Box w={"60%"} m="auto" mt="20vh" textAlign="center">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                            />
                        </Box>
                :
                    <Box width="70%" m="auto" mt="40px">
                        {data && data.map((el,i)=>{
                            return <Box key={i} mb="15px" display="flex" gap="20px" alignItems="center">
                                        <Image borderRadius="50%" src={el.picture.thumbnail} alt="thumbnail"/>
                                        <Heading fontWeight="500" fontSize="24px">{el.name.title} {el.name.first} {el.name.last}</Heading>
                                </Box>
                        })}
                    </Box>
            }
            

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Confirm Delete User List</ModalHeader>
                            <ModalCloseButton />

                            <ModalFooter>
                                <Button onClick={handleDelete} colorScheme='red' mr={3}>
                                Delete
                                </Button>
                                <Button  onClick={onClose} variant='ghost'>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
        </Box>
    );
}

export default Dashboard;