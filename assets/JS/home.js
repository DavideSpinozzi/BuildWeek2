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
      displayFavouriteSongs1(dati.data)
      displayFavouriteSongs2(dati.data);
    });
};

/**Funzione display main song */
function displaySong(songs) {
  const randomSong = Math.floor(Math.random() * songs.length);
  const song = songs[randomSong];
  indexArray.push(randomSong);

  const songImage = document.createElement("img");
  songImage.src = song.album.cover_medium;
  songImage.alt = song.title_short;

  const songInfoDiv = document.createElement("div");

  const albumAnchor = document.createElement("a");
  const albumName = document.createElement("p");
  albumName.textContent = song.album.title;
  albumAnchor.href = './album.html?albumId='+ song.album.id;

  const songName = document.createElement("h1");
  songName.textContent = song.title;

  const artistAnchor = document.createElement("a");
  const artistName = document.createElement("p");
  artistName.textContent = song.artist.name;
  artistAnchor.href = './artist.html?artistId=' + song.artist.id;

  const spamSong = document.createElement("p");
  spamSong.textContent = "Ascolta il nuovo singolo di " + song.artist.name;

  const songButtonDiv = document.createElement("div");
  songButtonDiv.className = "d-flex";

  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.textContent = "Play";

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Save";

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

  songContainer.appendChild(songImage);
  songContainer.appendChild(songInfoDiv);
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
    playListSongDiv.classList.add("col-6", "col-md-4", "d-flex");
    const songImage = document.createElement("img");
    songImage.src = song.album.cover_small;
    songImage.alt = song.title_short;
    songImage.classList.add("playListSongImage");

    const songInfoDiv = document.createElement("div");

    const albumAnchor = document.createElement("a");
    const albumName = document.createElement("p");
    albumName.textContent = song.album.title;
    albumAnchor.href = './album.html?albumId='+ song.album.id;


    const songName = document.createElement("p");
    songName.textContent = song.title;

    const artistAnchor = document.createElement("a");
    const artistName = document.createElement("p");
    artistName.textContent = song.artist.name;
    artistAnchor.href = './artist.html?artistId=' + song.artist.id;

    playListSongDiv.appendChild(songImage);
    playListSongDiv.appendChild(songInfoDiv);
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
    while (currentIndex.length < 5) {
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
      playListSongDiv.classList.add("col-12", "col-md", "d-flex", 'd-md-block');
      const songImage = document.createElement("img");
      songImage.src = song.album.cover_medium;
      songImage.alt = song.title_short;
      songImage.classList.add("favouriteSongImage");
  
      const songInfoDiv = document.createElement("div");
  
      const albumAnchor = document.createElement("a");
      const albumName = document.createElement("p");
      albumName.textContent = song.album.title;
      albumAnchor.href = './album.html?albumId='+ song.album.id;
  
      const songName = document.createElement("p");
      songName.textContent = song.title;
  
      const artistAnchor = document.createElement("a");
      const artistName = document.createElement("p");
      artistName.textContent = song.artist.name;
      artistAnchor.href = './artist.html?artistId=' + song.artist.id;
  
      playListSongDiv.appendChild(songImage);
      playListSongDiv.appendChild(songInfoDiv);
      songInfoDiv.appendChild(albumAnchor);
      albumAnchor.appendChild(albumName);
      songInfoDiv.appendChild(songName);
      songInfoDiv.appendChild(artistAnchor);
      artistAnchor.appendChild(artistName);
  
      favouriteContainer.appendChild(playListSongDiv);
    });
  }
  function displayFavouriteSongs2(songs) {
    const currentIndex = [];
    while (currentIndex.length < 5) {
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
      playListSongDiv.classList.add("col-12", "col-md", "d-flex", 'd-md-block');
      const songImage = document.createElement("img");
      songImage.src = song.album.cover_medium;
      songImage.alt = song.title_short;
      songImage.classList.add("favouriteSongImage");
  
      const songInfoDiv = document.createElement("div");
  
      const albumAnchor = document.createElement("a");
      const albumName = document.createElement("p");
      albumName.textContent = song.album.title;
      albumAnchor.href = './album.html?albumId='+ song.album.id;
  
      const songName = document.createElement("p");
      songName.textContent = song.title;
  
      const artistAnchor = document.createElement("a");
      const artistName = document.createElement("p");
      artistName.textContent = song.artist.name;
      artistAnchor.href = './artist.html?artistId=' + song.artist.id;
  
      playListSongDiv.appendChild(songImage);
      playListSongDiv.appendChild(songInfoDiv);
      songInfoDiv.appendChild(albumAnchor);
      albumAnchor.appendChild(albumName);
      songInfoDiv.appendChild(songName);
      songInfoDiv.appendChild(artistAnchor);
      artistAnchor.appendChild(artistName);
  
      favouriteContainer2.appendChild(playListSongDiv);
    });
  }