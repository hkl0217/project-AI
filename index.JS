function tellJoke(event) {
    event.preventDefault()

    alert("knock knock")
}

let generateJokeElement = document.querySelector("#joke-generator");
generateJokeElement = addEventListener("submit", tellJoke);