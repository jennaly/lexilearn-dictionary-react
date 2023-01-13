import React from 'react';
import { useStateContext } from '../context/StateContext';
import Loading from './Loading';

const Searchbar = () => {

    const { getWordData, loading, setLoading, searchWord, setSearchWord, setWordData, setWordDifficulty, setCardTitle } = useStateContext();
     
    const handleSubmit =  async event => {
        event.preventDefault();
        setLoading(true);

        const data = await getWordData(searchWord);
        setLoading(false);

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
        <div className="max-w-sm my-6 lg:max-w-xl mx-auto">
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
            
            {loading && <Loading />}
            
        </div>
    )
}

export default Searchbar
