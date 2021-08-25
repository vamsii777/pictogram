import {Button, Grid, Hidden, Menu, MenuItem, Popover, Tab, Tabs} from "@material-ui/core";
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
import styled from 'styled-components';
import Link from "./Link";

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

    dropDownContent: {
        display: "none",
        position: "absolute",
        backgroundColor: "#f1f1f1",
        minWidth: "160px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: "1"
    }

});

function ElevateScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {background: trigger ? 'white' : 'transparent'},
    });
}

ElevateScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // function handleClick(event) {
    //     if (anchorEl !== event.currentTarget) {
    //         setAnchorEl(event.currentTarget);
    //     }
    // }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Box sx={{ flexGrow: 1 }}>

            <CssBaseline />
            <ElevateScroll {...props}>
                <AppBar>
                    <Hidden smDown>
                        <Toolbar>
                            <Toolbar variant="dense">
                                <Grid justify={"space-between"} container>
                                    <Grid xs={1} item>
                                        <img
                                            className={classes.logo}
                                            src={
                                                "https://res.cloudinary.com/dewonderstruck/image/upload/v1626600475/slider/logo_ru1m6d.png"
                                            }
                                            alt="Logo"
                                        />
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Grid container justify={"space-evenly"} style={{paddingTop: 8}}>
                                            <style jsx>
                                                {`

                                              ul li a {
                                                position: relative;
                                                display: block;
                                                text-decoration: none;
                                                text-transform: uppercase;
                                                transition: 0.5s;
                                              }

                                              ul li a::after {
                                                position: absolute;
                                                content: "";
                                                width: 100%;
                                                height: 1px;
                                                top: 100%;
                                                left: 0;
                                                background: rgba(0, 0, 0, 0.73);
                                                transition: transform 0.5s;
                                                transform: scaleX(0);
                                                transform-origin: left;
                                              }

                                              ul li a:hover {
                                              }

                                              ul li a:hover::after {
                                                transform: scaleX(1);
                                                transform-origin: left;
                                              }

                                              a {
                                                color: black;
                                              }
                                            `}
                                            </style>
                                            <ul className={classes.ul}>
                                                <li className={classes.li}><a><Link className={classes.a} style={{textDecoration: "none"}} href={"/"}>Home</Link> </a></li>

                                                <li className={classes.li} aria-haspopup="true">
                                                    <a href={"#"} style={{textDecoration: "none"}} className={classes.a} aria-owns={anchorEl ? "simple-menu" : undefined}
                                                       onClick={handleClick}>About </a>
                                                    <Menu disableElevation
                                                          id="simple-menu"
                                                          keepMounted
                                                          style={{marginTop: 42}}
                                                          open={Boolean(anchorEl)}
                                                          anchorEl={anchorEl}
                                                          onClose={handleClose}
                                                          MenuListProps={{ onMouseLeave: handleClose }}>
                                                        <MenuItem onClick={handleClose}><Link style={{textDecoration: "none"}} className="a" style={{textDecoration: "none",
                                                            color: "#000000"}} href={"/meet-the-team"}><a>Meet the Team</a></Link></MenuItem>
                                                    </Menu>
                                                </li>
                                                <li className={classes.li}> <a><Link style={{textDecoration: "none"}} className={classes.a} href={"/galleries"}>Galleries</Link> </a> </li>


                                                <li className={classes.li}><a><Link style={{textDecoration: "none"}} className={classes.a} href={"/contact"}>Contact</Link></a></li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <Grid container justify={"flex-end"} style={{marginTop: 8}}>
                                            <ul className={classes.ul}>
                                                <li className={classes.li}></li>
                                                <li className={classes.li}></li>
                                                <li className={classes.li}></li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </Toolbar>
                    </Hidden>
                </AppBar>
            </ElevateScroll>

            <Container>

            </Container>
        </Box>
    );
}