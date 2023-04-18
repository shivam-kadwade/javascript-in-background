// media playing

document.getElementById('btnPlay').addEventListener('click',()=>{
    navigator.mediaSession.metadata =new MediaMetadata({
        title: "Airbnb's official music",
        artist: "Unknown",
        album: "Airbnb",
        artwork: [
            {
                src: "/media/airbnb.png",
                type: "image/png",
                sizes: [
                    "800x800"
                ]
            }
        ]
    })
    document.querySelector('audio').play()
})
