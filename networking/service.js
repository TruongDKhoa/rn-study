/*
    GET, POST, PUT, DELETE data here.
*/
const url = "http://localhost:3000/foods"
// const fakeUrl = 'https://jsonplaceholder.typicode.com/comments';

export class StudyService {

    async getCommentListByAsync() {
        const data = await fetch(url);
        const res = await data.json();
        console.log('service: ', res);
        // res.then(datresa => {
        //     console.log('service: ', datresa.json);
        // })
        return res;
    }

    async getFoodList() {
        const data = await fetch(url);

        return data; // Async function will return Promise<...data>
    }
}

/**
 * fetch(requestInfo, requestInit)
 *
 * fetch(url, {
 *     method: GET/POST/PUT/DELETE,
 *     headers: {
 *        'Content-Type': 'application/json'
 *     },
 *     body: JSON.stringify({
 *         ...
 *     })
 * })
 *
 */