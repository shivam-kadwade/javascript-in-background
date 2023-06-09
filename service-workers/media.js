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

document.getElementById("btnStop").addEventListener('click',()=>{
    document.querySelector('audio').pause()
})

document.getElementById('btnPiP').addEventListener('click',()=>{
    if(document.pictureInPictureElement){
        document.exitPictureInPicture()
    }
    document.querySelector('video').requestPictureInPicture()
})

document.getElementById('btnBeacon').addEventListener("click",(event)=>{
        const data = {
            message:"Message from Airbnb"
        }
        navigator.sendBeacon('/log',JSON.stringify(data))
})