import { Grid, Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google'

export default function Login() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh', color: 'black' }}>
           <Button variant="contained" startIcon={<GoogleIcon />}  >GOOGLE İLE GİRİŞ YAP</Button>
        </Grid>
    )
}
