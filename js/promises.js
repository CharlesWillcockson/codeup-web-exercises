const lastCommit = username => {
    fetch('https://api.github.com/users', {headers: {'Authorization': GHToken})
        .then(response => response.json())
        .then()
}