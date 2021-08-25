import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid} from "@material-ui/core";
import {Background, Parallax} from 'react-parallax';
import Gallery from 'react-grid-gallery';
import FooterMobile from "../footer/FooterMobile";
import Progress from "../../components/Progress";
const IMAGES = ([
    {
        src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
        thumbnailWidth: 240,
        thumbnailHeight: 320,
        caption: "8H (gratisography.com)"
    },
    {
        src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "286H (gratisography.com)"
    },
    {
        src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 148,
        caption: "315H (gratisography.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "201H (gratisography.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
        thumbnailWidth: 248,
        thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 113,
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        thumbnailWidth: 313,
        thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    }
]);

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: 14,
    color: "white",
    transform: "translate(-50%,-50%)"
};
export default function GalleriesMobile() {

    return (
        <>
            <Parallax bgImage={"https://matchthemes.com/demowp/gleam/wp-content/uploads/blog-9.jpg"} strength={500}>
                <div style={{ height: 280,
                    backgroundColor: "rgba(30,31,31,0.64)"}}>
                    <div style={insideStyles}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center" style={{paddingTop: 40}}>

                            <Grid item>
                                <Typography align={"center"} gutterBottom style={{fontWeight: 700, fontSize: "12vw"}}>
                                    Galleries
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Parallax>

            <Container style={{marginTop: 48}}>
                <Gallery margin={8} images={IMAGES} enableImageSelection={false}/>
            </Container>

            <Container style={{padding: 42, display: "inline-block"}}>
                <Box>

                </Box>
            </Container>
            <FooterMobile/>


        </>
    );
}