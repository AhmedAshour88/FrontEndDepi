const userId = 1;

async function fetchSequential(){
    let userResponse = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`);
    let userData     = await userResponse.json();
    let postResponse = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    let postData     = await postResponse.json();
}

async function fetchParallel(){
    let userPromise  = fetch (`https://jsonplaceholder.typicode.com/users/${userId}`);
    let postsPromise = fetch (`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    let [userResponse, postResponse] = await Promise.all([userPromise, postsPromise]);
    let userData = await userResponse.json();
    let postData = await postResponse.json();
}

async function compare (){
    let fetchSequentialStart = performance.now();
    await fetchSequential();
    let fetchSequentialEnd = performance.now();
    console.log('fetchSequential Time in ms', (fetchSequentialEnd - fetchSequentialStart).toFixed(2))


    let fetchParallelStart = performance.now();
    await fetchParallel();
    let fetchParallelEnd = performance.now();
    console.log('fetchParallel Time in ms', (fetchParallelEnd - fetchParallelStart).toFixed(2))
}
compare ()

