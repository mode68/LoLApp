import axios from 'axios';

const instance = axios.create();

instance.defaults.headers.common['X-Riot-Token'] = 'RGAPI-b9d89be7-9413-46df-aa1f-bacdd3680561';

export default instance;