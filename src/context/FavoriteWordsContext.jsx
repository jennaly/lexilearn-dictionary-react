import { createContext, useReducer } from 'react'; 

export const FavoriteWordsContext = createContext();

export const favoriteWordsReducer = (state, action) => {
    switch(action.type) {
        case 'GET_FAVORITE_WORDS':
            return {
                favoriteWords: action.payload,
            };
        case 'CREATE_FAVORITE_WORD':
            return {
                favoriteWords: [action.payload, ...state.favoriteWords],
            };
        case 'DELETE_FAVORITE_WORD':
            return {
                favoriteWords: state.favoriteWords.filter(word => word._id !== action.payload._id)
            }
        default:
            return state;
    }
};

export const FavoriteWordsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favoriteWordsReducer, { favoriteWords: [] });

    return (
        <FavoriteWordsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FavoriteWordsContext.Provider>
    )
}