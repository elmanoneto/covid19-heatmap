import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.covid19.finspect.me/brcovid19/'
})

export default http