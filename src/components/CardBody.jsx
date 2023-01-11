import React from 'react'

const CardBody = ({ wordData }) => {
    return (
        <div>
            { wordData.length > 0 && wordData.map((definition, index) => {
                return (
                    <div key={index} className="flex flex-col font-gaegu text-yellow-700 my-6">

                        <span className="uppercase text-2xl">{definition.type}</span>
                        <p className="text-2xl">{definition.definition}</p>

                        {/* not all definitions has an accompanying example */}
                        { definition.example && 
                            <p className="text-yellow-500 text-2xl">"{definition.example}"</p>
                        }

                    </div>
                )
            })}

            { !wordData.length && 
                <p>No word in database</p>
            }

        </div>
    )
}

export default CardBody
