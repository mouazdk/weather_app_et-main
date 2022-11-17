import React, { useState } from "react";

export default function Title() {
  // make a function in typescript to get the date of current day and time
  // and display it in the title
  const [date, setDate] = useState(new Date());
  return <h1>Welcome to Weather App</h1>;
}
