import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Favorites from './components/Favorites';
import DownloadButtons from './components/DownloadButtons';

function App() {

  const savedFavoriteWords = JSON.parse(localStorage.getItem('favoriteWords'));

  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [wordDifficulty, setWordDifficulty] = useState(0);
  const [cardTitle, setCardTitle] = useState("");
  const [favoriteWords, setFavoriteWords] = useState(savedFavoriteWords || []);


  useEffect(() => {
    localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords));
  }, [favoriteWords]);

  const getWordData = async (word) => {
    const res = await fetch (
        `https://lexilearn-proxy-api.cyclic.app/api/dictionary/${word}`
      )

    const data = await res.json();

    return data; 

  }
 
  return (
    <div className="h-screen w-screen">

      <div className="pt-10">
        <h1 className="font-fredoka-one font-semibold uppercase text-yellow-700 tracking-widest text-7xl text-center">Lexi &bull; Learn</h1>
      </div>

      <Searchbar 
        getWordData={getWordData}
        setWordDifficulty={setWordDifficulty}
        searchWord={searchWord} 
        setSearchWord={setSearchWord} 
        setWordData={setWordData}
        wordData={wordData}
        setCardTitle={setCardTitle} 
      />

      <Card 
        searchWord={searchWord} 
        wordData={wordData}
        wordDifficulty={wordDifficulty}
        cardTitle={cardTitle}
        favoriteWords={favoriteWords}
        setFavoriteWords={setFavoriteWords}
      />

      <Favorites
        favoriteWords={favoriteWords}
        setFavoriteWords={setFavoriteWords}
        getWordData={getWordData}
        setWordData={setWordData}
        setCardTitle={setCardTitle} 
      />

      <DownloadButtons
        favoriteWords={favoriteWords}
      />
      
    </div>
  )
}

export default App
