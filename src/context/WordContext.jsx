import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const WordContext = createContext();

export const WordContextProvider = ({ children }) => {

  const [searchWord, setSearchWord] = useState("");
  const [wordData, setWordData] = useState([]);
  const [wordDifficulty, setWordDifficulty] = useState(0);
  const [cardTitle, setCardTitle] = useState("");

  
  const [loading, setLoading] = useState(false);

  const { user } = useAuthContext();

  

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
          }}
      >
          {children}
      </WordContext.Provider>
  )

}  

export const useWordContext = () => useContext(WordContext);