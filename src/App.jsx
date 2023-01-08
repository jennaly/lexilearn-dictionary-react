import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Favorites from './components/Favorites';

function App() {

  const savedFavoriteWords = JSON.parse(localStorage.getItem('favoriteWords'));

  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [cardTitle, setCardTitle] = useState("");
  const [favoriteWords, setFavoriteWords] = useState(savedFavoriteWords || []);

  useEffect(() => {
    localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords));
  }, [favoriteWords]);

  const getWordData = async (word) => {
    const res = await fetch (
        `https://lexilearn-proxy-api.cyclic.app/api/dictionary/${word}`, {
            
        headers: {
          'Authorization': `Token ${import.meta.env.REACT_APP_OWL_API_KEY}`,
        }
      }
    )

    const data = await res.json();

    return data; 

  }
 
  return (
    <div>
      <h1>Lexi &bull; Learn</h1>

      <Searchbar 
        getWordData={getWordData}
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
        getWordData={getWordData}
        setWordData={setWordData}
        setCardTitle={setCardTitle} 
      />
      
    </div>
  )
}

export default App
