import React from 'react';
import CardBody from './CardBody';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Card = ({  wordData, cardTitle, favoriteWords, setFavoriteWords, wordDifficulty, isFavorite }) => {

    const handleFavorite = () => {
        if (isFavorite) {
            removeWordFromFavorites();
            return;
        } else {
            addWordToFavorites();
        }
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
    }

    const removeWordFromFavorites = () => {
        const newFavoritesList = favoriteWords.filter(favoriteWord => favoriteWord.term !== cardTitle);

        setFavoriteWords(newFavoritesList);
    }

    return (
        <div>
            {cardTitle.length > 0 &&

            <div className="max-w-sm my-5 mx-8 lg:max-w-xl mx-auto">
                
                <div className="card bg-base-100 shadow-xl max-h-[610px]">

                    <div className="card-body">

                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {wordData.length > 0 &&
                                <h2 className="card-title font-fredoka-one text-4xl lg:text-5xl underline-offset-14 w-full pb-1 lg:pb-4 mr-6 border-b-2 border-yellow-700 text-yellow-700">
                                    
                                    {cardTitle}

                                    {wordData.length > 0 && wordData[0].emoji && 
                                        <span>{wordData[0].emoji}</span>
                                    }
                                </h2>
                            }   

                            {!wordData.length && 
                                <figure className="w-full">
                                    <img 
                                    src="../../wordNotFound.png"
                                    alt="Error Message Picture"
                                    className="rounded-full"
                                    />
                                </figure>
                            }

                            {wordData.length > 0 && wordData[0].image_url &&
                            <figure className="mt-4 w-1/2 lg:w-2/5 lg:mt-0">
                                <img 
                                src={`${wordData[0].image_url}`} 
                                alt={`Illustration of ${cardTitle}`}
                                className="rounded-full border-dotted border-2 border-yellow-800 p-1"
                                />
                            </figure>
                            }
                        </div>

                        <CardBody wordData={wordData} />

                        <div className="card-actions justify-end">
                        
                        {wordData.length > 0 && 
                            <button
                            onClick={handleFavorite}
                            className="flex items-center gap-2 uppercase font-gaegu text-lg bg-yellow-700 hover:bg-yellow-800 text-yellow-200"
                            >
                                {isFavorite && <AiFillStar style={{ width: '20px', height: '20px', color: 'yellow'}} />}
                                {!isFavorite && <AiOutlineStar style={{ width: '20px', height: '20px', color: 'yellow'}} />}
                                Save
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
