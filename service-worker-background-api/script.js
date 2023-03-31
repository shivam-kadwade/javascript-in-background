document.addEventListener('visibilitychange',(event)=>{
    if(document.visibilityState === 'hidden'){
        document.getElementById('root').innerHTML = document.getElementById('root').innerHTML+ '<br/>'+`Going to background at ${new Date()}` + '<br/>'
    }
    else{
        document.getElementById('root').innerHTML = document.getElementById('root').innerHTML+ `The page is visible  at ${new Date()}` + '<br/>'
    }
})