"use strict";

const gitIt = fetch ('https://api.github.com/users/rosebarcus/events', {
        headers:
            {'Authorization': GITHUB_ACCESS_TOKEN}

    }).then(function (data){
    console.log(data)
    return data.json()
}).then(function (data){
    console.log(data)
})



console.log(githubUserLastCommit());

