//function updateclock(){

function updateclock(){
    const clock= document.getElementById("clock");

    const now=new Date();
    let hours =now.getHours();
    let minute=now.getMinute();
    let seconds=now.getSeconds();

    hours=hours <10

clock.textContent=`${hours}:${minute}:${second}`;

}
updateclock();//invoke or call
setInterval(updateclock,1000)
