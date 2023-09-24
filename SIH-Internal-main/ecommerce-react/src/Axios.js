import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY0MWE3ZjI4MjQ3MGFhYmFiZjY0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjM1MDE4OSwiZXhwIjoxNjYyNjA5Mzg5fQ.xcH_yN4uulRdv_F8gGuLX9whXjoTYvD3pDLT6YWqV8M'

export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers:{token:`Bearer ${TOKEN}` }
})
