"use strict";

const gitIt = fetch (`https://api.github.com/users/rosebarcus/events`, {
        headers:
            {'Authorization': GITHUB_ACCESS_TOKEN}

    }).then(function (data){
    console.log(data)
    return data.json()
}).then(function (data){
    console.log(data);
})

console.log(getGithubUsernames(gitIt));

function getGithubUsernames(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': GITHUB_ACCESS_TOKEN}
    }).then(response => response.json().then(data => {
        console.log(data);
        var latestPush = data[0].created_at
        let date = new Date(latestPush);

        console.log(date.toString());
    }))
}
getGithubUsernames('rosebarcus');



//TODO finish creating your own promise:
/*
const myPromise = new Promise ((happy, sad) => {
    function wait (ms) {

    }

})*/
