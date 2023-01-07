import { useState } from 'react';
import Searchbar from './components/Searchbar';
import Card from './components/Card';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [cardTitle, setCardTitle] =useState("");
  
  return (
    <div>
      <h1>Lexi &bull; Learn</h1>

      <Searchbar 
        searchWord={searchWord} 
        setSearchWord={setSearchWord} 
        setWordData={setWordData}
        wordData={wordData}
        setCardTitle={setCardTitle} 
      />

      <Card 
        searchWord={searchWord} 
        wordData={wordData}
        cardTitle={cardTitle}
        />
      
    </div>
  )
}

export default App
