import { TextField } from "@mui/material";
import React from "react";

type FormProps = {
  onChange: (city: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  label: string;
  placeholder: string;
};

export default function Form({
  onChange,
  onSubmit,
  label,
  placeholder,
}: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label={label}
        placeholder={placeholder}
        type="search"
        variant="filled"
        color="primary"
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Suchen</button>
    </form>
  );
}
