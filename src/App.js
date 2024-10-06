import "./index.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <br/>
      <footer>This project was coded by Matshelane Rapolai and is <a href="https://github.com/MMRapolai/my-react-app/" target="_blank">open-sourced on GitHub</a> and hosted on <a href="https://murielweek4react.netlify.app/" target="_blank">Netlify</a></footer>
    </div>
  );
}
