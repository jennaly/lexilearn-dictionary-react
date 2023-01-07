import React from 'react'

const CardBody = ({ wordData }) => {
    return (
        <div>
            { wordData.length > 0 && wordData.map((definition, index) => {
                return (
                    <div key={index}>

                        <span>{definition.type}</span>
                        <p>{definition.definition}</p>

                        {/* not all definitions has an accompanying example */}
                        { definition.example && 
                            <p>{definition.example}</p>
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
