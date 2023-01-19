import React, {useState, useEffect} from 'react';
import { useWordContext } from '../context/WordContext';
import { useAuthContext } from '../hooks/useAuthContext';
import CardBody from './CardBody';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Card = () => {

    const { wordData, cardTitle, favoriteWords, setFavoriteWords, wordDifficulty } = useWordContext();
    const { user } = useAuthContext();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const checkIsFavorite = () => {
          for (const word of favoriteWords) {
            if (word.term === cardTitle) {
              setIsFavorite(true);
              return;
            } 
          }
          setIsFavorite(false);
        }
        checkIsFavorite();
    }, [wordData, favoriteWords]);

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

        if (user) {

            const addWordToDB = async () => {
                const res = await fetch("http://localhost:8882/api/favoriteWords/", {
                    method: "POST",
                    body: JSON.stringify(entry),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                
                const data = await res.json();

                setFavoriteWords(prevFavoriteWords => [...prevFavoriteWords, data]);
            }
            addWordToDB();

        } else {
            setFavoriteWords(prevFavoriteWords => [...prevFavoriteWords, entry]);
        }
    }

    const removeWordFromFavorites = () => {
        const deletedWord = favoriteWords.find(word => word.term == cardTitle);
        const newFavoritesList = favoriteWords.filter(favoriteWord => favoriteWord !== deletedWord);

        setFavoriteWords(newFavoritesList);       

        if (user) {
            
            const removeWordFromDB = async () => {
                const { _id } = deletedWord;

                const res = await fetch(`http://localhost:8882/api/favoriteWords/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
            }

            removeWordFromDB();
        }
    }

    return (
        <div>
            {cardTitle.length > 0 &&

            <div className="max-w-sm mb-4 mx-8 lg:max-w-xl mx-auto">
                
                <div className="card bg-base-100 shadow-xl lg:h-[375px]">

                    <div className="p-5">

                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {wordData.length > 0 &&
                                <div className="card-title font-fredoka-one text-4xl lg:text-5xl underline-offset-14 w-full pb-1 lg:pb-4 lg:mr-6 border-b-2 border-yellow-700 text-yellow-700">

                                    <div className="w-full flex gap-2 ">
                                        <h2>{cardTitle}</h2>

                                        {wordData.length > 0 && wordData[0].emoji && 
                                            <span>{wordData[0].emoji}</span>
                                        }
                                    </div>

                                    {wordData.length > 0 && 
                                        <button
                                        onClick={handleFavorite}
                                        className="flex items-center uppercase font-gaegu text-lg tooltip bg-base-100 outline-0 focus:outline-0 focus-visible:outline-0 hover:border-0"
                                        data-tip="Save your favorite words to your study set"
                                        >
                                            {isFavorite && <AiFillStar style={{ width: '40px', height: '40px', color: '#EBD678'}} />}
                                            {!isFavorite && <AiOutlineStar style={{ width: '40px', height: '40px', color: '#EBD678'}} />}
                                        </button>
                                    }

                                </div>
                            }   

                            {!wordData.length && 
                                <figure className="mx-auto w-10/12">
                                    <img 
                                    src="../../wordNotFound.png"
                                    alt="Error Message Picture"
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

                    </div>
                </div>
                
            </div>
            
            }
        </div>

    )
}

export default Card
