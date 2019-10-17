import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class Main extends Component {

    state = {
        repos: []
    }
    
    componentDidMount(){
        this.loadRepos();
    }

    loadRepos = async () => {
        const response = await api.get('/paulinelymorgan/repos');
        console.log(response.data);
        this.setState({ repos: response.data });
    }

    render(){
        const {repos} = this.state;

        return (
           <div className="repos-list">
               {repos.map(repo => (
                   <article key={repo.id}>
                       <strong>{repo.name}</strong>
                       <p>{repo.language}</p>
                       <a href={repo.html_url}>acessar</a>
                   </article>
               ))}
               <div className="actions">
                    <button>Anterior</button>
                    <button>Próxima</button>
               </div>
           </div>
        )
    }
}