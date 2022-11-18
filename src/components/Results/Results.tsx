import { CardMedia } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./result.module.css";
import moment from "moment";
import { ResultModel } from "../../model";

type ResultsProps = {
  results: ResultModel;
};

// TODO set sunset and sunrise as date data type and convert it to local time
// ?  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

export default function Results({ results }: ResultsProps) {
  return (
    <div className={styles.resultcard}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAW1nUtyRnsIRoo4ZwuW64Xb0RRsksSwVxsTstuBCegURqVw1WEDGl0sf2VpFgpmY298&usqp=CAUhttps://weatherextension.com/img/Weather%20Extension%20Logo.png"
        />
        <CardContent>
          <Paper elevation={3}>
            {new Date().toLocaleString("de", { weekday: "long" })}
          </Paper>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={600}
            color="green"
            component="div"
          >
            {results.cityName}
          </Typography>
          <Typography variant="h6">
            Temperatur: {results.temperature} °C
          </Typography>
          <Typography variant="h6">Gefühlt: {results.feelsLike} °C</Typography>
          <Typography variant="h6">Land: {results.country}</Typography>
          <Typography variant="h5" color="secondary">
            {results.description}
          </Typography>
          <img
            src={`http://openweathermap.org/img/w/${results.iconWeather}.png`}
            alt="weather"
          />
        </CardContent>
      </Card>
    </div>
  );
}
