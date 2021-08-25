import {Button, Grid, Hidden, Menu, MenuItem, Tab, Tabs, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FooterMobile from "../footer/FooterMobile";
import Header from "../Header";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    logo: {
        width: 80,
        height: 70,
        margin: 0
    },

    ul: {
        margin: "0px auto 0",
        listStyle: "none",
        display: "table",
        textAlign: "center"
    },
    li: { display: "table-cell", position: "relative", padding: "1px 0" },
    a: {
        color: "#000000",
        textTransform: "uppercase",
        textDecoration: "none",
        letterSpacing: "0.15em",
        display: "inline-block",
        padding: "15px 20px",
        position: "relative",
        "&:after": {
            background: ["none repeat scroll 0 0 transparent", "#000000"],
            bottom: "0",
            content: '""',
            display: "block",
            height: "2px",
            left: "50%",
            position: "absolute",
            transition: "width 0.3s ease 0s, left 0.3s ease 0s",
            width: "0",
            "&:hover": { width: "100%", left: "0" }
        },
    },

});


export default function ContactMobile(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                sx={{
                    width: "100%",
                    height: 240,
                    marginTop: 0,
                    bgcolor: '#e9f5f7',
                    '&:hover': {
                        backgroundColor: '#e9f5f7',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}  >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center" style={{paddingTop: 72}}>

                    <Grid item>
                        <Typography align={"center"} gutterBottom style={{fontWeight: 700, fontSize: "12vw"}}>
                            Contact
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                style={{paddingTop: 72}}>
                <Grid item xs={12} style={{paddingBottom: 8}}>
                    <Typography variant="h4" align={"center"} gutterBottom style={{fontWeight: 700, fontSize: "8vw"}}>
                        Are you interested to work with us? Get in touch
                    </Typography>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography variant="body1"  gutterBottom style={{fontWeight: 400, padding:24, fontSize: 21, textAlign: "start"}}>
                            Lorem ipsum dolor sit amet, eam ex velit postea repudiare, est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei, ad epicurei interesset has. Vel dicant conceptam reformidans..
                        </Typography>

                        <Container style={{padding: 24}}>
                            <Typography variant="h5" gutterBottom style={{fontWeight: 600}}>
                                Address:
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom style={{fontSize: 18}}>
                                40 Park Ave, Brooklyn, New York, NY 10000, US
                            </Typography>

                            <Typography variant="h5" gutterBottom style={{paddingTop:24, fontWeight: 600}}>
                                Phone:
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom style={{fontSize: 18}}>
                                +1 800 111 2222
                            </Typography>

                            <Typography variant="h5" gutterBottom style={{paddingTop:24, fontWeight: 600}}>
                                Email:
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom style={{fontSize: 18}}>
                                contact@example.com
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="stretch">
                        <Container style={{paddingBottom: 72}} >
                        <TextField
                            id="outlined-textarea"
                            label="Name"
                            multiline
                            variant="outlined"
                            style={{color: "black", width: "100%", marginTop: 28, fontWeight: 600}}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            multiline
                            variant="outlined"
                            style={{color: "black",  width: "100%" , marginTop: 24, fontWeight: 600}}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Phone"
                            multiline
                            variant="outlined"
                            style={{color: "black", width: "100%",   marginTop: 24,   fontWeight: 600}}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            style={{color: "black", width: "100%",  marginTop: 24,  fontWeight: 600}}
                        />
                        <Button style={{maxWidth: '140px', maxHeight: '45px', minWidth: '140px', minHeight: '45px', fontSize: 18, color: 'white', backgroundColor: "#323436", fontWeight: 800, borderRadius: 4, textTransform: "lowercase", padding: "12px", marginTop: 24, }} variant="contained" color="black">
                            Send Message
                        </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
            <FooterMobile/>
        </Box>
    );
}