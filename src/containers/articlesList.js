import React, {Component} from 'react';
import {connect} from 'react-redux';
import Article from '../components/Article';
import * as actionCreators from '../actions/index';

export const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(actionCreators.getArticles()),
})

export const mapStateToProps = (state) => ({
    articleList: state.lists.articleList,
})

class articles extends Component {
    componentDidMount(){
        this.props.actionCreaters.getArticles();
    }

    renderArticle(){
        return this.props.articleList.map((article) => {
            return <li key={article.id}>
                <Article articleData={article}/>
            </li>;
        });
    }

    render(){
        return(
            <div>
                <h2> List </h2>
                <ul>
                    {this.renderArticle()}
                </ul>
            </div>
        );
    }
}

// export default connect((state) => {
//     return {
//         articleList: state.lists.articleList
//     };
// }, {getArticles})(articles);

export default connect(mapStateToProps, mapDispatchToProps)(articles);