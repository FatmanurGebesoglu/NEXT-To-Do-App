
import { Button, TextField, Typography } from '@mui/material'
import { useContext, useRef, useEffect } from 'react'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import { TodoContext } from "../contexts/TodoContext"


export default function TodoForm() {

    const { showAlert, todo, setTodo } = useContext(TodoContext);

    const inputRef = useRef();

    useEffect(() => {
        const tiklanmaKontrol = (e) => {
            if (!inputRef.current.contains(e.target)) {
                console.log('inputlara tiklandi');
                setTodo({ baslik: '', aciklama: '' })
            } else {
                console.log("inputlar harici tiklandi");
            }
        }

        document.addEventListener("mousedown", tiklanmaKontrol);

        return () => {
            document.removeEventListener("mousedown", tiklanmaKontrol);
        }

    }, [])

    const handleClick = async (e) => {
        e.preventDefault();

        if (todo.baslik == '' || todo.aciklama == '') {
            showAlert("error", "Başlık ya da açıklama boş bırakılamaz")
            return;
        }

        if (todo?.hasOwnProperty("id")) {
            //güncelleme
            const ref= doc(db,'todos',todo.id);
            const newTodo={baslik:todo.baslik, aciklama:todo.aciklama, sonGuncellemeTarih: serverTimestamp()};

            updateDoc(ref,newTodo);
            setTodo({baslik:'', aciklama:''})
            showAlert("success", 'todo güncellendi');

        } else {
            //ekleme

            const ref = collection(db, 'todos');
            const docRef = await addDoc(ref, { ...todo, tarih: serverTimestamp() })
            console.log(docRef.id);
            setTodo({ baslik: '', aciklama: '' })
            //alert(`${docRef.id} id'ye sahip todo eklendi`)

            showAlert("success", `${docRef.id} id'ye sahip todo eklendi`);
        }



    }

    return (
        <div ref={inputRef}>
            
            <Typography sx={{ mt: 3, fontWeight: 'bold' }} variant="h5"
                color='darkviolet'>Yeni ToDo Ekle</Typography>
            <TextField value={todo.baslik} fullWidth label="Başlık" margin='normal' onChange={e => setTodo({ ...todo, baslik: e.target.value })}></TextField>
            <TextField value={todo.aciklama} fullWidth label="Açıklama" multiline maxRows={3} margin='normal' onChange={e => setTodo({ ...todo, aciklama: e.target.value })}></TextField>

            {
                todo?.hasOwnProperty("id") ? (
                    <Button sx={{ mt: 3 }} variant="outlined" color='warning' onClick={handleClick}>Todo Güncelle</Button>
                ) : (
                    <Button sx={{ mt: 3 }} variant="outlined" color='success' onClick={handleClick}>Todo Ekle</Button>
                )
            }
        </div>
    )
}
