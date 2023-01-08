import React from 'react';

const Favorites = ({ favoriteWords, getWordData, setWordData, setCardTitle }) => {
      
    const handleSubmit =  async (word) => {
        const data = await getWordData(word);
       
        setWordData(data.definitions);
        setCardTitle(data.word);
    }

    return (
        <div>
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <span 
                        key={index} 
                        onClick={() => handleSubmit(favoriteWords[index].term)}
                        >
                            {word.term}
                        </span>
            })}
        </div>
    )
}

export default Favorites
