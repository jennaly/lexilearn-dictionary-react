import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Favorites from './components/Favorites';

function App() {
  const savedFavoriteWords = JSON.parse(localStorage.getItem('favoriteWords'))

  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [cardTitle, setCardTitle] = useState("");
  const [favoriteWords, setFavoriteWords] = useState(savedFavoriteWords);
 
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
        favoriteWords={favoriteWords}
        setFavoriteWords={setFavoriteWords}
      />

      <Favorites
        favoriteWords={favoriteWords}
      />
      
    </div>
  )
}

export default App
