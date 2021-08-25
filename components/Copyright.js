import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import {CssBaseline, Grid, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Link from "/src/Link";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function Copyright() {
    const classes = useStyles();
  return (
      <>
          <CssBaseline />
     <Box component={"div"} style={{backgroundColor: "#1a1a1a", height: '50vh', color: "white"}}>
         <Grid
             container
             direction="row"
             justifyContent="space-evenly"
             alignItems="flex-start">
             <Grid xs={3} item >
                 <Typography variant="h4" gutterBottom style={{fontWeight: 700, letterSpacing: ".03em", fontSize: 32, marginBottom: 32, paddingTop: 72}}>
                     About
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 21, textAlign: "start", lineClamp: 3}}>
                     Hi, I’m Anna Smith, a photographer, traveler & blogger. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                 </Typography>
             </Grid>
             <Grid xs={3} item >
                 <Typography variant="h4" gutterBottom style={{fontWeight: 700, letterSpacing: ".03em", fontSize: 32, marginBottom: 32, paddingTop: 72}}>
                     Contact
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 21, textAlign: "start", lineClamp: 2, marginRight: 70}}>
                     40 Park Ave, Brooklyn, New York,
                     NY 10000, US
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500,fontSize: 21, textAlign: "start", lineClamp: 3, marginRight: 70}}>
                     +1 800 111 2222
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 21, textAlign: "start", lineClamp: 3, marginRight: 70}}>
                     contact@domain.com
                 </Typography>
             </Grid>
             <Grid xs={2} item>
                 <Typography variant="h4" gutterBottom style={{fontWeight: 700, letterSpacing: ".03em", fontSize: 32, marginBottom: 32, paddingTop: 72, textAlign: "start"}}>
                     Quick Links
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 20, textAlign: "centre", lineClamp: 2, color: "black"}}>
                    <Link href={"/"} style={{color: "white"}}> Home</Link>
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500,fontSize: 20, textAlign: "start", lineClamp: 3, marginRight: 70, color: "black"}}>
                     <Link href={"/"} style={{color: "white"}}> About</Link>
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 20, textAlign: "start", lineClamp: 3, marginRight: 70, color: "black"}}>
                     <Link href={"/galleries"} style={{color: "white"}}> Galleries</Link>
                 </Typography>
                 <Typography variant="subtitle1" gutterBottom style={{fontWeight: 500, fontSize: 20, textAlign: "start", lineClamp: 3, marginRight: 70, color: "black"}}>
                     <Link href={"/contact"} style={{color: "white"}}> Contact</Link>
                 </Typography>
             </Grid>
         </Grid>
     </Box>

     <Box style={{backgroundColor: "#1a1a1a", padding: 42}}>
              <Typography variant="body2" align="center" style={{fontSize: 18, padding: 8, color:"white"}} >
                  {'Copyright © '}
                  <MuiLink style={{color: "white"}} href="https://dewonderstruck.com/">
                      DeWonderstruck
                  </MuiLink>{' '}
                  {new Date().getFullYear()}
                  {'.'}
              </Typography>
     </Box>
      </>
  );
}
