import { colors, ListItem, ListItemText } from "@mui/material"
import moment from "moment/moment"
import 'moment/locale/tr';

export default function Todo({todo}) {
    const {id, baslik,aciklama,tarih} = todo;
  return (
    <ListItem  sx={{mt:3, boxShadow:3}} style={{backgroundColor:'#FAFAFA', color: 'black'}}>
        <ListItemText  primary={baslik} secondary={moment(tarih).format('LLL')} />
         
    </ListItem>

  )
}
