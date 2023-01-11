import React from 'react'

const CardBody = ({ wordData }) => {
    return (
        <div className="max-h-[300px] overflow-auto mt-4 mb-2">
            { wordData.length > 0 && wordData.map((definition, index) => {
                return (
                    <div key={index} className="flex flex-col font-gaegu text-yellow-700 my-6">

                        <span className="uppercase text-2xl">{definition.type}</span>
                        <p className="text-2xl">{definition.definition}</p>

                        {/* not all definitions has an accompanying example */}
                        { definition.example && 
                            <p className="text-yellow-500 text-2xl">Example: "{definition.example}"</p>
                        }

                    </div>
                )
            })}

            { !wordData.length && 
                <p className="font-gaegu text-yellow-700 text-2xl">We don't have the word you're searching for. Please revise your search or enter another word, thank you!</p>
            }

        </div>
    )
}

export default CardBody
