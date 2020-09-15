import axios from 'axios';

export const getCookies = () => {
    return new Promise((resolve, reject) => {
        axios('cookies/list', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                resolve(res.data.data)
            })
            .catch(err => {
                console.log("err===> ", JSON.stringify(err));
                reject(err)
            })
    })
}
