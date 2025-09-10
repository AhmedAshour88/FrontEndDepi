const userName = "AhmedAshour88";

async function fetchGitHubUser(userName){
    let userResponse = await fetch(`https://api.github.com/users/${userName}`);
    let userData = await userResponse.json();
    console.log(userData);
    return userData;
}

async function domBuilder(){
    let userData = await fetchGitHubUser(userName);
    let userDiv = document.querySelector(".user-div");
    let userDivInnertHtml = 
    `
    <h1> User Data </h1>
    <h3> login: ${userData.login} </h3>
    <h3> id: ${userData.id} </h3>
    <h3> url: ${userData.url} </h3>
    `
    userDiv.innerHTML = userDivInnertHtml;
}

domBuilder();