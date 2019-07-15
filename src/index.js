import './style.css';

function component() {
    const element = document.createElement('div');

    element.classList.add('wrapper');

    element.innerHTML = `
    <div class="content">
      <h1 class="title">Tiberiu Ion</h1>
      <p class="copy__secondary">Digital designer and wannabe web developer</p>
      <p class="copy">Currently, I’m a Creative Designer at UCAS. I develop HTML email templates and the software behind interactive kiosks deployed at exhibitions.
      </p>

      <p class="copy">
        If you fancy talking about design, web development or cats, <a href="mailto:tiberiu.vi@gmail.com"> drop me a line</a>.
      </p>
      <ul class="socials">
        <li class="socials__item"><a href="https://twitter.com/">Twitter</a></li>
        <li class="socials__item"><a href="https://www.instagram.com/tiberiuion91/">Instagram</a></li>
        <li class="socials__item"><a href="https://github.com/tiberiuion">Github</a></li>
      </ul>
    </div>
  `;

    return element
}

document.body.appendChild(component());