function displayJoke(response) {
    new Typewriter("#joke", {
        strings: response.data.answer,
        autoStart: true,
        delay: 70,
        cursor: " ",
      });
    }


function tellJoke(event) {
    event.preventDefault();
    
    let apiKey = "0741f8adfdcfba62f302f1e8627toa94";
    let context = "you are a hilarious and kid friendly joke generator who can provide 2-4 lines of jomes";
    let prompt = `tell me a funny joke about ${contentInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let contentInput = document.querySelector("#chosen-topic");

    axios.get(apiUrl).then(displayJoke);
}

let generateJokeElement = document.querySelector("#joke-generator");
generateJokeElement = addEventListener("submit", tellJoke);