import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Repo extends Component{
    
    state = {
        loading: true,
        news: {},
        comments: {},
        comments_loading: true
    }

    async componentDidMount(){
        const Api = require('../../services/api');
        const {user_id} = this.props.match.params;

        const response = await Api.tc_ideas.get(`${user_id}?page=0&limit=10`);
        this.setState({ news: response.data, loading: false });
    }

    async getComments(uri){
        const Api = require('../../services/api');
        //const {idea_id} = this.props.match.params;
        //const response = await Api.tc_comments.get(`${idea_id}?limit=1000&since=0`);
        const response = await Api.tc_comments.get(uri);
        this.setState({ comments: response.data, comments_loading: false });
        console.log(this.state.comments);
    } 

    render(){
        const {news, loading} = this.state;

        return (loading ? <div className="repos-list">loading...</div> : 
            <div className="news-list">
               {news.map(news_item => (
                   <article key={news_item.id}>
                       <span><strong>{news_item.title}</strong> em: {(new Date(news_item.create_at).getDate())+'/'+(new Date(news_item.create_at).getMonth()+1)}</span>
                       <p>{news_item.tickers}</p>
                       <div className="post__content" dangerouslySetInnerHTML={{__html: news_item.content}}></div>
                       <Link onClick={this.getComments(`${news_item.id}?limit=1000&since=0`)}><span className="comments">comentários ({news_item.comments})</span></Link>
                   </article>
               ))}
               <div className="actions">
                    <button>Anterior</button>
                    <button>Próxima</button>
               </div>
           </div>
        );

    }
}