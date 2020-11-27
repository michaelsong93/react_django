import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getArticles_ = (articleList) => ({
    type: actionTypes.FETCH_ARTICLE_LIST,
    target: articleList
});

export const getArticles = () => (dispatch) =>
    axios.get('/api/articles')
        .then((res) => {
            dispatch(getArticles_(res.data))
            return res;
        })