import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Header from "../Header";
import {Box, Button, Card, CssBaseline, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Background, Parallax} from 'react-parallax';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Copyright from "../../components/Copyright";
import FooterMobile from "../footer/FooterMobile";
import HeaderMobile from "../header/HeaderMobile";

const insideStyles = {
    position: "absolute",
    top: "50%",
    width: "70%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1),
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imgmana: {
        "&:hover, &.Mui-focusVisible": {
            webkitTransition: "all 0.25s ease-in-out",
            onTransition: "all 0.25s ease-in-out",
            msTransition: "all 0.25s ease-in-out",
            transition: "all 0.25s ease-in-out"
        }
    }
}));

const image3 =
    "https://matchthemes.com/demowp/gleam/wp-content/uploads/blog-9.jpg";



export default function IndexTablet() {
    const classes = useStyles();
    return (
        <>
            <HeaderMobile/>
            <Box
                style={{ marginTop: 24, backgroundColor: "white"}}
                sx={{
                    width: "100%",
                    '&:hover': {
                        backgroundColor: '#f2f2f4',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>

                <Card style={{margin: 16, borderRadius: 4, padding: 4}}>
                    <Parallax bgImage="https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg" strength={120}>
                        <div style={{ height: "40vh" }}>
                            <div style={{
                                position: "absolute",
                                transform: "translate(-50%,-50%)"}}> </div>
                        </div>
                    </Parallax>

                    {/*<Typography*/}
                    {/*    gutterBottom*/}
                    {/*    variant="h1"*/}
                    {/*    component="h1"*/}
                    {/*    className={classes.font}>*/}
                    {/*    <TextTransition style={{textAlign: "center"}}*/}
                    {/*                     text={ TEXTS[ index % TEXTS.length] }*/}
                    {/*                     springConfig={ presets.molasses } >*/}

                    {/*    </TextTransition>*/}
                    {/*</Typography>*/}

                </Card>

                <Container>
                    <Box display="flex" height={50}
                         alignItems="center"
                         justifyContent="center" style={{marginTop: 42}}>
                        <Typography  variant="h3" component="h3"  style={{textAlign: "center", color: "black", paddingTop: 124, paddingBottom: 42, fontWeight: 700, fontSize: "5vw", lineHeight: "1.2em", fontFamily: "Cormorant, sans-serif"}}>
                            We're Gleam a small and enthusiastic photography studio based in New York
                        </Typography>
                    </Box>
                    <Box display="flex" height={80}
                         alignItems="center"
                         justifyContent="center"
                         style={{marginTop: 124, lineHeight: 1.7, textAlign: "center", padding: 24}}>
                        <Typography variant="body1" component="body1" style={{marginTop:24, fontSize: "3vw", fontWeight: 400}}>
                            We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.
                        </Typography>
                    </Box>
                </Container>

                <Container style={{marginTop: 92}}>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry>
                            <Container  style={{textAlign: "center"}}>
                                <img src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-2-01.jpg'} width={850/3} height={650/3}/>
                                <Typography  variant="h5" gutterBottom>
                                    h5. Headingm
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                            <Container style={{textAlign: "center", marginTop: 24}}>
                                <img  src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-4-05.jpg'}  width={850/3} height={1100/3}/>
                                <Typography  variant="h5" gutterBottom>
                                    h5. Heading
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                            {/* Children */}
                            <Container style={{ textAlign: "center", marginTop: 24}}>
                                <img  src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-3-01.jpg'} width={1100/4} height={800/4}/>
                                <Typography variant="h5" gutterBottom>
                                    h5. Heading22
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                        </Masonry>
                    </ResponsiveMasonry>
                </Container>

                <Box style={{marginTop: 24}}>
                    <Parallax bgImage={image3} strength={300}>
                        <div style={{ height: 300,
                            backgroundColor: "rgba(30,31,31,0.64)"}}>
                            <div style={insideStyles}>
                                <Typography variant="h2" style={{fontSize: "3vw", textAlign: "center", color: "white", fontStyle: "italic", fontWeight: "bold"}} component="h2" >
                                    " The creativity and talent of the Gleam team was amazing. Pro in hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod corrumpit. "
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom style={{color: "white", textAlign: "center", padding: 8, fontWeight: "bolder"}}>
                                    <br/> ANNA JONES - BRIDE
                                </Typography>
                            </div>
                        </div>
                    </Parallax>
                </Box>
                <Box display="flex" height={240}
                     alignItems="center"
                     justifyContent="center"
                     style={{lineHeight: 1.7, textAlign: "center", backgroundImage: "linear-gradient(to left, #93CCE8, #acdae2"}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center">
                        <Grid xs={12} item>
                            <Container>
                                <Typography variant="h2"  component="h2" style={{fontSize: "3.5vw", lineClamp: 2, color: "black",fontWeight: 700}}>

                                    If you want to work  with us  send a message.


                                </Typography>
                            </Container>
                        </Grid>
                        <Grid xs={8} item>
                            <Button style={{marginTop: 32, minWidth: '240px', minHeight: '45px', fontSize: 24, color: 'white', backgroundColor: "#323436", fontWeight: 800, borderRadius: 12, textTransform: "lowercase"}} variant="contained" color="black" disableElevation={true}>
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <CssBaseline />
                <FooterMobile/>
            </Box>
        </>
    );
}