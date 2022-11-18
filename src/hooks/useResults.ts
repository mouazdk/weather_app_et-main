import React, { useState } from 'react';
import API_KEY from '../api/api_secret';
import ResultModel from '../model';


export default function useResults() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultModel>({
        cityName: "",
        temperature: 0,
        feelsLike: 0,
        country: "",
        description: "",
        iconweather: "",
    });

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=de`
        )
            .then((res) => res.json())
            .then((data) => {
                setResults({
                    cityName: data.city.name,
                    temperature: Math.round(data.list[0].main.temp),
                    feelsLike: Math.round(data.list[0].main.feels_like),
                    country: data.city.country,
                    description: data.list[0].weather[0].description,
                    iconweather: data.list[0].weather[0].icon,
                });
            });
    };

    return { city, setCity, getWeather, results };
}