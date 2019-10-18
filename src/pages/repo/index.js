import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Repo extends Component{
    state = {
        repo: {},
        id: 0,
        loading: true
    }

    async componentDidMount(){
        const {id} = this.props.match.params;

        const response = await api.get(`/repos/paulinelymorgan/${id}`);
        this.setState({ repo: response.data, id, loading: false });
    }

    render(){
        const {repo, id, loading} = this.state;

        return (loading ? <div className="repos-list">loading...</div> : 

            <div className="repo-details">
                    <h2>{repo.name} ({repo.size})</h2>
                    <p>id: {id}</p>
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