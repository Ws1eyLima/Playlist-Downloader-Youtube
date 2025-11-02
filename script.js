const API_KEY = "AIzaSyAWXYB9VVPuI_diXRhv8ii0GrOce0hOCI0";
const fetchBtn = document.getElementById("fetchBtn");
const playlistContainer = document.getElementById("playlistContainer");

fetchBtn.addEventListener("click", async() => {
    const playlistUrl = document.getElementById("playlistUrl").value;
    const playlistId = getPlaylistId(playlistUrl);

    if(!playlistId){
        alert("URL inválida!");
        return;
    }

    playlistContainer.innerHTML = "<p>Buscando Vídeos...</p>";

    try{
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`
        );
        const data = await res.json();
        
        showVideos(data.items);
    } catch(error){
        playlistContainer.innerHTML = `<p>Erro: ${error.message}</p>`
    };
});

function getPlaylistId(url){
    const match = url.match(/[?&]list=([^&]+)/);
    return match ? match[1] : null;
}

function showVideos(videos){
    playlistContainer.innerHTML = "";
    videos.forEach((item) => {
        const video = item.snippet;
        const videoId = video.resourceId.videoId;

        const div = document.createElement("div");
        div.classList.add("video-item");
        div.innerHTML = `
      <img src="${video.thumbnails.medium.url}" alt="${video.title}">
      <h3>${video.title}</h3>
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Assistir no YouTube</a>
    `;
    playlistContainer.appendChild(div);
    });
}

