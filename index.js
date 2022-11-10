const btnE=document.querySelector(".btn");
const vcontE=document.querySelector(".video-container");
const mcontE=document.querySelector(".main-container");
const xE=document.querySelector(".icon");
const videoE=document.querySelector("video");
console.log(xE);
btnE.addEventListener("click",()=>{
    vcontE.classList.remove("active");
})
xE.addEventListener("click",()=>{
    vcontE.classList.add("active");
    videoE.pause();
    videoE.currentTime=0;
})
