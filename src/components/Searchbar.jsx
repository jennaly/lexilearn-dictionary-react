import React from 'react';
import { useState } from 'react';

const Searchbar = ({ searchWord, setSearchWord, setWordData, setCardTitle }) => {
    const getWordData = async (word) => {
        const res = await fetch (
            `https://lexilearn-proxy-api.cyclic.app/api/dictionary/${word}`, {
                
            headers: {
              'Authorization': `Token ${import.meta.env.REACT_APP_OWL_API_KEY}`,
            }
          }
        )
    
        const data = await res.json();
        
        if (data.definitions) {
            setWordData(data.definitions);
            setCardTitle(data.word);
        } else {
            setWordData([])
            setCardTitle(searchWord)
        }
       
    }
    
      
    const handleSubmit =  async event => {
        event.preventDefault();
        await getWordData(searchWord);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={(e => setSearchWord(e.target.value))}
                placeholder="Type here" 
                className="input w-full max-w-xs" 
                />
                <button type="submit">Button</button>
            </form>
        </div>
    )
}

export default Searchbar
