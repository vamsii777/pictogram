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
import Copyright from "../components/Copyright";
import Index from "./index";
import Header from "../src/Header";
import {useMediaQuery} from "react-responsive";
import ContactMobile from "../src/contact/ContactMobile";

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

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}


export default function Contact(props) {
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
        <>
        <Desktop>
    <Box sx={{ flexGrow: 1 }}>

            <CssBaseline />
            <Header></Header>
                <Box
                    sx={{
                        width: "100%",
                        height: 400,
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
                        alignItems="center" style={{paddingTop: 120}}>

                    <Grid item>
                        <Typography align={"center"} gutterBottom style={{fontWeight: 700, fontSize: 82}}>
                           Contact
                            <Grid item>
                                <Typography align={"center"} gutterBottom style={{fontWeight: 400, fontSize: 18, fontFamily: "Open Sans"}}>
                                    Ask Us Something
                                </Typography>
                            </Grid>
                        </Typography>
                    </Grid>
                    </Grid>
                </Box>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{padding: 72}}>
                <Grid item xs={6} style={{paddingBottom: 48}}>
                <Typography variant="h4" align={"center"} gutterBottom style={{fontWeight: 700, fontSize: 42, marginRight: 72, marginLeft: 42}}>
                    Are you interested to work with us? Get in touch
                </Typography>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                        <Typography variant="body1"  gutterBottom style={{fontWeight: 400, marginLeft: 42, paddingTop:24, fontSize: 21, textAlign: "start"}}>
                            Lorem ipsum dolor sit amet, eam ex velit postea repudiare, est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei, ad epicurei interesset has. Vel dicant conceptam reformidans..
                        </Typography>

                <Container style={{padding: 42}}>
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

                <Grid item xs={6}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                        style={{marginTop: 42}}
                    >
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        multiline
                        variant="outlined"
                        style={{color: "black",marginTop: 28,  marginLeft: 42, fontWeight: 600}}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        multiline
                        variant="outlined"
                        style={{color: "black",  marginTop: 24, marginLeft: 42,  fontWeight: 600}}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Phone"
                        multiline
                        variant="outlined"
                        style={{color: "black",  marginTop: 24,  marginLeft: 42 ,  fontWeight: 600}}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{color: "black",  marginTop: 24,  marginLeft: 42,  fontWeight: 600}}
                    />
                        <Button style={{maxWidth: '140px', maxHeight: '45px', minWidth: '140px', minHeight: '45px', fontSize: 18, color: 'white', backgroundColor: "#323436", fontWeight: 800, borderRadius: 4, textTransform: "lowercase", padding: "12px", marginTop: 24,  marginLeft: 42,}} variant="contained" color="black">
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
           <Copyright></Copyright>
        </Box>
        </Desktop>
        <Mobile>
            <ContactMobile/>
        </Mobile>
        </>
    );
}