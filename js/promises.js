const GHToken = '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';

function getLastCommit(githubUsername) {
    let url = `https://api.github.com/users/${githubUsername}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${GHToken}`}});
    return githubResponse
        .then((response)=>{
            return response.json();
            console.log(response.json())
        })
        .then((githubEventData)=>{
            for (let githubEvent of githubEventData) {
                if(githubEvent.type === "PushEvent") {
                    console.log(githubEvent.created_at);
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

getLastCommit('CharlesWillcockson')
    .then((date)=>console.log(date));

function wait(num){
    return new Promise((resolve, reject) => {
        let secs = num / 1000
        setTimeout(() => {
            if (num > 0){
                resolve('Successful!')
                console.log(`That was a ${secs} second(s) delay...` )
            }else {
                reject(`Rejection hurts, doesn't it?`)
                console.log(`Rejection hurts, doesn't it?`)
            }
        }, num);
        });
}

console.log(wait(3000));