navigator.serviceWorker.register("/sw.js")

document.getElementById('btnBgSync').addEventListener('click',async ()=>{
    if( 'SyncManager' in window){
        const swReg = await navigator.serviceWorker.ready
        console.log(swReg)
        console.log(navigator)
        swReg.sync.register('like')
    }
})

document.getElementById('BtnPerBgSync').addEventListener('click',async ()=>{
    const swReg= await navigator.serviceWorker.ready
    const permissionStatus = await navigator.permissions.query({
        name:'periodic-background-sync'
    })
    if(permissionStatus === 'granted'){
        swReg.periodicSync.register('dailynews', {
            minInterval: 24 * 60 * 60 * 1000 
        })
    }
});