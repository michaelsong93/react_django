import {combineReducers} from 'redux';
import ArticleReducer from './articlesList';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    lists: ArticleReducer,
    form: formReducer
});

export default rootReducer;