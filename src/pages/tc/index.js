import React, {Component} from 'react';
//import { Link } from 'react-router-dom';

 import './styles.css';

export default class Repo extends Component{
    state = {
        news: {},
        loading: true
    }

    async componentDidMount(){
        const Api = require('../../services/api');
        const {user_id} = this.props.match.params;

        const response = await Api.tc.get(`${user_id}?page=0&limit=20`);
        this.setState({ news: response.data, loading: false });
    }

    render(){
        const {news, loading} = this.state;

        return (loading ? <div className="repos-list">loading...</div> : 
            <div className="news-list">
               {news.map(news_item => (
                   <article key={news_item.id}>
                       <span><strong>{news_item.title}</strong> em: {(new Date(news_item.create_at).getDate())+'/'+(new Date(news_item.create_at).getMonth()+1)}</span>
                       <div className="post__content" dangerouslySetInnerHTML={{__html: news_item.content}}></div>
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