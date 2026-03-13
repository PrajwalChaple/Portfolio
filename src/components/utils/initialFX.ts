import SplitType from "split-type";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitType(
    // We explicitly pass the selector nodes if it's multiple 
    // split-type requires comma separated string or element array
    ".landing-info h3, .landing-intro h2, .landing-intro h1",
    {
      types: "words,lines",
      lineClass: "split-line",
    }
  );
  
  if (landingText.words) {
    gsap.fromTo(
      landingText.words,
      { opacity: 0, y: 50, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        y: 0,
        stagger: 0.05,
        delay: 0.1,
      }
    );
  }

  var landingText2 = new SplitType(".landing-h2-info", { types: "words,lines", lineClass: "split-h2" });
  if (landingText2.words) {
    gsap.fromTo(
      landingText2.words,
      { opacity: 0, y: 50, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        y: 0,
        stagger: 0.05,
        delay: 0.1,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      y: 0,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitType(".landing-h2-info-1", { types: "words,lines", lineClass: "split-h2" });
  var landingText4 = new SplitType(".landing-h2-1", { types: "words,lines", lineClass: "split-h2" });
  var landingText5 = new SplitType(".landing-h2-2", { types: "words,lines", lineClass: "split-h2" });

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitType, Text2: SplitType) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  if (Text2.words && Text1.words) {
    tl.fromTo(
      Text2.words,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        y: 0,
        stagger: 0.1,
        delay: delay,
      },
      0
    )
      .fromTo(
        Text1.words,
        { y: 50 },
        {
          duration: 1,
          ease: "power2.out",
          y: 0,
          stagger: 0.1,
          delay: delay2,
        },
        1
      )
      .fromTo(
        Text1.words,
        { y: 0 },
        {
          y: -50,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: delay,
        },
        0
      )
      .to(
        Text2.words,
        {
          y: -50,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          delay: delay2,
        },
        1
      );
  }
}
