
import {Button, TextField, Typography} from '@mui/material'

export default function TodoForm() {
  return (
    <div>
        <Typography sx={{mt:3, fontWeight:'bold'}} variant="h5"
        color='darkviolet'>Yeni ToDo Ekle</Typography>
        <TextField fullWidth label="Başlık" margin='normal'></TextField>
        <TextField fullWidth label="Açıklama" multiline maxRows={3} margin='normal'></TextField>

        <Button sx={{mt:3}} variant="outlined" color='success'>Todo Ekle</Button>
    </div>
  )
}
