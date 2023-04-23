self.addEventListener('push', (event)=>{
    console.log(event)
    console.log("we have received a push message")
})

self.addEventListener('sync',(event)=>{
    switch(event.tag){
        case "like":
            console.log('Sync operation for like tag')
            break;
        default:
            console.log(`Sync operation for unknown tag ${event.tag}`)
    }
})

self.addEventListener('periodicsync',(event)=>{
    switch(event.tag){
        case "dailynews":
            console.log('Periodic sync event for dailynews tag')
            break;
        default:
            console.log(`Periodic sync event for unknown tag ${event.tag}`)
    }
})

self.addEventListener("backgroundfetchsuccess", (event)=>{
    console.log("files downloaded successfully")
    const downloadedFiles = event.registration.matchAll()
    console.log(downloadedFiles)
})

