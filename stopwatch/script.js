let container=document.getElementById('container');
let starttime=0;
let elapsedtime=0;
let timer;
let isworking=false;
function start()
{
     if(!isworking)
        {  
           starttime=Date.now()-elapsedtime;
           timer=setInterval(update,10);
           isworking=true;
        }
       

}
function stop()
{    if(isworking)
    {
        clearInterval(timer);
        isworking=flase;
    }
    
     
}
function reset()
{   clearInterval(timer);
    isworking=false;
    container.textContent="00:00:00:00";
    elapsedtime=0;

}
function update()
{  
    const currenttime=Date.now();
    elapsedtime=currenttime - starttime;
    let hours=Math.floor(elapsedtime/(1000*60*60));
    let min=Math.floor(elapsedtime/(1000*60)%60);
    let sec=Math.floor(elapsedtime/1000%60);
    let mlsec=Math.floor(elapsedtime%1000/10);
    container.textContent=`${hours}:${min}:${sec}:${mlsec}`;
}

