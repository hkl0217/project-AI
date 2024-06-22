function tellJoke(event) {
    event.preventDefault();

  new Typewriter("#joke", {
    strings: "Why did the scarecrow win an award?! Well, because he was outstanding in his field!",
    autoStart: true,
    delay: 100,
    cursor: " ",
  });
}

let generateJokeElement = document.querySelector("#joke-generator");
generateJokeElement = addEventListener("submit", tellJoke);