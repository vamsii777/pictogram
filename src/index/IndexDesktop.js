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

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: 14,
    transform: "translate(-50%,-50%)"
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 0),
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


export default function IndexDesktop() {
    const classes = useStyles();
    return (
        <>
            <Header></Header>
            <Box
                sx={{
                    width: "100%",
                    height: 300,
                    bgcolor: '#f2f2f4',
                    '&:hover': {
                        backgroundColor: '#f2f2f4',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>

                <Card className={classes.root}>
                    <Parallax bgImage="https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg" strength={120}>
                        <div style={{ height: 720 }}>
                            <div style={{ position: "absolute",
                                top: "50%",
                                left: "50%",
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

                <Box display="flex" height={40}
                     alignItems="center"
                     justifyContent="center" style={{paddingTop: 98, marginLeft: 30, marginRight: 30,}}>
                    <Typography  variant="h3" component="h3"  style={{textAlign: "center", color: "black", paddingTop: 124,marginRight: 200, marginLeft: 200, paddingBottom: 42, fontWeight: 700, fontSize: 48, lineHeight: "1.2em", fontFamily: "Cormorant, sans-serif"}}>
                        We're Gleam a small and enthusiastic photography studio based in New York
                    </Typography>
                </Box>
                <Box display="flex" height={80}
                     alignItems="center"
                     justifyContent="center"
                     style={{marginTop: 142, marginLeft: 10, marginRight: 10, lineHeight: 1.7, textAlign: "center"}}>
                    <Typography variant="body1" component="body1" style={{marginTop:24,paddingRight: 200, paddingLeft: 200, fontSize: 24, fontWeight: 400}}>
                        We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.
                    </Typography>
                </Box>

                <Container style={{padding: 72}}>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry>
                            <Container  style={{padding: 8, textAlign: "center"}}>
                                <img src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-2-01.jpg'} width={850/2.5} height={650/2.5}/>
                                <Typography style={{paddingTop: 8}} variant="h5" gutterBottom>
                                    h5. Headingm
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                            <Container style={{padding: 8,  textAlign: "center"}}>
                                <img  src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-4-05.jpg'}  width={850/3} height={1100/3}/>
                                <Typography style={{paddingTop: 8}} variant="h5" gutterBottom>
                                    h5. Heading
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                            {/* Children */}
                            <Container style={{padding: 8,  textAlign: "center"}}>
                                <img  src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-3-01.jpg'} width={1100/3} height={800/3}/>
                                <Typography style={{paddingTop: 8}} variant="h5" gutterBottom>
                                    h5. Heading
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom>
                                    Weddings
                                </Typography>
                            </Container>
                        </Masonry>
                    </ResponsiveMasonry>
                </Container>

                <Box>
                    <Parallax bgImage={image3} strength={500}>
                        <div style={{ height: 500,
                            backgroundColor: "rgba(30,31,31,0.64)"}}>
                            <div style={insideStyles}>
                                <Typography variant="h2" style={{fontSize: 32, textAlign: "center", color: "white", fontStyle: "italic", fontWeight: "bold"}} component="h2" >
                                    " The creativity and talent of the Gleam team was amazing. Pro in hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod corrumpit. "
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom style={{color: "white", textAlign: "center", padding: 8, fontWeight: "bolder"}}>
                                    ANNA JONES - BRIDE
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
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid xs={8} item>
                            <Container>
                                <Typography variant="h2"  component="h2" style={{paddingRight: 112, paddingLeft: 92, fontSize: 32, lineClamp: 2, color: "black",fontWeight: 700}}>

                                    We love meeting new people. If you want to work with us send a message.


                                </Typography>
                            </Container>
                        </Grid>
                        <Grid xs={4} item>
                            <Button style={{maxWidth: '240px', maxHeight: '55px', minWidth: '240px', minHeight: '55px', fontSize: 28, color: 'white', backgroundColor: "#323436", fontWeight: 800, borderRadius: 12, textTransform: "lowercase", padding: "12px"}} variant="contained" color="black" disableElevation={true}>
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <CssBaseline />
                <Copyright></Copyright>
            </Box>
        </>
    );
}
