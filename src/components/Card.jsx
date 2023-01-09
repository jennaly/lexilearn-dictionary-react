import React from 'react';
import Illustration from './Illustration';
import CardBody from './CardBody';

const Card = ({  wordData, cardTitle, favoriteWords, setFavoriteWords }) => {

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
        console.log(definitions)
        const entry = {
            "term": cardTitle,
            "definitions": [
                ...definitions
            ]
        }

        console.log(entry)

        setFavoriteWords(prevFavoriteWords => [...prevFavoriteWords, entry])
    }

    const removeWordFromFavorites = () => {
        const newFavoritesList = favoriteWords.filter(word => word.term !== cardTitle);

        setFavoriteWords(newFavoritesList);
    }
    
    return (
        <div>
            {cardTitle.length > 0 && 

                <div className="card lg:card-side bg-base-100 shadow-xl">

                    <Illustration wordData={wordData} />

                    <div className="card-body">
                        <h2 className="card-title">{cardTitle}
                            {wordData.length > 0 && wordData[0].emoji && 
                                <span>{wordData[0].emoji}</span>
                            }
                        </h2>
                        
                        <CardBody wordData={wordData} />
                        
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
                
            }
        </div>
    )
}

export default Card
