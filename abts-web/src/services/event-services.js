export function getEvents() {
    return fetch(`http://127.0.0.1:8000/api/events/`)
        .then(resp => resp.json())
        .catch(e => {
            console.log(e);
        })
}

export function getEvent(id) {
    return fetch(`http://127.0.0.1:8000/api/events/${id}/`)
        .then(resp => resp.json())
        .catch(e => {
            console.log(e);
        })
}