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
/**Costanti */
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=pop";
const playListDiv = document.getElementById("playListDiv");
const songContainer = document.getElementById("songContainer");
const favouriteContainer = document.getElementById("favouriteContainer");
const favouriteContainer2 = document.getElementById("favouriteContainer2");

const indexArray = [];
console.log(indexArray);

/**Funzione onload */
window.onload = function () {
  displayPlayList(playlistNames);
  fetchAndDisplay();
};

/**Funzione display playlist */
function displayPlayList(items) {
  items.forEach((item) => {
    const itemText = document.createElement("p");
    itemText.textContent = item;
    playListDiv.appendChild(itemText);
  });
}
/**Fetch */
const fetchAndDisplay = function () {
  fetch(url, {
    method: "GET",
  })
    .then((raw) => {
      return raw.json();
    })
    .then((dati) => {
      console.log(dati.data);
      displaySong(dati.data);
      displayPlayListSongs(dati.data);
      displayFavouriteSongs1(dati.data);
      displayFavouriteSongs2(dati.data);
    });
};

/**Funzione display main song */
function displaySong(songs) {
  const randomSong = Math.floor(Math.random() * songs.length);
  const song = songs[randomSong];
  indexArray.push(randomSong);

  const playListSongCard = document.createElement("div");
  playListSongCard.classList.add("card", "mainSongCard", "mb-1");

  const playListRow = document.createElement("div");
  playListRow.classList.add("row");

  const playListImageCol = document.createElement("div");
  playListImageCol.classList.add("col-4", 'd-flex', 'align-items-center');

  const songImage = document.createElement("img");
  songImage.src = song.album.cover_medium;
  songImage.alt = song.title_short;
  songImage.classList.add("mainSongImage", "card-image-left");

  const playListInfoCol = document.createElement("div");
  playListInfoCol.classList.add("col-8");

  const songInfoDiv = document.createElement("div");
  songInfoDiv.classList.add("mainSongInfoDiv", "card-body");

  const albumAnchor = document.createElement("a");
  const albumName = document.createElement("p");
  albumName.textContent = song.album.title;
  albumAnchor.href = "./album.html?albumId=" + song.album.id;

  const songName = document.createElement("h1");
  songName.textContent = song.title;
  songName.className = "homeTitle";

  const artistAnchor = document.createElement("a");
  const artistName = document.createElement("p");
  artistName.textContent = song.artist.name;
  artistAnchor.href = "./artist.html?artistId=" + song.artist.id;

  const spamSong = document.createElement("p");
  spamSong.textContent = "Ascolta il nuovo singolo di " + song.artist.name;

  const songButtonDiv = document.createElement("div");
  songButtonDiv.classList.add("d-flex", "align-items-center");

  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.textContent = "Play";
  playButton.className = "playButton";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Save";
  saveButton.className = "saveButton";

  const options = document.createElement("div");
  options.innerHTML = `<svg
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-three-dots text-white"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      </svg>`;

  playListSongCard.appendChild(playListRow);
  playListRow.appendChild(playListImageCol);
  playListImageCol.appendChild(songImage);
  playListRow.appendChild(playListInfoCol);
  playListInfoCol.appendChild(songInfoDiv);
  songInfoDiv.appendChild(albumAnchor);
  albumAnchor.appendChild(albumName);
  songInfoDiv.appendChild(songName);
  songInfoDiv.appendChild(artistAnchor);
  artistAnchor.appendChild(artistName);
  songInfoDiv.appendChild(spamSong);
  songInfoDiv.appendChild(songButtonDiv);
  songButtonDiv.appendChild(playButton);
  songButtonDiv.appendChild(saveButton);
  songButtonDiv.appendChild(options);

  songContainer.appendChild(playListSongCard);
}

/**Funzione display playlist song */

function displayPlayListSongs(songs) {
  const currentIndex = [];
  while (currentIndex.length < 6) {
    const randomIndex = Math.floor(Math.random() * songs.length);
    let isIndexUnique = true;
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randomIndex) {
        isIndexUnique = false;
        break;
      }
    }
    if (isIndexUnique) {
      indexArray.push(randomIndex);
      currentIndex.push(randomIndex);
    }
  }
  currentIndex.forEach((index) => {
    const song = songs[index];
    const playListSongDiv = document.createElement("div");
    playListSongDiv.classList.add("playListSongDiv", "col-6", "col-md-4");

    const playListSongCard = document.createElement("div");
    playListSongCard.classList.add("card", "playListCard", "mb-1");

    const playListRow = document.createElement("div");
    playListRow.classList.add("row", "playListRow");

    const playListImageCol = document.createElement("div");
    playListImageCol.classList.add("col-5");

    const songImage = document.createElement("img");
    songImage.src = song.album.cover;
    songImage.alt = song.title_short;
    songImage.classList.add("playListSongImage", "card-image-left");

    const playListInfoCol = document.createElement("div");
    playListInfoCol.classList.add("col-7");

    const songInfoDiv = document.createElement("div");
    songInfoDiv.classList.add("songInfoDiv", "card-body");

    const albumAnchor = document.createElement("a");
    const albumName = document.createElement("p");
    albumName.textContent = song.album.title;
    albumAnchor.href = "./album.html?albumId=" + song.album.id;

    const songName = document.createElement("p");
    songName.textContent = song.title;
    songName.classList.add('d-md-none');

    const artistAnchor = document.createElement("a");
    const artistName = document.createElement("p");
    artistName.textContent = song.artist.name;
    artistAnchor.href = "./artist.html?artistId=" + song.artist.id;

    playListSongDiv.appendChild(playListSongCard);
    playListSongCard.appendChild(playListRow);
    playListRow.appendChild(playListImageCol);
    playListImageCol.appendChild(songImage);
    playListRow.appendChild(playListInfoCol);
    playListInfoCol.appendChild(songInfoDiv);
    songInfoDiv.appendChild(albumAnchor);
    albumAnchor.appendChild(albumName);
    songInfoDiv.appendChild(songName);
    songInfoDiv.appendChild(artistAnchor);
    artistAnchor.appendChild(artistName);

    playListContainer.appendChild(playListSongDiv);
  });
}

/**Funzione display favourite songs */
function displayFavouriteSongs1(songs) {
  const currentIndex = [];
  while (currentIndex.length < 4) {
    const randomIndex = Math.floor(Math.random() * songs.length);
    let isIndexUnique = true;
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randomIndex) {
        isIndexUnique = false;
        break;
      }
    }
    if (isIndexUnique) {
      indexArray.push(randomIndex);
      currentIndex.push(randomIndex);
    }
  }
  currentIndex.forEach((index) => {
    const song = songs[index];
    const playListSongDiv = document.createElement("div");
    playListSongDiv.classList.add("playListSongDiv", "col-12", "col-md-3", 'mb-2');

    const playListSongCard = document.createElement("div");
    playListSongCard.classList.add("card", "favListCard", "mb-1");

    const playListRow = document.createElement("div");
    playListRow.classList.add("row", "playListRow");

    const playListImageCol = document.createElement("div");
    playListImageCol.classList.add("col-6", 'col-md-12');

    const songImage = document.createElement("img");
    songImage.src = song.album.cover_medium;
    songImage.alt = song.title_short;
    songImage.classList.add("favListSongImage", "card-image-left");

    const playListInfoCol = document.createElement("div");
    playListInfoCol.classList.add("col-6", 'col-md-12');

    const songInfoDiv = document.createElement("div");
    songInfoDiv.classList.add("favSongInfoDiv", "card-body");

    const albumAnchor = document.createElement("a");
    const albumName = document.createElement("p");
    albumName.textContent = song.album.title;
    albumAnchor.href = "./album.html?albumId=" + song.album.id;

    const songName = document.createElement("p");
    songName.textContent = song.title;
    songName.classList.add('favSongName', 'd-md-none');

    const artistAnchor = document.createElement("a");
    const artistName = document.createElement("p");
    artistName.textContent = song.artist.name;
    artistAnchor.href = "./artist.html?artistId=" + song.artist.id;
    

    const favListRow = document.createElement("div");
    favListRow.classList.add("row", "favListRow", 'd-md-none');

    const favListImageCol = document.createElement("div");
    favListImageCol.classList.add("col-6", 'd-flex',);

    const like = document.createElement("div");
    like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;
    const options = document.createElement("div");
    options.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;

    const favListInfoCol = document.createElement("div");
    favListInfoCol.classList.add("col-6", 'text-end');
    const play = document.createElement("div");
    play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;

    playListSongDiv.appendChild(playListSongCard);
    playListSongCard.appendChild(playListRow);
    playListRow.appendChild(playListImageCol);
    playListImageCol.appendChild(songImage);
    playListRow.appendChild(playListInfoCol);
    playListInfoCol.appendChild(songInfoDiv);
    songInfoDiv.appendChild(albumAnchor);
    albumAnchor.appendChild(albumName);
    songInfoDiv.appendChild(songName);
    songInfoDiv.appendChild(artistAnchor);
    artistAnchor.appendChild(artistName);
    playListSongCard.appendChild(favListRow);
    favListRow.appendChild(favListImageCol);
    favListImageCol.appendChild(like);
    favListImageCol.appendChild(options);
    favListRow.appendChild(favListInfoCol);
    favListInfoCol.appendChild(play)

    favouriteContainer.appendChild(playListSongDiv);
  });
}
function displayFavouriteSongs2(songs) {
  const currentIndex = [];
  while (currentIndex.length < 4) {
    const randomIndex = Math.floor(Math.random() * songs.length);
    let isIndexUnique = true;
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i] === randomIndex) {
        isIndexUnique = false;
        break;
      }
    }
    if (isIndexUnique) {
      indexArray.push(randomIndex);
      currentIndex.push(randomIndex);
    }
  }
  currentIndex.forEach((index) => {
    const song = songs[index];
    const playListSongDiv = document.createElement("div");
    playListSongDiv.classList.add("playListSongDiv", "col-12", "col-md-3", 'mb-2');

    const playListSongCard = document.createElement("div");
    playListSongCard.classList.add("card", "favListCard", "mb-1");

    const playListRow = document.createElement("div");
    playListRow.classList.add("row", "playListRow");

    const playListImageCol = document.createElement("div");
    playListImageCol.classList.add("col-6", 'col-md-12');

    const songImage = document.createElement("img");
    songImage.src = song.album.cover_medium;
    songImage.alt = song.title_short;
    songImage.classList.add("favListSongImage", "card-image-left");

    const playListInfoCol = document.createElement("div");
    playListInfoCol.classList.add("col-6", 'col-md-12');

    const songInfoDiv = document.createElement("div");
    songInfoDiv.classList.add("favSongInfoDiv", "card-body");

    const albumAnchor = document.createElement("a");
    const albumName = document.createElement("p");
    albumName.textContent = song.album.title;
    albumAnchor.href = "./album.html?albumId=" + song.album.id;

    const songName = document.createElement("p");
    songName.textContent = song.title;
    songName.className = 'favSongName';
    songName.classList.add('favSongName', 'd-md-none');

    const artistAnchor = document.createElement("a");
    const artistName = document.createElement("p");
    artistName.textContent = song.artist.name;
    artistAnchor.href = "./artist.html?artistId=" + song.artist.id;

    const favListRow = document.createElement("div");
    favListRow.classList.add("row", "favListRow", 'd-md-none');

    const favListImageCol = document.createElement("div");
    favListImageCol.classList.add("col-6", 'd-flex',);

    const like = document.createElement("div");
    like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;
    const options = document.createElement("div");
    options.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>`;

    const favListInfoCol = document.createElement("div");
    favListInfoCol.classList.add("col-6", 'text-end');
    const play = document.createElement("div");
    play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`;

    playListSongDiv.appendChild(playListSongCard);
    playListSongCard.appendChild(playListRow);
    playListRow.appendChild(playListImageCol);
    playListImageCol.appendChild(songImage);
    playListRow.appendChild(playListInfoCol);
    playListInfoCol.appendChild(songInfoDiv);
    songInfoDiv.appendChild(albumAnchor);
    albumAnchor.appendChild(albumName);
    songInfoDiv.appendChild(songName);
    songInfoDiv.appendChild(artistAnchor);
    artistAnchor.appendChild(artistName);
    playListSongCard.appendChild(favListRow);
    favListRow.appendChild(favListImageCol);
    favListImageCol.appendChild(like);
    favListImageCol.appendChild(options);
    favListRow.appendChild(favListInfoCol);
    favListInfoCol.appendChild(play)

    favouriteContainer2.appendChild(playListSongDiv);
  });
}

var myAudio = document.getElementById("myAudio");

function playAudio() { 
  myAudio.play(); 
} 

function pauseAudio() { 
  myAudio.pause(); 
} 