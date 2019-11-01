import axios from 'axios';

const git = axios.create({
    baseURL: 'https://api.github.com'
});

const token = '3cuih5hgubd8dyjdang9oaq8mh';

const tc = axios.create({
    baseURL: 'https://tc.tradersclub.com.br/ideas/api/list/user/',
    headers: {'Authorization': `BEARER ${token}`}
});

export { git, tc }