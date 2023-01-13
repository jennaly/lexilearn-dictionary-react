import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

    const savedFavoriteWords = JSON.parse(localStorage.getItem('favoriteWords'));

    const [searchWord, setSearchWord] = useState("");
    const [wordData, setWordData] = useState([]);
    const [wordDifficulty, setWordDifficulty] = useState(0);
    const [cardTitle, setCardTitle] = useState("");
    const [favoriteWords, setFavoriteWords] = useState(savedFavoriteWords || []);
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
  
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
        <Context.Provider
            value={{
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
        </Context.Provider>
    )

}  

export const useStateContext = () => useContext(Context);