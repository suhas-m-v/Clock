function timu(){
    const now=new Date()
    let hr=now.getHours().toString().padStart(2,0)
    let mer= hr >=12 ? "PM" : "AM";
    hr=hr%12 || 12
    const min=now.getMinutes().toString().padStart(2,0)
    const sec=now.getSeconds().toString().padStart(2,0)
    const res=`${hr}:${min}:${sec} ${mer}`;

    document.getElementById("clock").textContent=res
}

setInterval(timu,1000)