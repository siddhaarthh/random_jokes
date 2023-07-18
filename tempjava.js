let joke1 = document.getElementById("joke");
let btn = document.getElementById("btn");

// let quote = [1,2,3,4,5,6,7,8,9];

// btn.addEventListener("click", () => {
//   let random = Math.floor(Math.random()*quote.length);
//   joke.textContent = quote[random];
// })

let aa = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious&type=single')
    .then(data => data.json())
    .then(item => {
      joke1.textContent = item.joke;
    }
    );
}

aa();
btn.addEventListener("click",aa);