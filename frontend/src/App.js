import React from "react";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Navbar";


function App() {
  return (
   <Box width="100%"  minHeight="100vh" >
   <Navbar/>
   <AllRoutes/>
   </Box>
  );
}

export default App;
