import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {

    componentDidMount(){
        this.loadRepos();
    }

    loadRepos = async () => {
        const response = await api.get('/paulinelymorgan/repos');
        console.log(response.data);
    }

    render(){
        return (
            <h1>meuaaaaa repos</h1>
        )
    }
}