const artist = new URLSearchParams(window.location.search);
const artistId = artist.get("artistId");
const mainContent = document.querySelector(".MainContent");
const trackDiv = document.getElementById('tracksX5')

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
function goHome(){
  window.location ='home.html'
}
function goBack(){
  window.history.back();
}
window.onload = () => {
  displayPlayList(playlistNames)
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
      const contenuti = `
      <div id='backgroundRelative'>
  <div id='backgroundImage'>
  </div>
  <div id='backgroundImage2'>
    <p class='artistaVerificato'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>&nbsp;Artista verificato</p>
  <h1>${data.name}</h1>
  <p class='ascoltiMensili'>${data.nb_fan} ascoltatori mensili</p>
  </div>
  </div>
  <!---->
  <div class='vedoNonVedo text-secondary p-3'>${data.nb_fan} ascoltatori mensili</div>
  <div class='vedoNonVedo'>
  <div class='d-flex justify-content-between align-items-center p-3 pb-0'><div class='d-flex align-items-center'><p class='m-0 px-3 py-1 border rounded-1 me-4'>FOLLOW</p>
  <div class="dropdown"><svg xmlns="http://www.w3.org/2000/svg" role="button" data-bs-toggle="dropdown" aria-expanded="false" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg><ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div></div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shuffle me-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-circle-fill me-4 text-success" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
</div>
</div>
  </div>
  <div class='playFollow d-flex align-items-center p-5 pb-0'><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-play-circle-fill me-4 text-success" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
<p class='m-0 px-3 py-1 border rounded-1 me-4'>FOLLOW</p>
<div class="dropdown">
          <svg href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg"
            width="30" height="30" fill="currentColor" class="bi bi-three-dots text-white" viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        </div>
        <!---->
        <div class='row p-5'>
        <div class='popolari col-12 col-md-8'>
        <h3 class= 'mb-4'>Popolari</h3>
        <div id='tracksX5'></div>
        <p class='text-secondary'>VISUALIZZA ALTRO</p>
        </div>
        <div class='col-12 col-md-4 pb-3'>
        <h3 class= 'mb-4' >Brani che ti piacciono</h3>
        <div class='row'>
        <div class='col-3 p-0 d-flex justify-content-center'><img src='${
          data.picture
        }' width='70' height='70' class='rounded-circle'></div><div class='col-9 d-flex flex-column justify-content-center p-0'><p class='mb-1'>Hai messo Mi piace a 11 brani</p><p class='m-0 text-secondary'>Di ${
        data.name
      }</p></div></div>
        </div>
        </div>`;
      mainContent.innerHTML += contenuti;
      const trackDiv = document.getElementById('tracksX5')
      const artistDiv = document.getElementById('backgroundImage')
      artistDiv.style.backgroundImage = `url(${data.picture_xl})`;
      tracks()
      async function tracks(){
  fetch(data.tracklist)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("errore");
    }
  })
  .then((data) => {
    console.log(data.data);
    for(i=0; i<data.data.length; i++){
      const p= `<div class='row'><p class='col-9 col-md-7'>${i+1} <img src='${data.data[i].album.cover}' class='mx-2' width='40' heigth='40'> ${data.data[i].title}</p><p class=' col-2 col-md-3 d-flex justify-content-center align-items-center'>${data.data[i].rank}</p><p class='col-2 d-none d-md-flex justify-content-center align-items-center'>${convertiDurata(data.data[i].duration)}</p><div class="dropdown col-1 vedoNonVedo mt-1"><svg xmlns="http://www.w3.org/2000/svg" role="button" data-bs-toggle="dropdown" aria-expanded="false" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg><ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
    </div></div>`
      trackDiv.innerHTML+= p
    }
    })
    .catch((err) => {
      console.log(err);
    });
    function convertiDurata(secondi) {
      const minuti = Math.floor(secondi / 60);
      const restantiSecondi = secondi % 60;
    
      const durataFormattata = `${minuti}:${restantiSecondi < 10 ? '0' : ''}${restantiSecondi}`;
      return durataFormattata;
    }
      }
    })
    .catch((err) => {
      console.log(err);
    });


};
