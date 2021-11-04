const qKey = document.getElementById("qKey");
const wKey = document.getElementById("wKey");
const eKey = document.getElementById("eKey");
const rKey = document.getElementById("rKey");

qKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'q'){
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
}
});

wKey.addEventListener("click", () =>{
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
});
    
document.addEventListener("keydown",  (event) => {
    if(event.key == 'w'){
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
    }
});
eKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})
document.addEventListener("keydown",  (event) => {
    if(event.key == 'e'){
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
}
});
wKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'w'){
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
}
});
rKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
});
document.addEventListener("keydown",  (event) => {
    if(event.key == 'r'){
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
}
})
