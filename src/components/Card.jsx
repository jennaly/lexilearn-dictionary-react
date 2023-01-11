import React from 'react';
import CardBody from './CardBody';

const Card = ({  wordData, cardTitle, favoriteWords, setFavoriteWords, wordDifficulty }) => {

    const handleFavorite = () => {
        for (const word of favoriteWords) {
            if (word.term === cardTitle) {
                removeWordFromFavorites();
                return;
            } 
        }
        addWordToFavorites();
    }

    const addWordToFavorites = () => {
        const definitions = wordData.map((e, index) => `${index + 1}. (${e.type}) ${e.definition}`);
        const entry = {
            "term": cardTitle,
            "definitions": [
                ...definitions
            ],
            "difficulty": wordDifficulty,
        }

        setFavoriteWords(prevFavoriteWords => [...prevFavoriteWords, entry])
        console.log(favoriteWords)
    }

    const removeWordFromFavorites = () => {
        const newFavoritesList = favoriteWords.filter(word => word.term !== cardTitle);

        setFavoriteWords(newFavoritesList);
    }
    
    return (
        <div>
            {cardTitle.length > 0 &&

            <div className="max-w-xl mx-auto">
                
                <div className="card bg-base-100 shadow-xl">

                    <div className="card-body">

                        <div className="flex justify-between items-center">
                            <h2 className="card-title font-fredoka-one text-6xl underline-offset-14 w-full pb-4 mr-6 border-b-2 border-yellow-700 text-yellow-700 ">
                                
                                {cardTitle}

                                {wordData.length > 0 && wordData[0].emoji && 
                                    <span>{wordData[0].emoji}</span>
                                }
                            </h2>

                            {!wordData.length && 
                                <figure className="w-2/5">
                                    <img 
                                    src="https://placeimg.com/400/400/arch"
                                    alt="Error Message Picture"
                                    className="rounded-full"
                                    />
                                </figure>
                            }

                            {wordData.length > 0 && wordData[0].image_url &&
                            <figure className="w-2/5">
                                <img 
                                src={`${wordData[0].image_url}`} 
                                alt={`Illustration of ${cardTitle}`}
                                className="rounded-full border-dotted border-2 border-yellow-800 p-1"
                                />
                            </figure>
                            }
                        </div>

                        <div className="max-h-[300px] overflow-auto mt-4 mb-2">
                            <CardBody wordData={wordData} />
                        </div>

                        <div className="card-actions justify-end">
                        
                        {wordData.length > 0 && 
                            <button 
                            className="btn gap-2"
                            onClick={handleFavorite}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                Favorite
                                
                            </button>
                        }

                        </div>

                    </div>
                </div>
                
            </div>
            
            }
        </div>

    )
}

export default Card
