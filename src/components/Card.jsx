import React from 'react';
import Illustration from './Illustration';
import CardBody from './CardBody';

const Card = ({ wordData, cardTitle }) => {
    console.log(wordData[0])
    return (
        <div>
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
                        <button className="btn btn-primary">Add to Favorites</button>
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
