"use strict";

function getGithubUsernames(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': GITHUB_ACCESS_TOKEN}
    }).then(response => response.json().then(data => {
        /*console.log(data);*/
        let latestPush;
        for(let event of data) {
            if (event.type === "PushEvent"); {
                let latestPush = new Date(event.create_at);
                break;
            }
        }
       /* console.log(getGithubUsernames('rosebarcus'));*/
    }));
}
getGithubUsernames('rosebarcus');

//TODO Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} seconds`)
        }, ms);
    })
}

wait(1000).then((message) => console.log(message));
wait(3000).then((message) => console.log(message));
wait(5000).then((message) => console.log(message));