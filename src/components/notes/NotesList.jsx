import { addNotes, fetchNotes, removeNotes } from '@/redux/actions/actions';
import { Grid, Text,Box, Textarea, VStack ,Button, Flex,Input, GridItem} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

const NotesList = () => {
    const [title,setTitle]=useState("");
    const [comment,setComment]=useState("");
    const user=useSelector((state)=>state.auth.user)

    const userDetails=JSON.parse(localStorage.getItem("user"));
    const notes=useSelector((state)=>state.notes.notes);
    const newNotes=Object.entries(notes)
   
    const notesArray=newNotes.map(([key,value])=>({id:key,...value}))
   // console.log(notesArray[0].id,"nyes data")
   // console.log(notesArray.length,"notes array")
      const dispatch=useDispatch();
       useEffect(()=>{
        dispatch(fetchNotes())
       },[])

       //add notes button function

       const handleAdd=async()=>{
       let newData={
       // id:Date.now(),
       
        title:title,
        contect:comment,
        timeStamp:Date.now()
        

       }
       if(title.trim() && comment.trim()){
        dispatch(addNotes(newData));
        dispatch(fetchNotes());
        setTitle("");
        setComment("");
       }
       
       }

       //handleremove button
       const handleRemove=async(id)=>{
        dispatch(removeNotes(id));
        console.log("button is clicked")

       }
  return (
   <>
  
   <Flex width={"90%"} m={4}>
   <Input m={2} type="text" placeholder='Enter Notes' value={title} onChange={(e)=>setTitle(e.target.value)}/>
   <Input m={2} type="text" placeholder='Enter Comments' value={comment} onChange={(e)=>setComment(e.target.value)}/>

   <Button bg={"green"} onClick={handleAdd}>Add Notes</Button>

   </Flex>

   <Grid templateColumns="repeat(3, 1fr)" gap="6">
    {notesArray.length>0 && <GridItem>
        {notesArray.map((note)=>{
            return <VStack>
                <Box bg="bg" shadow="md" borderRadius="md" p={4}
                >
                
            <Text>{note.title}</Text>
            <Text>{note.contect
            }</Text>
           <Button onClick={()=>handleRemove(note.id)}><FaTrash/></Button>
           </Box>
            </VStack>
        })}
    </GridItem>
    }
   </Grid>
   </>
  )
}

export default NotesList
