import axios from 'axios';

const git = axios.create({
    baseURL: 'https://api.github.com'
});

const token = 'qhf5d39y778rxeu8oq4qefik4c';

const tc_ideas = axios.create({
    baseURL: 'https://tc.tradersclub.com.br/ideas/api/list/user/',
    headers: {'Authorization': `BEARER ${token}`}
});

const tc_comments = axios.create({
    baseURL: 'https://tc.tradersclub.com.br/ideas/api/comment/',
    headers: {'Authorization': `BEARER ${token}`}
});

export { git, tc_ideas, tc_comments }