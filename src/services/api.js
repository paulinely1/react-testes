import axios from 'axios';

const git = axios.create({
    baseURL: 'https://api.github.com'
});

const token = 't4gqy3kyypghijwm4yhpxgny9w';

const tc_ideas = axios.create({
    baseURL: 'https://tc.tradersclub.com.br/ideas/api/list/user/',
    headers: {'Authorization': `BEARER ${token}`}
});

const tc_comments = axios.create({
    baseURL: 'https://tc.tradersclub.com.br/ideas/api/comment/',
    headers: {'Authorization': `BEARER ${token}`}
});

export { git, tc_ideas, tc_comments }