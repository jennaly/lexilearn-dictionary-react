import React from 'react';
import { useStateContext } from '../context/StateContext';

const Favorites = () => {
    const { setLoading, favoriteWords, setFavoriteWords, getWordData, setWordData, setCardTitle } = useStateContext();

    const handleSubmit =  async (word) => {
        setLoading(true);

        const data = await getWordData(word);
        setLoading(false);
        setWordData(data.definitions);
        setCardTitle(data.word);
    }

    const removeWordFromFavorites = (e, word) => {
        e.stopPropagation()
        
        const newFavoritesList = favoriteWords.filter(favoriteWord => favoriteWord.term !== word);

        setFavoriteWords(newFavoritesList);
    }

    return (
        <div className="max-w-sm my-5 lg:max-w-xl mx-auto flex flex-wrap gap-8 justify-center">
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <div 
                        key={index}
                        onClick={() => handleSubmit(favoriteWords[index].term)}
                        className="inline-block lg:mx-4 py-4 px-8 font-gaegu text-yellow-700 text-xl sticky-note relative" 
                        >
                            <span className="p-2">{word.term}</span>
                            <div className="absolute -right-2 -top-2">
                                <button 
                                onClick={(e) => removeWordFromFavorites(e, favoriteWords[index].term)}
                                className="rounded-full p-2 hover:border hover:border-yellow-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default Favorites
