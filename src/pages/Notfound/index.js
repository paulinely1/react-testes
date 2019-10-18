import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Notfound extends Component {
    render(){
        return (
            <div>
                <h3>ERRO 404 - Not Found</h3>
                <Link to={'/'}>home</Link>
            </div>
        );
    }
}