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

document.addEventListener('freeze',(event)=>{
    // we will be suspended
    console.log(`last chance to save the state - `)
})

document.addEventListener('resume',(event)=>{
    // we are back from suspension
    console.log(`No need to store the state`)
})