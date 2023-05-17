

let admin = new URLSearchParams(window.location.search);

let albumID = admin.get('albumId');
console.log(albumID);


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
    let populate = `
    <div class="card " style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${album.cover_medium}" class="img-fluid" alt="album">
    </div>
    <div class="col-md-8">
      <div class="card-body mt-4">
        <p class="m-0"> Album </p>
        <h1 class="card-title">${album.title}</h1>
        <div class="d-flex justify-content-between align-items-start">
        <img src="${album.artist.picture}" class="img-fluid rounded-circle" width="10%" alt="album">
        <p> ${album.artist.name} </p>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </div>
        <p> ${album.release_date.slice(0, 4)} </p>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        </div>
        <p> ${album.nb_tracks} brani,</p>
        <p class='pincopallino'> ${Math.round(album.duration / 60)}min </p>
        </div>
        </div>
    </div>
  </div>
</div>
    `
    let albumContainer = document.getElementById('albumContainer');
    albumContainer.innerHTML += populate;

    let songs = [];
    songs.push(album.tracks.data)
    console.log(songs);

    const firstSongTitle = songs[0][0].title;
    console.log(firstSongTitle);


    songs.forEach(Element => {
      Element.forEach(song => {
        
        
        
          const titleSong = document.getElementById('titleSong');
          titleSong.innerHTML += `
      <div class="d-flex">
      <p class="greys">${i}</p>
      </div>
      <div> ${song.title} </div>
      
      
      
      
      
      `

        
      })
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

