import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json'
import Typography from "@mui/material/Typography";

const Home = () => {
    return (
        <div className="App">
            <Container>
                {cities.map(city => (
                    <>
                        <Typography
                            variant='h4'
                            component='h3'
                            marginTop={5}
                            marginBottom={3}
                            key={city.id}
                        >
                            Top {city.name} Tours
                        </Typography>
                        <Grid container spacing={3} marginBottom={5}>
                            {city.tours.map((tour) => <TourCard tour={tour} key={tour.id}/>)}
                        </Grid>
                    </>
                ))}
            </Container>
        </div>
    );
}

export default Home;
