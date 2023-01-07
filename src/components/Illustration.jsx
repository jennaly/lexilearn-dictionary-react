import React from 'react';

const Illustration = ({ wordData }) => {
    return (
        <div>

            {/* there are no results to the search */}
            { !wordData.length &&
                <figure>
                    <img 
                    src="https://placeimg.com/400/400/arch"
                    alt="Album"/>
                </figure>
            }

            {/* there are results to the search, checks if there is an img url available  */}
            { wordData.length > 0 &&
                <figure>
                    <img 
                    src={ wordData[0].image_url ? `${wordData[0].image_url}` : "https://placeimg.com/400/400/arch" } 
                    alt="Album"/>
                </figure>
            }

        </div>
    )
}

export default Illustration
