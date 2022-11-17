import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './result.module.css';

type ResultsProps = {
  results: {
    cityName: string;
    temperature: number;
    feelsLike: number;
    country: string;
    description: string;
    iconweather: string;
  };
};

// set sunset and sunrise as date data type and convert it to local time
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString


export default function Results({ results }: ResultsProps) {
  return (
    <div className='styles.resultcard'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAW1nUtyRnsIRoo4ZwuW64Xb0RRsksSwVxsTstuBCegURqVw1WEDGl0sf2VpFgpmY298&usqp=CAUhttps://weatherextension.com/img/Weather%20Extension%20Logo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {results.cityName}
        </Typography>
        <Typography variant="h6" color="text.primary">
        Tem­pe­ra­tur: {results.temperature} °C
        </Typography>
        <Typography variant="h6" color="text.primary">
        Gefühlt: {results.feelsLike} °C
        </Typography>
        <Typography variant="h6" color="text.primary">
        Land: {results.country}
        </Typography>
        <Typography variant="h5" color="text.succes">
         {results.description}
        </Typography>
      <img src={`http://openweathermap.org/img/w/${results.iconweather}.png`} alt="weather" />
      </CardContent>
    </Card>
    </div>
  );
}
