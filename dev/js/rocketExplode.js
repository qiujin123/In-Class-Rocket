import { gsap } from "gsap";

gsap.set("#explosion",{transformOrigin:"center"});
export let rocketExplodeTL = gsap.timeline();

rocketExplodeTL.to("#space-ship",{duration:2, rotate:-720 },"explo")  
                .fromTo("#explosion",{duration:0.1, alpha:0, scale:0.25},{ duration: 3, alpha:1, scale: 50, ease:"none"}, "explo")
                .to("#space-ship",{duration:0.3, alpha:0 },"explo")  
                .to("#explosion",{duration:5, alpha:0 })

