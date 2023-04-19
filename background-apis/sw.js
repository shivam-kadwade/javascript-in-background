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