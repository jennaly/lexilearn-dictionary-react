import React from 'react';

const Searchbar = ({ getWordData, searchWord, setSearchWord, setWordData, setWordDifficulty, setCardTitle }) => {
     
    const handleSubmit =  async event => {
        event.preventDefault();
        const data = await getWordData(searchWord);

        if (data.definitions) {
            setWordData(data.definitions);
            setCardTitle(data.word);
            setWordDifficulty(data.difficulty);
        } else {
            setWordData([])
            setCardTitle(searchWord)
        }
    }

    return (
        <div className="max-w-sm my-6 mx-8 lg:max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-row bg-base-100 rounded-full items-center">
                <img src="../../search-icon.png" className="h-11 aspect-auto" />
                <input 
                type="text"
                onChange={(e => setSearchWord(e.target.value))}
                placeholder="Type here" 
                className="w-full bg-base-100 mx-1 lg:mx-2 focus:outline-none font-gaegu text-yellow-700 text-xl lg:text-2xl" 
                />
                <button 
                type="submit"
                className="bg-yellow-700 m-1 rounded-full text-base-100 tracking-widest font-gaegu hover:bg-yellow-800"
                >
                    Search
                    </button>
            </form>
        </div>
    )
}

export default Searchbar
