const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("btn");

btn.addEventListener("click", async ()=> {
  try {
    const inpword = document.getElementById("inputWord").value;
    const res = await fetch(`${url}${inpword}`);
    const data = await res.json();
    result.innerHTML = ` <div class="word">
    <h3>${inpword}</h3>
    <button onclick="playSound()">
    <i class="fas fa-volume-up"></i>
    </button>
    </div>
    <div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
    </div>
    <p class="wordMeaning">
    ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="wordExample">
    ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;

    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)

  }catch (e) {
    result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
  }

});

function playSound() {
  sound.play()
}