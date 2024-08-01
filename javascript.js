
function loadingAnimation(){
    gsap.from(" #line1 ", {
        y:30,
        opacity:0,
        delay:0.9,
        duration:0.4,
    
    })
    gsap.from("#line2", {
        y:30,
        opacity:0,
        delay:0.9,
        duration:0.3,
        
    
    }) 
    gsap.from("#line3", {
        y:30,
        opacity:0,
        delay:0.8,
        duration:0.3,
        
    
    })

    gsap.from("#para1", {
        y:30,
        opacity:0,
        delay:0.7,
        duration:0.3,
        
    
    })

    gsap.from("#button", {
        y:30,
        opacity:0.7,
        delay:0.6,
        duration:0.3,
        
    
    })


  }
  
  

    loadingAnimation();

      function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      }

      const button = document.querySelector("button");
 const audio = document.getElementById('audioplayer');
 audio.pause()=true;
 function playPause() {
  
  
     if (audio.paused == true) {
      audio.play();
       button.innerHTML =
        "PAUSE";
    } else if (audio.paused == false) {
     audio.pause();
    button.innerHTML =
        "PLAY";
    }
   }

 button.addEventListener("click", playPause);