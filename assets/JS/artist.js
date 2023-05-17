const artist = new URLSearchParams(window.location.search);
const artistId = artist.get("artistId");
const mainContent = document.querySelector(".MainContent");
const aggiungiTracks = document.getElementById("aggiungiTracks");
var apiUrl = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`;

//const tracks= []

window.onload = () => {
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
    <div>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>&nbsp;Artista verificato</p>
  <h1>${data.name}</h1>
  <p>${data.nb_fan} ascoltatori mensili</p>
  </div>
  <!---->
  <div class='d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill me-4" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
<p class='m-0 px-3 py-1 border rounded-1 me-4'>FOLLOW</p>
<div class="dropdown d-none d-md-block">
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
        <div class='row'>
        <div class='col-8'>
        <h3>Popolari</h3>
        <div id='tracksX5'></div>
        <a href='' id='aggiungiTracks'>VISUALIZZA ALTRO</a>
        </div>
        <div class='col-4'>
        <h3>Brani che ti piacciono</h3>
        <div class='row'>
        <div class='col-2'><img src='${
          data.picture
        }' width='70' height='70' class='rounded-circle'></div><div class='col-10 d-flex flex-column justify-content-center'><p class='mb-1'>Hai messo Mi piace a 11 brani</p><p class='m-0 text-secondary'>Di ${
        data.name
      }</p></div></div>
        </div>
        </div>`;
      mainContent.innerHTML += contenuti;
    })
    .catch((err) => {
      console.log(err);
    });


};

    aggiungiTracks.addEventListener('click', function(event) {
      event.preventDefault();
    
      fetchTracks(apiUrl)

    });
  ////////////////////////////////////////////////

  //async function fetchTracks(url){

  // while(url){
  //   const response =await fetch(url);
  //  const data = await response.json();
  //  const tracksFetchate = data.data;
  //  tracks.push(tracksFetchate)
  //  url= data.next
  //  console.log(url)
  // console.log(tracksFetchate)
  // if(!data.next){
  //  break
  //  }
  // }

//fetchTracks(apiUrl)
//
///.catch((error)=>{console.log(error)})

//}
async function fetchTracks(url) {
  
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((data) => {
      console.log(data);
      url = data.next;
      console.log(url);
    })
    .catch((err) => {
      console.log(err);
    });
}
