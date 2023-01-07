import React from 'react';

const Favorites = ({ favoriteWords }) => {
    console.log(favoriteWords)
    return (
        <div>
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <span key={index}>{word.term}</span>
            })}
        </div>
    )
}

export default Favorites
