import React, { createContext, useContext, useState, useEffect } from 'react';

const WordContext = createContext();

export const WordContextProvider = ({ children }) => {

    // temporarily not needed for the purpose of testing crud operations to mongodb
    const savedFavoriteWords = JSON.parse(localStorage.getItem('favoriteWords'));

    const [searchWord, setSearchWord] = useState("");
    const [wordData, setWordData] = useState([]);
    const [wordDifficulty, setWordDifficulty] = useState(0);
    const [cardTitle, setCardTitle] = useState("");
    const [favoriteWords, setFavoriteWords] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);

    // temporary state until login/auth is set up
    const [user, setUser] = useState(true);
  
    useEffect(() => {
      const getWordsFromDB = async () => {
        const res = await fetch (
          `http://localhost:8882/api/favoriteWords`
        );
        const data = await res.json();
        setFavoriteWords(data);
      }
      getWordsFromDB();
    }, []);
  
    useEffect(() => {
      const checkIsFavorite = () => {
        for (const word of favoriteWords) {
          if (word.term === cardTitle) {
            setIsFavorite(true);
            return;
          } 
        }
        setIsFavorite(false);
      }
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
        <WordContext.Provider
            value={{
                user,
                loading,
                setLoading,
                wordData,
                setWordData,
                getWordData,
                wordDifficulty,
                setWordDifficulty,
                searchWord,
                setSearchWord,
                cardTitle,
                setCardTitle,
                favoriteWords,
                setFavoriteWords,
                isFavorite,
                setIsFavorite,
            }}
        >
            {children}
        </WordContext.Provider>
    )

}  

export const useWordContext = () => useContext(WordContext);