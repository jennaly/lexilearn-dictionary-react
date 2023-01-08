import React, { useEffect } from 'react';

const Favorites = ({ favoriteWords }) => {

    useEffect(() => {
        localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords));
      }, [favoriteWords]);

    return (
        <div>
            { favoriteWords.length > 0 && favoriteWords.map((word, index) => {
                return <span key={index}>{word.term}</span>
            })}
        </div>
    )
}

export default Favorites
