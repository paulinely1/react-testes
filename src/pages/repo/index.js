import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Repo extends Component{
    state = {
        repo: {},
        repoName: 0,
        loading: true
    }

    async componentDidMount(){
        const Api = require('../../services/api');
        const {gitUser, repoName} = this.props.match.params;

        const response = await Api.git.get(`/repos/${gitUser}/${repoName}`);
        this.setState({ repo: response.data, repoName, loading: false });
    }

    render(){
        const {repo, repoName, loading} = this.state;

        return (loading ? <div className="repos-list">loading...</div> : 

            <div className="repo-details">
                    <h2>{repo.name} ({repo.size})</h2>
                    <p>repoName/id: {repoName}</p>
                    <p>language: {repo.language}</p>
                    <p>description: {repo.description === null ? "null" : repo.description}</p>
                    <p>watchers: {repo.watchers}</p>
                    <div className="actions">
                        <Link to={'/'}>Voltar</Link>
                    </div>  
            </div>
        );

    }
}