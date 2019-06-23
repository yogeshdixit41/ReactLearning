import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0e109227f2dbe36bfcba7caad017703140a2a2a1a0942265eb70a44d386c22ba'
    }
});
