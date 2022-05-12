
function get(url) {
    return fetch(url)
        .then((result) => result.json())
}

export default get