import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const WordContext = createContext();

export const WordContextProvider = ({ children }) => {

  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [wordDifficulty, setWordDifficulty] = useState(0);
  const [cardTitle, setCardTitle] = useState("");
  const [favoriteWords, setFavoriteWords] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWords = async () => {
      const res = await fetch( `http://localhost:8882/api/favoriteWords`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      const data = await res.json();

      setFavoriteWords(data);
    };

    const getWordsLocally = () => {
      const words = JSON.parse(localStorage.getItem('favoriteWords'));

      setFavoriteWords(words);
    };

    if (user) {
      fetchWords();
    } else {
      getWordsLocally();
    }
  }, [user]);

  

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

          }}
      >
          {children}
      </WordContext.Provider>
  )

}  

export const useWordContext = () => useContext(WordContext);