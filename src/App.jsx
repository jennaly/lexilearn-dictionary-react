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
  const [isFavorite, setIsFavorite] = useState(false);

  const checkIsFavorite = () => {
    console.log(favoriteWords)
    for (const word of favoriteWords) {
      if (word.term === cardTitle) {
        setIsFavorite(true);
        return;
      } 
    }
    setIsFavorite(false);
  }

  useEffect(() => {
    checkIsFavorite();
  }, [wordData, favoriteWords]);


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
    <div className="w-screen px-5">

      <div className="pt-10">
        <h1 className="font-fredoka-one font-semibold uppercase text-yellow-700 tracking-widest text-5xl lg:text-7xl text-center">
          <a href="/" className="text-yellow-700 hover:text-yellow-800">
          Lexi &bull; Learn
          </a>
        </h1>
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
        isFavorite={isFavorite}
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
