import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5c34t4jdyYj75Q5SiR-XEB_RvDEQQXvb0GUoAcXeGFw'
    },
})