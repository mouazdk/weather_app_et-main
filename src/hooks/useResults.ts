import React, { useState } from 'react';
import API_KEY from '../api/api_secret';
import { ResultModel } from '../model';


export default function useResults() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<Record<string, ResultModel>>({});

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (results[city]) {
            return results[city];
        }

        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=de`
        )
            .then((res) => res.json())
            .then((data) => {
                const cityData = {
                    cityName: data.city.name,
                    temperature: Math.round(data.list[0].main.temp),
                    feelsLike: Math.round(data.list[0].main.feels_like),
                    country: data.city.country,
                    description: data.list[0].weather[0].description,
                    iconWeather: data.list[0].weather[0].icon,
                    date: data.list[0].dt_text
                }

                setResults((state) => ({
                    ...state,
                    [city]: cityData
                }));

                return cityData;
            });
    };

    return { city, setCity, getWeather, results: results[city] };
}