// const process = require('process');
// const apikey=process.env.API_KEY;
const apiKey = 'AIzaSyB_AZ7DL1RSuH5QzHkJxhWpWeafuyqD9PU';
const videoIds = ["eDqfg_LexCQ", "usb-9tmZMuQ","HMX0vrJj5nM","K7Q5iYHvgwo"]; // video IDs here

videoIds.forEach(videoId => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items.length > 0) {
                const videoData = data.items[0].snippet;
                const summaryDiv = document.getElementById(`summary-${videoId}`);
                summaryDiv.innerHTML = `
                    <h3>${videoData.title}</h3>
                    <p>${videoData.description}</p>
                `;
                summaryDiv.style.border = "1px solid #ccc";
                summaryDiv.style.padding = "10px";
                summaryDiv.style.marginTop = "10px";
            }
        })
        .catch(error => console.error("Error fetching YouTube video details:", error));
});

const cinematicVideo = document.getElementById('cinematicVideo');
cinematicVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');