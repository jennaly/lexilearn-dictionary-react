import React from 'react';

const Favorites = ({ favoriteWords, getWordData, setWordData, setCardTitle }) => {
      
    const handleSubmit =  async (word) => {
        const data = await getWordData(word);
       
        setWordData(data.definitions);
        setCardTitle(data.word);
    }

    return (
        <div className="max-w-xl mx-auto flex flex-wrap gap-8 justify-center mt-10">
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <span 
                        key={index}
                        className="mx-4 py-4 px-8 font-gaegu text-yellow-700 text-xl sticky-note" 
                        onClick={() => handleSubmit(favoriteWords[index].term)}
                        >
                            {word.term}
                        </span>
            })}
        </div>
    )
}

export default Favorites
