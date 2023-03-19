import { colors, ListItem, ListItemText, IconButton} from "@mui/material"
import moment from "moment/moment"
import 'moment/locale/tr';
import {Delete, MoreVert} from '@mui/icons-material'
import {doc,deleteDoc } from 'firebase/firestore'
import {db} from "../firebase";
import {TodoContext} from "../contexts/TodoContext"
import { useContext } from "react";

export default function Todo({todo}) {

    const {id, baslik,aciklama,tarih} = todo;

    const {showAlert, setTodo} = useContext(TodoContext);

    const handleDelete= async(id,e)=>{
        e.preventDefault();

        const ref = doc(db,'todos',id);
        await deleteDoc(ref);

        showAlert("warning", id + "id'ye sahip todo silindi")
        

    }

  return (
    <ListItem onClick={()=> setTodo({id,baslik, aciklama,tarih})}  sx={{mt:3, boxShadow:3}} style={{backgroundColor:'#FAFAFA', color: 'black'}}
      secondaryAction={
        <>
            <IconButton onClick={(e)=>handleDelete(id, e)}>
                <Delete />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </>
      }
    >
        <ListItemText  primary={baslik} secondary={moment(tarih).format('LLL')} />
         
    </ListItem>

  )
}
