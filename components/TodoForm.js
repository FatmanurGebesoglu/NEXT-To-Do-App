
import {Button, TextField, Typography} from '@mui/material'
import { useState, useContext } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import {TodoContext} from "../contexts/TodoContext"


export default function TodoForm() {

    const {showAlert} = useContext(TodoContext);

    const [todo,setTodo]= useState({
        baslik:'',
        aciklama:''
    })

    const handleClick= async(e)=>{
        e.preventDefault();
        
        if(todo.baslik == '' || todo.aciklama==''){
            showAlert("error","Başlık ya da açıklama boş bırakılamaz")
            return;
        }

        const ref = collection(db, 'todos');
        const docRef= await addDoc(ref, {...todo, tarih: serverTimestamp()})
        console.log(docRef.id);
        setTodo({baslik:'',aciklama:''})
        //alert(`${docRef.id} id'ye sahip todo eklendi`)

        showAlert("success",`${docRef.id} id'ye sahip todo eklendi`);

    }

  return (
    <div>
        <Typography  sx={{mt:3, fontWeight:'bold'}} variant="h5"
        color='darkviolet'>Yeni ToDo Ekle</Typography>
        <TextField value={todo.baslik} fullWidth label="Başlık" margin='normal' onChange={e=> setTodo({...todo, baslik:e.target.value})}></TextField>
        <TextField value={todo.aciklama} fullWidth label="Açıklama" multiline maxRows={3} margin='normal' onChange={e=> setTodo({...todo, aciklama:e.target.value})}></TextField>

        <Button sx={{mt:3}} variant="outlined" color='success' onClick={handleClick}>Todo Ekle</Button>
    </div>
  )
}
