let content = document.querySelectorAll('.bday > *')

let entrance = 
    gsap.from(content, {
        y:100,
        opacity: 0,
        stagger: 0.5
    })
