let myKeys = document.querySelectorAll('.key');

// myKeys[0].addEventListener('click' , function() {
//     alert("Working");
// });

for(let n = 0 ; n < myKeys.length ; n++){
  myKeys[n].addEventListener('click',function() {
    playSound(myKeys[n].innerHTML.toLowerCase());
  });
}

document.addEventListener('keydown', function(boardBtn) {
  playSound(boardBtn.key.toLowerCase());
  let pressedKey = boardBtn.key.toLowerCase();


for(let n = 0 ; n < myKeys.length ; n++){
  myKeys[n].classList.remove('activated');
}

for(let n = 0 ; n < myKeys.length ; n++){
  if (pressedKey == myKeys[n].innerHTML.toLowerCase()){
  myKeys[n].classList.add('activated');
  }
}

});

function playSound(key){
  let audio;
  switch(key) {
    case 'a':
      audio = new Audio('sounds/do.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('sounds/doh.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('sounds/fa.mp3');
      audio.play();
      break;
    case 'f':
      audio = new Audio('sounds/la.mp3');
      audio.play();
      break;
    case 'g':
      audio = new Audio('sounds/mi.mp3');
      audio.play();
      break;
    case 'h':
      audio = new Audio('sounds/do.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('sounds/re.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('sounds/sol.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('sounds/ti.mp3');
      audio.play();
      break;
  default:
      console.log(key);
  }
}
