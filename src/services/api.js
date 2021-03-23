import axios from 'axios';

//https://api.hgbrasil.com/weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875&user_ip=remote

export const key = 'c47d7dd5 '

const api = axios.create({
    baseUrl: 'https://api.hgbrasil.com/'
})

export default  api