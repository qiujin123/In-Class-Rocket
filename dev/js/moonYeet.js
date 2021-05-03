import { gsap } from "gsap";

gsap.set("#right-arm",{transformOrigin:"center"});

export let moonYeetTL = gsap.timeline();

moonYeetTL.to("#moon",{duration:3, y:500, scale:2}, "zoomOut")
            .to("#space-ship",{duration:3, y:-744, x:470, scale:0.1}, "zoomOut")
            .to(".moon-things",{delay:1, duration:2, display:"block"})
            .to("#right-arm",{duration:2, rotate:-105, y:15 })
            .to("#space-ship",{delay:1, duration:2, scale:1, rotate:360, x:800, onComplete:controlFlames },"ready")
            .to("#right-arm",{delay:1, duration:0.1, rotate:7, y:15 },"ready")

            export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#left-blue",{duration:0.25, scaleY:.55,yoyo:true, repeat:-1},"flames")
            .to("#left-dark-blue",{duration:0.15, scaleY:.35,yoyo:true, repeat:-1},"flames")
            .to("#right-blue",{duration:0.25, scaleY:.55,yoyo:true, repeat:-1},"flames")
            .to("#right-dark-blue",{duration:0.15, scaleY:.35,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    gsap.set(".flames",{display:"block"});
    flamesTL.play()
}
            
        