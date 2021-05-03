import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let moonPathTL = gsap.timeline();

moonPathTL.to("#moon", {
    delay: 1,
    duration: 5,
    motionPath: {
        path: "#moonPath",
        align:"#moonPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease: "power3.in",
    scale:5
});


// MotionPathHelper.create("#moon");