let backgroundTimeStamp;
document.addEventListener('visibilitychange',(event)=>{
    if(document.visibilityState === 'hidden'){
        document.getElementById('root').innerHTML = document.getElementById('root').innerHTML+ '<br/>'+`Going to background at ${new Date()}` + '<br/>'
        backgroundTimeStamp= performance.now()
    }
    else{
        document.getElementById('root').innerHTML = document.getElementById('root').innerHTML+ `The page is visible  at ${new Date()}` + '<br/>'
        timeElapsed = performance.now() - backgroundTimeStamp
        console.log(`we are back from background after ${timeElapsed/1000}s`)
    }
})