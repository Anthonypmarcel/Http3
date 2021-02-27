//create the HTTP constructor
class HTTP {

//create get method    
    async get(url) {
        const response = await fetch(url);
        const resdata = await response.json();
        return resdata;
    }

//create post method    
    async post(url, data) {
        const response = await fetch(url, {
            method:'POST',
            headers:{'Content-type':'application/json',  
        },
        body: JSON.stringify(data)
    });
        const resData = await response.json();
        return resData;
    }

//create put method
    async put(url, data) {
        const response = await fetch(url, {
            method:'PUT',
            headers:{'Content-type':'application/json',  
        },
        body: JSON.stringify(data)
    });
        const resData = await response.json();
        return resData;
    }

//create delete method
    async delete(url) {
        const response = await fetch(url, {
            method:'PUT',
            headers:{'Content-type':'application/json',  
        }
    });
        const resData = await 'Post deleted!';
        return resData;
    }

}