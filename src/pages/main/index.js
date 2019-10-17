import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Main extends Component {

    state = {
        repos: [],
        loading: true
    }
    
    componentDidMount(){
        this.loadRepos();
    }

    loadRepos = async () => {
        const response = await api.get('/users/paulinelymorgan/repos');
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
                       <Link to={`/repos/${repo.name}`}>acessar</Link>
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