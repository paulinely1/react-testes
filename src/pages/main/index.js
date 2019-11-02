import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
    
    state = {
        repos: [],
        gitUser: 'paulinelymorgan',
        loading: true
    }
    
    async componentDidMount(){
        const response = await api.get(`/users/${this.state.gitUser}/repos`);
        this.setState({ repos: response.data, loading: false });
    }

    render(){
        const {repos, loading} = this.state;

        return (loading ? <div className="repos-list">loading...</div> : 
            <div className="repos-list">
               {repos.map(repo => (
                   <article key={repo.id}>
                       <strong>{repo.name}</strong>
                       <p>{repo.language}</p>
                       <Link to={`/${this.state.gitUser}/repos/${repo.name}`}>acessar</Link>
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