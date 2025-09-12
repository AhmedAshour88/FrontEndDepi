let container = document.querySelector(".div-class");
let innerHtml = ''
function myDataFetcher (){
     fetch('https://jsonplaceholder.typicode.com/posts')
         .then(PostsResponse => {
            return PostsResponse.json()
            })
            .then(postsdata => {
                let fetchPromises = [];
                for (i=0; i < postsdata.length; i++) {    
                     const post = postsdata[i];         
                        
                     let fetchPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${postsdata[i].id}/comments`)
                    .then(commentsResponse =>{
                         return commentsResponse.json()
                        .then(commentsData => {
                            let commentsHtml = ''; 
                            let postHtml = '';
                            for(j = 0; j < commentsData.length; j++) {                                                       
                            commentsHtml += 
                            `<li>${commentsData[j].body}</li>`                         
                             }
                             postHtml += 
                                `<h2>Post Id: ${post.id}</h2>
                                <h2>User Id: ${post.userId}</h2>
                                <h2>Title: ${post.title}</h2>
                                <p>${post.body}</p>
                                <h3>Comments:</h3>
                                <ul>${commentsHtml}</ul>
                                `
                            return postHtml;                                    
                        })                                               
                    })
                fetchPromises.push(fetchPromise);    
                }
                // Once all comment-fetching promises are done
                Promise.all(fetchPromises)
                .then(allPostsHtmlArray => {
                    let finalHtml = '';
                    for (let i = 0; i < allPostsHtmlArray.length; i++) {
                        finalHtml += allPostsHtmlArray[i];
                    }
                    container.innerHTML = finalHtml;
                })
             })
    .catch(err =>{
        console.log(err);
    })
}

myDataFetcher ()





