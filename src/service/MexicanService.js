import axios from 'axios';

export const getMexicanFood = () => {
    return new Promise((resolve, reject) => {
        axios('mexican/list', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                console.log('mexican food=====> ', res.data);
                resolve(res.data.data)
            })
            .catch(err => {
                console.log("err===> ", JSON.stringify(err));
                reject(err)
            })
    })
}
