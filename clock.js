setInterval(() => {
    d=new Date();
    hour=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hrotation=30*hour+min/2;
    mrotation=6*min;
    srotation=6*sec;

    hours.style.transform=`rotate(${hrotation}deg)` ;
    minute.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}, 1000);