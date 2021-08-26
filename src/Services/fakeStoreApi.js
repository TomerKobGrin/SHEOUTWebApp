import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})

const getFakeStoreData = () => {
    return api.get('/')
}

export default {
    getFakeStoreData
}