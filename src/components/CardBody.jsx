import React from 'react'

const CardBody = ({ wordData }) => {
    return (
        <div className="max-h-[250px] lg:h-[172px] overflow-auto text-lg lg:text-xl mt-4">
            { wordData.length > 0 && wordData.map((definition, index) => {
                return (
                    <div key={index} className="flex flex-col font-gaegu text-yellow-700 my-4">

                        <span className="uppercase">{definition.type}</span>
                        <p>{definition.definition}</p>

                        {/* not all definitions has an accompanying example */}
                        { definition.example && 
                            <p className="text-yellow-500">Example: "{definition.example}"</p>
                        }

                    </div>
                )
            })}

            { !wordData.length && 
                <p className="font-gaegu text-yellow-700">We don't have the word you're searching for. Please revise your search or enter another word, thank you!</p>
            }

        </div>
    )
}

export default CardBody
