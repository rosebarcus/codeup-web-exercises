"use strict";

function githubUserLastCommit (username){
    fetch (${https://api.github.com/users/tater/events}, {
        headers:
            {'Authorization': GITHUB_ACCESS_TOKEN}})

}

console.log(githubUserLastCommit());

