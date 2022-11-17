import { TextField } from '@mui/material';
import React from 'react';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ setCity, getWeather }: FormProps) {
  return (
    <form onSubmit={getWeather}>
        <TextField
          id="filled-search"
          label="Hier Stadt eingeben"
          placeholder="Stadt"
          type="search"
          variant="filled"
          color='primary'
          onChange={(e) => setCity(e.target.value)}
        />      
      <button type="submit">Suchen</button>
    </form>
  );
}
