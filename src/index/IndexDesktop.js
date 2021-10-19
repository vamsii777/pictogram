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
            <div>



                {/*<div className="h-48 max-h-full md:max-h-screen">*/}
                {/*    <Card className={classes.root}>*/}
                {/*        <Parallax bgImage="https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg" strength={120}>*/}
                {/*            <div style={{ height: 720 }}>*/}
                {/*                <div style={{ position: "absolute",*/}
                {/*                    top: "50%",*/}
                {/*                    left: "50%",*/}
                {/*                    transform: "translate(-50%,-50%)"}}> </div>*/}
                {/*            </div>*/}
                {/*        </Parallax>*/}
                {/*    </Card>*/}
                {/*</div>*/}

                <div className="flex flex-col md:m-16 m-4">
                    <div className="flex-auto">
                        <h1  className="text-center md:text-5xl md:p-16 text-3xl py-8 mx-8" style={{ fontWeight: 700, lineHeight: "1.2em", fontFamily: "Cormorant, sans-serif"}}>
                            Driven by a passion for capturing beautiful moments you'll cherish forever
                        </h1>
                    </div>
                    <div className="flex-auto">
                        <p className="text-center text-lg md:px-16 md:text-xl block md:hidden" style={{fontWeight: 400}}>
                            Didn't you dream of a perfect showy wedding since your childhood? Would you like to preserve your child's beautiful crawling moments for a lifetime?
                        </p>
                        <p className="text-center text-2xl md:px-16 md:text-2xl md:block hidden" style={{fontWeight: 400}}>
                            Didn't you dream of a perfect showy wedding since your childhood? Would you like to preserve your child's beautiful crawling moments for a lifetime? With One Photography, we make sure that every detail you've ever imagined is captured and saved for eternity.
                            We strongly believe that everything you have passionately planned for your special occasion needs to be captured in an unforgettable manner that you will cherish forever.
                        </p>
                    </div>
                    <div className="flex-auto">
                        <Container style={{padding: 72}}>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                                <Masonry>
                                    <Container  style={{padding: 8, textAlign: "center"}}>
                                        <img src={'https://matchthemes.com/demowp/gleam/wp-content/uploads/gal-2-01.jpg'} width={850/2.5} height={650/2.5}/>
                                        <Typography style={{paddingTop: 8}} variant="h5" gutterBottom>
                                            Wedding Photography
                                        </Typography>
                                        <Typography  variant="subtitle1" display="block" gutterBottom>
                                            Wedding Photography
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
                    </div>
                </div>



                <Box>
                    <Parallax bgImage={image3} strength={500}>
                        <div style={{ height: 500,
                            backgroundColor: "rgba(30,31,31,0.64)"}}>
                            <div style={insideStyles}>
                                <Typography variant="h2" style={{fontSize: 32, textAlign: "center", color: "white", fontStyle: "italic", fontWeight: "bold"}} component="h2" >
                                    "Thank you for capturing our happiest moments in such perfection and beauty. One Photography has truly created a stunning piece for us. I still remember the first time I saw the album cover. We are very pleased with their work. Good luck to the team in all future endeavours."
                                </Typography>
                                <Typography  variant="subtitle1" display="block" gutterBottom style={{color: "white", textAlign: "center", padding: 8, fontWeight: "bolder"}}>
                                   -- One Happy Customer
                                </Typography>
                            </div>
                        </div>
                    </Parallax>
                </Box>

                <div className="py-4" style={{lineHeight: 1.7, textAlign: "center", backgroundImage: "linear-gradient(to left, #93CCE8, #acdae2"}}>
                    <div
                        className="flex-auto">
                        <Grid xs={8} item>
                            <Container>
                                <p className="" variant="h2"  component="h2" style={{fontSize: 32, lineClamp: 2, color: "black",fontWeight: 700}}>
                                    We love meeting new people. If you want to work with us send a message.
                                </p>
                            </Container>
                        </Grid>
                        <Grid xs={4} item>
                            <Button style={{maxWidth: '240px', maxHeight: '55px', minWidth: '240px', minHeight: '55px', fontSize: 28, color: 'white', backgroundColor: "#323436", fontWeight: 800, borderRadius: 12, textTransform: "lowercase", padding: "12px"}} variant="contained" color="black" disableElevation={true}>
                                Contact Us
                            </Button>
                        </Grid>
                    </div>
                </div>

                <CssBaseline />
                <Copyright></Copyright>
            </div>
        </>
    );
}
