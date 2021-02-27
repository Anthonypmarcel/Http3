//instanitiate the Constructor
const http = new HTTP();

//call the methods
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err))

const data = {name:'antho', gender:'male', age:'sun'}

http.post('https://jsonplaceholder.typicode.com/posts', data)
.then(post => console.log(post))
.catch(err => console.log(err))

http.put('https://jsonplaceholder.typicode.com/posts/1', data)
.then(post => console.log(post))
.catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(post => console.log(post))
.catch(err => console.log(err))