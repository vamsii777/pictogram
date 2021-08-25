import * as React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { autoplayPlugin } from '@brainhubeu/react-carousel'
import Helmet from 'react-helmet'
import ElevateAppBar from "../components/Navbar";
import {Box, Button, Card, CardMedia, CssBaseline, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Copyright from "../components/Copyright";
import {makeStyles} from "@material-ui/core/styles";
import {Background, Parallax} from 'react-parallax';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useMediaQuery } from 'react-responsive'
import Container from "@material-ui/core/Container";
import Image from 'next/image'
import Header from "../src/Header";
import IndexDesktop from "../src/index/IndexDesktop";
import IndexMobile from "../src/index/IndexMobile";



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

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
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


const MyCarousel = () => (

    <Carousel  plugins={[
      'infinite',
      {
        resolve: autoplayPlugin,
        options: {
          interval: 10000,
        }
      },
    ]}
               animationSpeed={1000}
    >
      <img height={720} width={"100%"} src={"https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg"} >
      </img>

      <img height={720} width={"100%"} src={"https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg"} />

      <img height={720} width={"100%"} src={"https://res.cloudinary.com/dewonderstruck/image/upload/v1625672001/slider/DTOP1_qwpftn.jpg"} />



    </Carousel>
);

const TEXTS = [
  "Abhilash & Mounica",
  "TheOne.Photo | Wedding Photography",
  "Abhilash & Mounica",
];


export default function Index() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  return (
      <>
        <Helmet
            meta={[
              {
                name: `theme-color`,
                content: '#f2f2f4'
              },
            ]}>
        </Helmet>

        <Desktop>
            <IndexDesktop/>
        </Desktop>

          <Tablet>
              <body>This website is still under-development so please visit the website from a larger screen. As it's still being optimized for mobile.</body>
          </Tablet>

          <Mobile>
              <IndexMobile/>
          </Mobile>
      </>

  );
}

