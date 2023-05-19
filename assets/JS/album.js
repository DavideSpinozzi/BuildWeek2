let admin = new URLSearchParams(window.location.search);

let albumID = admin.get('albumId');
console.log(albumID);
const audioPlayer = document.getElementById('audioPlayer');
let globalData;

fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('ERRORE NEL RECUPERO');
    }
  })
  .then((data) => {
    console.log(data);
    const album = data;

    const minutes = Math.floor(album.duration / 60);
    const seconds = album.duration % 60;
    const ciao = album.artist.id;
    console.log(ciao);
    const forse = document.getElementById('id');
    const vediamo = document.createElement('a');
    vediamo.href = "./artist.html?artistId=" + ciao;
    const page = `./artist.html?artistId=${album.artist.id}`
    console.log(vediamo);
    forse.appendChild(vediamo);



    vediamo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width='30' height="30" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-40 326.63L193.37 352l96-96-96-96L216 137.37 334.63 256z"/></svg>`
    let populate = `
    <div class="cardinia " style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-3">
      <img id="image" src="${album.cover_medium}" class="img-fluid text-sm-center mb-5 "  alt="album">
    </div>
    <div class="col-md-9 album">
      <div class="card-body pincopallo mt-4">
        <p class="m-0 pincopallino"> Album </p>
        <h1 class="card-title">${album.title}</h1>
        <div class="d-flex justify-content-between align-items-start iter" style="max-width:80%">
        <img src="${album.artist.picture}" class=" rounded-circle" width="10% me-5" id="profile" alt="album">
       <a href= "${page}" <p class="giovane"> ${album.artist.name} </p> </a>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="pincopallino bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </div>
        <p class="pincopallino"> ${album.release_date.slice(0, 4)} </p>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="pincopallino bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </div>
        <p class='pincopallino'> ${album.nb_tracks} brani,</p>
        <p class='pincopallino'> ${minutes}min &nbsp ${seconds}sec. </p>
        </div> 
        <div class="d-flex align-items-baseline">
        <p class="compars me-2"> Album </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="compars bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <p class="compars ms-2"> ${album.release_date.slice(0, 4)} </p>
        </div>
    </div>
  </div>
</div>
    `
    const image = new Image();
    image.src = `'${album.artist.picture}'`;

    image.onload = function() {
      const vibrant = new Vibrant(image);
      const swatches = vibrant.swatches();
    
      // Ottieni il colore principale
      const color = swatches["Vibrant"].getHex();
    
      // Utilizza il colore per impostare lo sfondo come gradiente
      setGradientBackground(color);
    };

    
    function setGradientBackground(color) {
      const gradient = `linear-gradient(to bottom right, ${color}, rgba(0, 0, 0, 0.5))`;
      const mainContent = document.getElementById('backGround')
      mainContent.style.background = gradient;
    }
    





    let albumContainer = document.getElementById('albumContainer');
    albumContainer.innerHTML += populate;

    let songs = album.tracks.data;
    console.log(songs);

    const firstSongTitle = songs[0].title;
    console.log(firstSongTitle);


    songs.forEach((element, i) => {


      globalData = element;
      console.log(globalData);

      const bello = `./artist.html?artistId=${element.artist.id}`
      console.log(bello);


      const titleSong = document.getElementById('titleSong');
      titleSong.innerHTML += `
      <div class="d-flex align-items-center">
      <div>
      <p class="pincopallino greys me-3">${i + 1}</p>
      </div>
      <div class = " d-flex flex-column">
      <div onclick = 'playerPut(globalData)'>
       ${element.title} 
      </div>
      <div class= 'greys'>
      <a href = "${bello}"> ${element.artist.name} </a>
      </div>
      </div>
      `
      const duration = document.getElementById('duration');
      duration.innerHTML += `<div class="linear ms-4">${element.rank}</div>`
      const time = document.getElementById('time');
      const minutes2 = Math.floor(element.duration / 60);
      const seconds2 = element.duration % 60;
      time.innerHTML += `<div class = 'linear ms-4'>${minutes2}: ${seconds2} </div>`

      console.log(element);





    })










  })
  .catch((err) => {
    console.log(err);
  })

const playlistNames = [
  "Be The Young Seasons 1-5",
  "Be The Young Seasons 6-8",
  "persona di m*rda (gen-feb 2023)",
  "Musical 2022",
  "pippo, pluto e paperino (nov-dec 2022)",
  "early stage emily syndrome (sett-ott 2022)",
  "Be the young",
  "'...' cit. Kimiko (lug-ago 2022)",
  "saggio vibes 💃🩰",
  "main character energy (mag-giu 2022)",
  "that fucking mood 🔪☠️",
  "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
  "An Emily Winchester kind of mood 🔪🖕",
  "landing page (mar-apr 2022)",
  "2021 lol",
  "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
  "honey and glass (nov-dic 2021)",
  "(Revenge) Training Arc 🦍",
  "Lidia 🤝 Emily",
  "minecraft e nintendo switch (sep-oct 2021)",
  "silvano d'orba? I hardly know her (lug - ago 2021)",
  "Culo 2021",
  "Frah Quintale Mix",
  "Francesco Guccini Mix",
  "Lo Stato Sociale Mix",
  "chapter 4/? (mag-giu 2021)",
  "Strive School <> The Hunt Motivation",
  "mi stavo dimenticando (mar-apr 2021)",
  "high school musical 1,2,3",
  "quanto trash cazzo",
  "The 2020 Playlist",
  "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
];

function displayPlayList(items) {
  items.forEach((item) => {
    const itemText = document.createElement("p");
    itemText.textContent = item;
    playListDiv.appendChild(itemText);
  });
}


window.onload = function () {
  displayPlayList(playlistNames);
};

/**Funzione display Audioplayer */
function displayAudioPlayer(data) {
  clearInterval(timerInterval);
  const playerDiv1 = document.createElement('div');
  playerDiv1.classList.add('col-12', 'col-md-2', 'd-flex', 'playerDiv1', 'align-items-center')

  const playerImage = document.createElement('img');
  playerImage.src = data.album.cover_xl;
  playerImage.alt = data.title_short;
  playerImage.classList.add('playerImage', 'me-2', 'd-none', 'd-md-block');

  const div1Div = document.createElement('div');
  div1Div.classList.add('div1Div', 'me-4', 'me-md-2');

  const playerSongTitle = document.createElement('h5');
  playerSongTitle.textContent = data.title;

  const playerArtist = document.createElement('p');
  playerArtist.textContent = data.artist.name;
  playerArtist.classList.add('d-none', 'd-md-block')

  const div1Buttons = document.createElement('div');
  div1Buttons.classList.add('d-flex', 'align-items-center')

  const likeDiv = document.createElement('div');
  likeDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;
  likeDiv.classList.add('me-4')

  const hiddenPlayerPlay = document.createElement('img');
  hiddenPlayerPlay.src = "./assets/imgs/play-circle-fill.svg";
  hiddenPlayerPlay.classList.add('d-md-none', 'playerPlay', 'me-3');

  const hiddenPlayerClose = document.createElement('div');
  hiddenPlayerClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
  class="bi bi-x-lg ms-2" viewBox="0 0 16 16">
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
</svg>`;
  hiddenPlayerClose.classList.add('d-md-none', 'me-3');

  const playerDiv2 = document.createElement('div');
  playerDiv2.classList.add('col-0', 'col-md-8', 'd-flex', 'flex-column', 'd-none', 'd-md-block');
  const playerButtonDiv = document.createElement('div');
  playerButtonDiv.classList.add('text-center', 'm-1')
  const playerPlay = document.createElement('img');
  playerPlay.src = "./assets/imgs/play-circle-fill.svg"
  playerPlay.classList.add('playerPlay')

  const staticBar = document.createElement('div');
  staticBar.classList.add('staticBar');
  const playerBar = document.createElement('div');
  playerBar.classList.add('playerBar');
  playerBar.id = 'playerBar';

  const audioTrack = document.createElement('audio');
  audioTrack.src = data.preview;

  const playerDiv3 = document.createElement('div');
  playerDiv3.classList.add('col-0', 'col-md-2', 'd-flex', 'p-3', 'align-items-center', 'justify-content-center', 'd-none', 'd-md-block');

  const playerClose = document.createElement('div');
  playerClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
  class="bi bi-x-lg ms-2" viewBox="0 0 16 16">
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
</svg>`


  playerDiv1.appendChild(playerImage);
  playerDiv1.appendChild(div1Div);
  div1Div.appendChild(playerSongTitle);
  div1Div.appendChild(playerArtist);
  playerDiv1.appendChild(div1Buttons);
  div1Buttons.appendChild(likeDiv);
  div1Buttons.appendChild(hiddenPlayerPlay);
  div1Buttons.appendChild(hiddenPlayerClose);
  playerDiv2.appendChild(playerButtonDiv);
  playerButtonDiv.appendChild(playerPlay);
  playerDiv2.appendChild(staticBar);
  staticBar.appendChild(playerBar);
  playerBar.appendChild(audioTrack);
  playerDiv3.appendChild(playerClose);
  audioPlayer.appendChild(playerDiv1);
  audioPlayer.appendChild(playerDiv2);
  audioPlayer.appendChild(playerDiv3);
  timerInterval = setInterval(timer, 1000);

  audioTrack.play();

  /**Funzione toggle play */
  playerPlay.onclick = function () {

    if (audioTrack.paused) {
      audioTrack.play()
      timerInterval = setInterval(timer, 1000);
    }
    else {
      audioTrack.pause()
      clearInterval(timerInterval)
    }

  }

  hiddenPlayerPlay.onclick = function () {

    if (audioTrack.paused) {
      audioTrack.play()
      timerInterval = setInterval(timer, 1000);
    }
    else {
      audioTrack.pause()
      clearInterval(timerInterval)
    }

  }

  /**Funzione close playbar */
  playerClose.onclick = function () {
    audioPlayer.innerHTML = '';
  }
  hiddenPlayerClose.onclick = function () {
    audioPlayer.innerHTML = '';
  }
}

/**Funzione Timer */
let i = -1;
let timerInterval;
function timer() {
  i++;
  const total = 29;
  const percent = (i / total) * 100;
  playerBar.style.display = 'block';
  playerBar.style.width = `${percent}%`;

  if (i >= total) {
    clearInterval(timerInterval);
  }
}

function playerPut(data) {
  audioPlayer.innerHTML = '';
  i = -1;
  displayAudioPlayer(data);
  console.log(data);
}

