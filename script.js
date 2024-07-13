var songs = [
  { name: "Glory Huming", image: "./images/GloryHuming.jpg", url: "./music/Glory Huming.mp3"},
  { name: "Burdah shareef", image: "./images/Burdahshareef.jpg", url: "./music/Burdahshareef.mp3"},
  { name: "Traveller", image: "./images/traveller.jpg", url: "./music/traveller.mp3" },
  { name: "Ehd-e-Wafa", image: "./images/Ehd-e-Wafa.jpg", url: "./music/Ehd-e-Wafa.mp3" },
  { name: "plevne Marsi", image: "./images/plevnemarsi.jpeg", url: "./music/plevne Marsi.mp3"}
]

var menu = document.querySelector(".names");
var men = document.querySelector(".j1");
var playpause = document.querySelector('.playpause')
var backward = document.querySelector('#btn1')
var forward = document.querySelector('#btn2')


var selectedItem = 0;
var audio = new Audio();
var flags = 0;

function main() {
  var clutter = "";

  songs.forEach(function (objs, index) {

    clutter += `<h4 class="name" id="${index}">${objs.name}</h4>`;
  })
  menu.innerHTML = clutter;

  audio.src = songs[selectedItem].url;

  document.querySelector(".center").innerHTML = `<img id="img" src="${songs[selectedItem].image}" alt="">`;

  document.querySelector('.song_details').innerHTML = `<div class="sname" style="font-size: 20px;">${songs[selectedItem].name}</div>`
}

function showmenu() {
  var flag = 0;

  // men.addEventListener("click", (obj) => {
  //   if (flag == 0) {
  //     menu.style.display = "block";
  //     flag = 1;
  //   }
  //   else {
  //     menu.style.display = "none";
  //     flag = 0;
  //   }
  // })
  document.querySelector('.player').addEventListener("click", (obj) => {
    if (obj.target.classList.contains("name") || obj.target.classList.contains("j1")) {
      if (flag == 0) {
        menu.style.display = "block";
        flag = 1;
      } else {
        menu.style.display = "none";
        flag = 0;
      }
    }
  })
}

menu.addEventListener("click", (dets) => {
  selectedItem = dets.target.id;
  // audio.src = songs[selectedItem].url;
  main();
  audio.play();
  playpause.innerHTML = `<i class="text-3xl ri-pause-fill "></i>`
  flags = 1;
  //   console.log(selectedItem)
  document.querySelector(".center").innerHTML = `<img id="img" src="${songs[selectedItem].image}" alt="">`;


  document.querySelector('.song_details').innerHTML = `<div class="sname" style="font-size: 20px;">${songs[selectedItem].name}</div>`
})

function playnpause() {

  playpause.addEventListener("click", () => {

    if (flags == 0) {
      playpause.innerHTML = `<i class="text-3xl ri-pause-fill "></i>`
      audio.play();
      flags = 1;
    } else {
      playpause.innerHTML = `<i class="text-3xl ri-play-fill "></i>`
      audio.pause();
      flags = 0;
    }
  })
}

forward.addEventListener("click", () => {
  selectedItem++;
  if (selectedItem < songs.length) {
    main();
    audio.play()
    playpause.innerHTML = `<i class="text-3xl ri-pause-fill "></i>`
    flags = 1;
  }
})

backward.addEventListener("click", () => {
  if (selectedItem > 0) {
    selectedItem--;
    main();
    audio.play()
    playpause.innerHTML = `<i class="text-3xl ri-pause-fill "></i>`
    flags = 1;
  }
})


main();
showmenu();
playnpause();