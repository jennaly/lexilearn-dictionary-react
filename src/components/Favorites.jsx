import React from 'react';

const Favorites = ({ favoriteWords, setWordData, setCardTitle }) => {

    const getWordData = async (word) => {
        const res = await fetch (
            `https://lexilearn-proxy-api.cyclic.app/api/dictionary/${word}`, {
                
            headers: {
              'Authorization': `Token ${import.meta.env.REACT_APP_OWL_API_KEY}`,
            }
          }
        )
    
        const data = await res.json();
        
        setWordData(data.definitions);
        setCardTitle(data.word);

    }
    
      
    const handleSubmit =  async (word) => {
        await getWordData(word);
    }

    return (
        <div>
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <span 
                        key={index} 
                        onClick={() => handleSubmit(favoriteWords[index].term)}>{word.term}
                        </span>
            })}
        </div>
    )
}

export default Favorites
