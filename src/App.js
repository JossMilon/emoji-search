import './App.css';

//Import Emoji data
import data from "./data.json"

//Import state
import {useState} from "react";

//Import components
import EmojiBlock from './Components/EmojiBlock';
import Header from './Components/Header';

function App() {
  const [searchState, setSearchState] = useState("");
  const [copyState, setCopyState] = useState("");
  return (
    <div className="container">
      <Header setSearchState={setSearchState} searchState={searchState} />
      <EmojiBlock data={data} searchState={searchState} copyState={copyState} setCopyState={setCopyState}/>
    </div>
  );
}

export default App;
