import axios from 'axios'


export const api = axios.create({
    baseURL: "https://api-node-cadastro-clientes.vercel.app/"
})