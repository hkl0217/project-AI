function displayJoke(response) {
    new Typewriter("#joke", {
        strings: "Why did the scarecrow win an award?! Well, because he was outstanding in his field!",
        autoStart: true,
        delay: 70,
        cursor: " ",
      });
    }


function tellJoke(event) {
    event.preventDefault();
    
    let apiKey = "0741f8adfdcfba62f302f1e8627toa94";
    let context = "the answer must be hilarious, kid friendly and short";
    let prompt = "tell me a funny joke";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayJoke);
}

let generateJokeElement = document.querySelector("#joke-generator");
generateJokeElement = addEventListener("submit", tellJoke);