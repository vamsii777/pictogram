import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Copyright from "../components/Copyright";
import Header from "../src/Header";

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

function ElevationScroll(props) {
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

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function MeetTheTeam(props) {
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
                            Meet the Team
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{padding: 92}}>
                <Grid item xs={6} >
                    <Typography variant="h4" align={"left"} gutterBottom style={{fontWeight: 700, fontSize: 32, paddingRight: 72, marginLeft: 42}}>
                        We’re Gleam, a destination photo agency based in New York. Check our amazing team.
                    </Typography>

                </Grid>

                <Grid item xs={3}>
                        <Typography variant="body1"  gutterBottom style={{fontWeight: 400, fontSize: 18, textAlign: "start", marginRight: 24}}>
                            Constituto percipitur ius, cu platonem mnesarchum nam. Nostrum vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec assum.
                        </Typography>
                </Grid>

                <Grid item xs={3}>
                        <Typography variant="body1"  gutterBottom style={{fontWeight: 400, fontSize: 18, textAlign: "start", marginLeft: 24}}>
                            Constituto percipitur ius, cu platonem mnesarchum nam. Nostrum vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec assum.
                        </Typography>
                </Grid>
            </Grid>

            <Grid
                style={{marginBottom: 72}}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center">
                <Box>
                    <img width="300" height="300" src="https://matchthemes.com/demowp/gleam/wp-content/uploads/team-1.jpg"
                         alt="" loading="lazy">
                    </img>
                    <h2 className="elementor-heading-title elementor-size-default">Emma Smith</h2>
                    <span className="elementor-heading-title elementor-size-default">PHOTOGRAPHER</span>

                </Box>

                <Box>
                    <img width="300" height="300"
                         src="https://matchthemes.com/demowp/gleam/wp-content/uploads/team-2.jpg"
                         alt="" loading="lazy">
                    </img>
                    <h2 className="elementor-heading-title elementor-size-default">Emma Smith</h2>
                    <span className="elementor-heading-title elementor-size-default">PHOTOGRAPHER</span>



                </Box>

                <Box>
                    <img width="300" height="300"
                         src="https://matchthemes.com/demowp/gleam/wp-content/uploads/team-3.jpg"
                          alt="" loading="lazy">
                    </img>
                    <h2 className="elementor-heading-title elementor-size-default">Emma Smith</h2>
                    <span className="elementor-heading-title elementor-size-default">PHOTOGRAPHER</span>


                </Box>
            </Grid>
            <Copyright></Copyright>
        </Box>
    );
}
