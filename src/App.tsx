import "./App.css";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import useResults from "./hooks/useResults";

// do a function using usecallback to prevent the app from rerendering
// https://reactjs.org/docs/hooks-reference.html#usecallback

export default function App() {
  const { getWeather, results, setCity} = useResults();
  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      {results.cityName && <Results results={results} />}
      
    </div>
  );
}
