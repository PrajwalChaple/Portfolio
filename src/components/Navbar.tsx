import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Export a smoother-like object that has a paused method to maintain compatibility with initialFX.ts
export const smoother = {
  lenisInstance: null as Lenis | null,
  paused: function (isPaused: boolean) {
    if (this.lenisInstance) {
      if (isPaused) {
        this.lenisInstance.stop();
      } else {
        this.lenisInstance.start();
      }
    }
  },
};

const Navbar = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    smoother.lenisInstance = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    smoother.paused(true);
    window.scrollTo(0, 0);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let currentTarget = e.currentTarget as HTMLAnchorElement;
          let sectionSelector = currentTarget.getAttribute("href");
          if (sectionSelector && sectionSelector.startsWith("#")) {
            lenis.scrollTo(sectionSelector, { duration: 1.5 });
          }
        }
      });
    });
    
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          PC
        </a>
        <a
          href="mailto:prajwalchaple14@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          prajwalchaple14@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
