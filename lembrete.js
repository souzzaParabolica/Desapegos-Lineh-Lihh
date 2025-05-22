gsap.to(".lembrete", {
  opacity: 0,
  marginTop: "-100px",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 0%",
    end: "top -40%",
    scrub: 1,
    markers: false,
  }
})
