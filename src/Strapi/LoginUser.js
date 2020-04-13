import axios from 'axios'
import {url} from '../Utils/ApiCats'

async function loginUser({email, password}){
    const response = await axios.post(`${url}/auth/local`,{
        identifier:email,
        password
    })
    // .then(response => {console.log('response login', response)})
    .catch(error => {console.log(error)})
    return response
}

export default  loginUser