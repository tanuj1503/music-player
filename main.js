let fillbar =  document.querySelector(".fill");
let audios = ["Audio_One.mp3","Audio_Two.mp3","badguy.mp3","brown.mp3", "uddgaye.mp3"];
let covers = ["cover1.jpg", "cover2.jpg", "badguy.jpg", "brown.jpg","uddgaye.jpg"];
let songNames = ["i Found you", "No Trust","Bad Guy", "Brown Munde", "udd gaye.."]
let currentTime = document.querySelector(".time");

//create object of audio
let audio = new Audio();
let currentSong = 0;

//song will play when it is load on window
window.onload = playsong;


//we will play the song using this function
function playsong(){
    audio.src = audios[currentSong];
    audio.play();
}

function togglebtn(){
    if(audio.paused){
        audio.play();
        let playbtn = document.querySelector(".play-pause");
        playbtn.innerHTML = '<i class="fa fa-pause"></i>';

    }else{
            audio.pause();
            let playbtn = document.querySelector(".play-pause");
            playbtn.innerHTML = '<i class="fa fa-play"></i>';
    
    }
}

//dynamic seek and fill
audio.addEventListener("timeupdate", function(){
    let position = audio.currentTime / audio.duration;
    fillbar.style.width = position * 100 + "%";

    convertTime(Math.round(audio.currentTime));

    if (audio.ended) {
        nextAudio();
      }
    });
    
    function convertTime(seconds) {
      let min = Math.floor(seconds / 60);
      let sec = seconds % 60;
      // lets fix the songle digit
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      currentTime.textContent = min + ":" + sec;
    
      // Fix the total time
      totalTime(Math.round(audio.duration));
    }
    
    function totalTime(seconds) {
      let min = Math.floor(seconds / 60);
      let sec = seconds % 60;
    
      // lets fix the songle digit
    
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      currentTime.textContent += " & " + min + ":" + sec;
    }
    
    function nextAudio(){
        currentSong++;
        if(currentSong > 5){
            currentSong = 0;
            currentSong++
        }
        playsong();
        playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
        titleName = document.querySelector(".title");
        titleName.innerHTML = songNames[currentSong];
         
        // just one line jquery for changing the covers
      
        $(".image img").attr("src", covers[currentSong]);
    }

    function prevAudio(){
        currentSong--;
        if(currentSong < 0){
            currentSong = 5;
            currentSong--;
        }
        playsong();
        playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
        titleName = document.querySelector(".title");
        titleName.innerHTML = songNames[currentSong];
         
        // just one line jquery for changing the covers
      
        $(".image img").attr("src", covers[currentSong]);
    }

    function decreaseVolume() {
        audio.volume -= 0.25;
      }
      
      function increaseVolume() {
        audio.volume += 0.25;
      }

      let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener("click", function() {
  if (audio.volume === 1) {
    audio.volume = 0;
    document.querySelector(".volume-up i").className = "fa fa-volume-mute";
  } else {
    audio.volume = 1;
    document.querySelector(".volume-up i").className = "fa fa-volume-up";
  }
});