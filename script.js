/* =========================================================
   PARIKSHIT PORTFOLIO
   script.js
========================================================= */

/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  
  /* =========================================================
     SCROLL REVEAL
  ========================================================= */
  
  const revealElements = document.querySelectorAll(
    ".reveal"
  );
  
  const revealObserver =
new IntersectionObserver(

(entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add(
        "active"
      );

      revealObserver.unobserve(
        entry.target
      );

    }

  });

},

{
  threshold:0.15
}

);
  
  revealElements.forEach((el) => {
  
    revealObserver.observe(el);
  
  });
  
  /* =========================================================
     COUNTER ANIMATION
  ========================================================= */
  
  const counters =
  document.querySelectorAll(
    ".counter"
  );
  
  function runCounter(counter){
  
    const target =
    Number(
      counter.dataset.target
    );
  
    let current = 0;
  
    const increment =
    target / 30;
  
    function update(){
  
      current += increment;
  
      if(current < target){
  
        counter.textContent =
        Math.floor(current);
  
        requestAnimationFrame(
          update
        );
  
      }else{
  
        counter.textContent =
        target + "+";
  
      }
  
    }
  
    update();
  
  }
  
  const counterObserver =
  new IntersectionObserver(
  
  (entries)=>{
  
    entries.forEach((entry)=>{
  
      if(entry.isIntersecting){
  
        counters.forEach((counter)=>{
  
          runCounter(counter);
  
        });
  
        counterObserver.disconnect();
  
      }
  
    });
  
  },
  
  {
    threshold:.5
  }
  
  );
  
  const heroStats =
  document.querySelector(
    ".hero-stats"
  );
  
  if(heroStats){
  
    counterObserver.observe(
      heroStats
    );
  
  }
  
  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */
  
  const sections =
  document.querySelectorAll(
    "section[id]"
  );
  
  const navLinks =
  document.querySelectorAll(
    ".navbar nav a"
  );
  
  window.addEventListener(
  "scroll",
  ()=>{
  
    let current = "";
  
    sections.forEach((section)=>{
  
      const sectionTop =
        section.offsetTop - 180;
  
      const sectionHeight =
        section.offsetHeight;
  
      if(
        window.scrollY >= sectionTop &&
        window.scrollY <
        sectionTop + sectionHeight
      ){
  
        current =
        section.getAttribute("id");
  
      }
  
    });
  
    navLinks.forEach((link)=>{
  
      link.classList.remove(
        "active-nav"
      );
  
      if(
        link.getAttribute("href")
        ===
        `#${current}`
      ){
  
        link.classList.add(
          "active-nav"
        );
  
      }
  
    });
  
  });
  
  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */
  
  document
  .querySelectorAll(
  '.navbar a[href^="#"]'
  )
  
  .forEach((link)=>{
  
    link.addEventListener(
    "click",
    function(e){
  
      e.preventDefault();
  
      const target =
      document.querySelector(
        this.getAttribute("href")
      );
  
      if(target){
  
        target.scrollIntoView({
  
          behavior:"smooth",
          block:"start"
  
        });
  
      }
  
    });
  
  });
  
  /* =========================================================
     HERO IMAGE TILT
  ========================================================= */
  
  const heroImage =
  document.querySelector(
    ".hero-right"
  );
  
  if(heroImage){
  
    heroImage.addEventListener(
      "mousemove",
      (e)=>{
  
        const rect =
        heroImage.getBoundingClientRect();
  
        const x =
        e.clientX - rect.left;
  
        const y =
        e.clientY - rect.top;
  
        const rotateY =
        (x / rect.width - .5) * 4;
  
        const rotateX =
        (y / rect.height - .5) * -4;
  
        heroImage.style.transform =
  
        `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;
  
      }
    );
  
    heroImage.addEventListener(
      "mouseleave",
      ()=>{
  
        heroImage.style.transform =
  
        `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        `;
  
      }
    );
  
  }
  
  /* =========================================================
     PARALLAX GLOWS
  ========================================================= */
  
  const cyanGlow =
  document.querySelector(
    ".glow.cyan"
  );
  
  const purpleGlow =
  document.querySelector(
    ".glow.purple"
  );
  
  window.addEventListener(
  "mousemove",
  (e)=>{
  
    const x =
    e.clientX /
    window.innerWidth;
  
    const y =
    e.clientY /
    window.innerHeight;
  
    if(cyanGlow){
  
      cyanGlow.style.transform =
  
      `translate(
        ${x * 35}px,
        ${y * 35}px
      )`;
  
    }
  
    if(purpleGlow){
  
      purpleGlow.style.transform =
  
      `translate(
        ${-x * 35}px,
        ${-y * 35}px
      )`;
  
    }
  
  });
  
  /* =========================================================
     TIMELINE ANIMATION
  ========================================================= */
  
  const timelineCards =
  document.querySelectorAll(
    ".timeline-card"
  );
  
  const timelineObserver =
  new IntersectionObserver(
  
  (entries)=>{
  
    entries.forEach((entry)=>{
  
      if(entry.isIntersecting){
  
        entry.target.classList.add(
          "timeline-visible"
        );
  
      }
  
    });
  
  },
  
  {
    threshold:.2
  }
  
  );
  
  timelineCards.forEach((card)=>{
  
    timelineObserver.observe(card);
  
  });
  
  /* =========================================================
     FLOATING PARTICLES
  ========================================================= */
  
  const particleContainer =
  document.querySelector(
    ".bg-wrapper"
  );
  
  if(particleContainer){
  
    for(let i=0;i<15;i++){
  
      const particle =
      document.createElement("span");
  
      particle.classList.add(
        "particle"
      );
  
      particle.style.left =
        Math.random() * 100 + "%";
  
      particle.style.top =
        Math.random() * 100 + "%";
  
      particle.style.animationDelay =
        Math.random() * 6 + "s";
  
      particleContainer.appendChild(
        particle
      );
  
    }
  
  }
  
  /* =========================================================
     SCROLL PROGRESS BAR
  ========================================================= */
  
  const progressBar =
  document.createElement("div");
  
  progressBar.classList.add(
    "scroll-progress"
  );
  
  document.body.appendChild(
    progressBar
  );
  
  window.addEventListener(
  "scroll",
  ()=>{
  
    const scrollTop =
    document.documentElement.scrollTop;
  
    const scrollHeight =
  
    document.documentElement.scrollHeight -
  
    document.documentElement.clientHeight;
  
    const progress =
  
    (scrollTop / scrollHeight) * 100;
  
    progressBar.style.width =
    progress + "%";
  
  });
  
  /* =========================================================
     EASTER EGG
  ========================================================= */
  
  console.log(
    "%cParikshit Rajput Portfolio",
    "color:#22d3ee;font-size:18px;font-weight:bold;"
  );
  
  console.log(
    "%cCybersecurity | VAPT | AI/LLM Security",
    "color:#a855f7;"
  );