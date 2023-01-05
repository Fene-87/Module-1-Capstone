const menuList = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const removeMenu = document.querySelector('.remove-icon');
const featuredSpeakers = document.querySelector('.featured-speakers');

menuIcon.addEventListener('click', () => {
  menuList.classList.add('active');
});

removeMenu.addEventListener('click', () => {
  menuList.classList.remove('active');
});

const speakerInfo = [
  {
    img: './img/220504_kturner01.jpg',
    imgAlt: 'Image of Khari Turner',
    name: 'Khari Turner',
    shortDescription: 'An American Artist living and working in New York',
    longDescription: 'Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo',
  },

  {
    img: './img/BrookHsu.jpg',
    imgAlt: 'Image of Brook Hsu',
    name: 'Brook Hsu',
    shortDescription: 'A Taiwanese-American artist with recent solo exhibitions',
    longDescription: 'Brook\'s abstract and figurative works are rife with symbolism serving as mysterious dreamlike mirrors of reality',
  },

  {
    img: './img/Haley-Josephs.jpg',
    imgAlt: 'Image of Haley-Josephs',
    name: 'Haley Josephs',
    shortDescription: 'A painter of mystical and vibrant imagery',
    longDescription: 'Joseph\'s paintings use bold colors and dream-like imagery to explore themes of feminity and mortality',
  },

  {
    img: './img/sarahzapataportrait_copy.jpg',
    imgAlt: 'Image of Sarah Zapata',
    name: 'Sarah Zapata',
    shortDescription: 'A Peruvian-American fabric artist',
    longDescription: 'Zapata creates technicolored handwoven sculptures that draw on Peruvian weaving techniques',
  },

  {
    img: './img/Derek-Webpage.jpg',
    imgAlt: 'Image of Derek Weisberg',
    name: 'Derek Weisberg',
    shortDescription: 'Participated in over 90 shows in the last 8 years',
    longDescription: 'Based in Oakland Carlifonia, Derek is a figurative artist whose sculptures are viscerally human',
  },

  {
    img: './img/Englander004RGBTall.jpg',
    imgAlt: 'Image of Elizabeth Englander',
    name: 'Elizabeth Englander',
    shortDescription: 'An American post war and contemporary artist',
    longDescription: 'Numerous key galleries and museums such as LOMEX have featured Elizabeth\'s work in the past',
  },
];

featuredSpeakers.innerHTML = `
<div class="program-div">
            <h2 class="speakers-header">Featured Speakers</h2>
            <div class="line-break"></div>
        </div>
        <section class="all-speakers">
            <div class="speaker-details">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <div class="speaker-details">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <div class="speaker-details hide-speaker">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <div class="speaker-details hide-speaker">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <div class="speaker-details hide-speaker">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <div class="speaker-details hide-speaker">
                <div class="speaker-image">
                    <img 
                        class="speaker-image-sizing"
                    />
                </div>
                <div>
                    <article class="article-items">
                        <h3></h3>
                        <h4></h4>
                        <div class="speaker-line"></div>
                        <p></p>
                    </article>
                </div>
            </div>

            <button class="speakers-button">MORE <span><i class="fa-solid fa-chevron-down"></i></span></button>
        </section>
`;

const speakerDetails = document.querySelectorAll('.speaker-details');
const speakerImage = document.querySelectorAll('.speaker-image img');
const speakerHeader = document.querySelectorAll('.article-items h3');
const speakerShortDesc = document.querySelectorAll('.article-items h4');
const speakerLongDesc = document.querySelectorAll('.article-items p');
const speakerButton = document.querySelector('.speakers-button');

for (let i = 0; i < speakerDetails.length; i += 1) {
  speakerImage[i].src = speakerInfo[i].img;
  speakerImage[i].alt = speakerInfo[i].img;
  speakerHeader[i].textContent = speakerInfo[i].name;
  speakerShortDesc[i].textContent = speakerInfo[i].shortDescription;
  speakerLongDesc[i].textContent = speakerInfo[i].longDescription;
}

speakerButton.addEventListener('click', () => {
  for (let i = 2; i < speakerDetails.length; i += 1) {
    speakerDetails[i].classList.toggle('hide-speaker');
  }

  if (speakerButton.innerHTML === 'MORE <span><i class="fa-solid fa-chevron-down"></i></span>') {
    speakerButton.innerHTML = 'LESS <span><i class="fa-solid fa-chevron-up"></i></span>';
  } else if (speakerButton.innerHTML === 'LESS <span><i class="fa-solid fa-chevron-up"></i></span>') {
    speakerButton.innerHTML = 'MORE <span><i class="fa-solid fa-chevron-down"></i></span>';
  }
});