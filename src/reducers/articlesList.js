import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articleList: [],
}

const ArticleReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch (action.type){
        case actionTypes.FETCH_ARTICLE_LIST:
            return { ...state, articleList: action.target};
        default:
            return state;
    }
}

export default ArticleReducer;