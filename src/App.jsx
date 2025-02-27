import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { googleSigin, logout } from './redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotesList from './components/notes/NotesList';



const App = () => {
const user=useSelector((state)=>state.auth.user)
console.log(user,"user details")
const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogin=async()=>{
   dispatch(googleSigin()) ;
   navigate("/noteslist")
   
  }

  const handleLogout=async()=>{
    dispatch(logout());
    
  }
  const userDetails=JSON.parse(localStorage.getItem("user"))||[];
  
  return (
    
    <>
    <HStack m={4}>
      <Box>
        {user &&  <Text>Welcome {user.displayName }</Text>}
       
      </Box>
      {user ? <Button bg={"blue"} onClick={handleLogout}

>Logout</Button>: <Button bg={"blue"}

onClick={handleLogin}>Login with google</Button>}
   
    </HStack>
   <Routes>
    <Route path="/noteslist" element={<NotesList />} />

    
   </Routes>
    </>
  )
}

export default App
