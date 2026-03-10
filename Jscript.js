const audio = document.getElementById("audio")

const songName = document.querySelector(".song-name")
const artist = document.querySelector(".artist")
const disk = document.querySelector(".box-disk")

const playBtn = document.querySelector(".btn-play")
const nextBtn = document.querySelector(".btnnext")
const prevBtn = document.querySelector(".btnback")

const seekBar = document.querySelector(".seek-bar")
const currentTime = document.querySelector(".current-time")
const musicTime = document.querySelector(".music-time")

let songIndex = 0


function loadSong(i){

audio.src = songs[i].src
songName.innerText = songs[i].name
artist.innerText = songs[i].artist
disk.style.backgroundImage = `url(${songs[i].cover})`

}

loadSong(songIndex)


playBtn.addEventListener("click",()=>{

if(audio.paused){

audio.play()
playBtn.classList.remove("pause")
disk.classList.add("play")

}else{

audio.pause()
playBtn.classList.add("pause")
disk.classList.remove("play")

}

})


nextBtn.addEventListener("click",()=>{

songIndex++

if(songIndex >= songs.length){
songIndex = 0
}

loadSong(songIndex)
audio.play()

playBtn.classList.remove("pause")
disk.classList.add("play")

})


prevBtn.addEventListener("click",()=>{

songIndex--

if(songIndex < 0){
songIndex = songs.length - 1
}

loadSong(songIndex)
audio.play()

playBtn.classList.remove("pause")
disk.classList.add("play")

})


audio.addEventListener("timeupdate",()=>{

seekBar.value = audio.currentTime

let min = Math.floor(audio.currentTime / 60)
let sec = Math.floor(audio.currentTime % 60)

if(sec < 10) sec = "0" + sec

currentTime.innerText = min + ":" + sec

})


audio.addEventListener("loadedmetadata",()=>{

seekBar.max = audio.duration

let min = Math.floor(audio.duration / 60)
let sec = Math.floor(audio.duration % 60)

if(sec < 10) sec = "0" + sec

musicTime.innerText = min + ":" + sec

})


seekBar.addEventListener("input",()=>{

audio.currentTime = seekBar.value

})


audio.addEventListener("ended",()=>{

nextBtn.click()

})
