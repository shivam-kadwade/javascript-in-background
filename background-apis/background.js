navigator.serviceWorker.register("/sw.js")

document.getElementById('btnBgSync').addEventListener('click',async ()=>{
    if( 'SyncManager' in window){
        const swReg = await navigator.serviceWorker.ready
        console.log(swReg)
        console.log(navigator)
        swReg.sync.register('like')
    }
})