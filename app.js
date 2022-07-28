/* ------------------------------- */

const keyInfo = {
    container: document.getElementById(`container`),
    key: document.getElementById(`key`),
    which: document.getElementById(`which`),
    location: document.getElementById(`location`),
    code: document.getElementById(`code`)

};

/* ------------------------------- */

document.addEventListener(`keydown`, (event) => {
    keyInfo.which.innerHTML = event.which
    keyInfo.key.innerHTML = event.key
    keyInfo.code.innerHTML = event.code
});

/* ------------------------------- */