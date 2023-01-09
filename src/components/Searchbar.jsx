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
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={(e => setSearchWord(e.target.value))}
                placeholder="Type here" 
                className="input w-full max-w-xs" 
                />
                <button type="submit">Button</button>
            </form>
        </div>
    )
}

export default Searchbar
