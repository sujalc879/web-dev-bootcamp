import axios from 'axios'
import { BACKEND_URL } from '../../config'

export async function signupUser({ username, password }: { username: string, password: string}) {
    const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password
    });

    return response.data;
}

export async function signinUser({ username, password }: { username: string, password: string}) {
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password
    });

    return response.data;
}

