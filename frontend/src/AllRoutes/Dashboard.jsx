import { Box, Button, Heading, Image, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
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
    const [data,setData]=useState([{"gender":"male","name":{"title":"Mr","first":"Renato","last":"Stevens"},"location":{"street":{"number":1130,"name":"Breslauer Straße"},"city":"Fürth","state":"Rheinland-Pfalz","country":"Germany","postcode":59772,"coordinates":{"latitude":"-53.3234","longitude":"-175.3227"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"renato.stevens@example.com","login":{"uuid":"cda124a8-b195-4ef2-839a-995c67bbf6c9","username":"organicmouse659","password":"carmen","salt":"TfJv38js","md5":"b4b3d9a13400de4e671af8cc3ed83740","sha1":"be24774308db97594389cfa0d0490d6c3a2e8564","sha256":"df28bec196ab8f2af282bc2682e9e499503c8a9abccd0305fc24a08d710ab20c"},"dob":{"date":"1979-09-29T17:43:24.261Z","age":43},"registered":{"date":"2009-02-15T17:32:21.587Z","age":14},"phone":"0347-6947517","cell":"0170-1206802","id":{"name":"SVNR","value":"46 290979 S 357"},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"Mr","first":"Renato","last":"Stevens"},"location":{"street":{"number":1130,"name":"Breslauer Straße"},"city":"Fürth","state":"Rheinland-Pfalz","country":"Germany","postcode":59772,"coordinates":{"latitude":"-53.3234","longitude":"-175.3227"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"renato.stevens@example.com","login":{"uuid":"cda124a8-b195-4ef2-839a-995c67bbf6c9","username":"organicmouse659","password":"carmen","salt":"TfJv38js","md5":"b4b3d9a13400de4e671af8cc3ed83740","sha1":"be24774308db97594389cfa0d0490d6c3a2e8564","sha256":"df28bec196ab8f2af282bc2682e9e499503c8a9abccd0305fc24a08d710ab20c"},"dob":{"date":"1979-09-29T17:43:24.261Z","age":43},"registered":{"date":"2009-02-15T17:32:21.587Z","age":14},"phone":"0347-6947517","cell":"0170-1206802","id":{"name":"SVNR","value":"46 290979 S 357"},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"DE"}])

    const handleFetch=()=>{
       
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

            <Box width="70%" m="auto" mt="40px">
                {data && data.map((el)=>{
                    return <Box mb="15px" display="flex" gap="20px" alignItems="center">
                                <Image borderRadius="50%" src={el.picture.thumbnail} alt="thumbnail"/>
                                <Heading fontWeight="500" fontSize="24px">{el.name.title} {el.name.first} {el.name.last}</Heading>
                           </Box>
                })}
            </Box>
            

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Confirm Delete User List</ModalHeader>
                            <ModalCloseButton />

                            <ModalFooter>
                                <Button colorScheme='red' mr={3}>
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