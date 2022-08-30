import React from "react";
import '../App.css';
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AccessTime} from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material";
import {NavLink} from "react-router-dom";

const TourCard = ({tour}) => {
    const theme1 = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "body2"
                        },
                        style: {
                            fontSize: 11
                        }
                    },
                    {
                        props: {
                            variant: "body3"
                        },
                        style: {
                            fontSize: 9
                        }
                    }
                ]
            }
        }
    })

    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme1}>
                <NavLink to={`/${tour.id}`}>
                    <Paper elevation={3}>
                        <img
                            src={tour.image}
                            alt='' className='img'/>
                        <Box paddingX={1}>
                            <Typography variant='subtitle1' component='h2'>
                                {tour.name}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <AccessTime sx={{width: 12.5}}/>
                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                    {tour.duration} hours
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} marginTop={3}>
                                <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size='small'/>
                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                    {tour.rating}
                                </Typography>
                                <Typography variant='body2' component='p' marginLeft={1.5}>
                                    ({tour.numberOfReviews} reviews)
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h6' component='h3' marginTop={1.5}>
                                    From $ {tour.price}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </NavLink>
            </ThemeProvider>
        </Grid>
    )
}
export default TourCard;