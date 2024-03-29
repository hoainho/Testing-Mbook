import axios from 'axios'

export default async function requestAPI(url, method, body, injectHeader) {
    // let urlOrigin = 'http://localhost:3000'
    let urlOrigin = 'https://doanmobile.herokuapp.com'
    const headers = {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        ...injectHeader,
    };

    let objMeta = {
        method,
        url: `${urlOrigin}${url}`,
        headers,
        data: body
    };
    return await axios(objMeta);
}


export const REQUEST_METHOD = {
    GET:"GET",
    POST:"POST",
    PUT:"PUT",
    DELETE:"DELETE"
}