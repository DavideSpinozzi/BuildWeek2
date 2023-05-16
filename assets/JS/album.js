

let admin = new URLSearchParams(window.location.search);

let albumID = admin.get('albumId');
console.log(albumID);


fetch (`https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`)
.then((res) => {
if(res.ok) {
    return res.json();
}else{
    throw new Error ('ERRORE NEL RECUPERO');
}
})
.then ((data) => {
    console.log(data);
    const album = data.data;
    let populate = `
    
    
    
    
    
    
    
    
    
    `

    let albumContainer = document.getElementById('albumContainer');
    albumContainer.innerHTML += populate;
})
.catch((err) => {
    console.log(err);
})

