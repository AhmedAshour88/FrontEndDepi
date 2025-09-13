let container = document.querySelector(".div-class");
let innerHtml = ''

async function myDataFetcher(){
    try {
        let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await postsResponse.json();
        
        let commentsPromises = [];
        for(i=0; i< posts.length; i++){
            let commentsPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${posts[i].id}/comments`);
            commentsPromises.push(commentsPromise); 
        }
        let commentsRespones = await Promise.all(commentsPromises);  

        let ParsedPromises = []; 
        for(j=0; j< commentsRespones.length; j++){
            let ParsedPromise = commentsRespones[j].json(); 
            ParsedPromises.push(ParsedPromise); 
        }
        let ParsedData = await Promise.all(ParsedPromises);

        let postHtml = "";
        for(k=0; k< posts.length; k++){
            posts[k].comments = ParsedData[k];
            console.log(posts[k]);
            
            postHtml += 
               `<h2>Post Id: ${posts[k].id}</h2>
                <h2>User Id: ${posts[k].userId}</h2>
                <h2>Title: ${posts[k].title}</h2>
                <p>${posts[k].body}</p>
                <h3>Comments:</h3>
                <ul>
                `
                let commentHtml = "";
                for(c=0; c < posts[k].comments.length; c++){
                    commentHtml+=  `<li>${posts[k].comments[c].body}</li>`;      
                }
            postHtml += commentHtml + `</ul>`;    
        }

        container.innerHTML = postHtml;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

myDataFetcher()
//! ✅ Promise.all() preserves order: returns results in the same order as the promises were passed in.
