const menuList = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const removeMenu = document.querySelector('.remove-icon');
const featuredSpeakers = document.querySelector('.featured-speakers')

menuIcon.addEventListener('click', () => {
    menuList.classList.add('active');
})

removeMenu.addEventListener('click', () => {
    menuList.classList.remove('active');
})

const speakerInfo = [
    {
        name: 'Khari Turner',
        shortDescription: 'An American Artist living and working in New York',
        longDescription: 'Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo',
    },

    {
        name: 'Brook Hsu',
        shortDescription: 'A Taiwanese-American artist with recent solo exhibitions',
        longDescription: 'Brook\'s abstract and figurative works are rife with symbolism serving as mysterious dreamlike mirrors of reality',
    },

    {
        name: 'Haley Josephs',
        shortDescription: 'A painter of mystical and vibrant imagery',
        longDescription: 'Joseph\'s paintings use bold colors and dream-like imagery to explore themes of feminity and mortality',
    },

    {
        name: 'Sarah Zapata',
        shortDescription: 'A Peruvian-American fabric artist',
        longDescription: 'Zapata creates technicolored handwoven sculptures that draw on Peruvian weaving techniques',
    },

    {
        name: 'Derek Weisberg',
        shortDescription: 'Participated in over 90 shows in the last 8 years',
        longDescription: 'Based in Oakland Carlifonia, Derek is a figurative artist whose sculptures are viscerally human',
    },

    {
        name: 'Elizabeth Englander',
        shortDescription: 'An American post war and contemporary artist',
        longDescription: 'Numerous key galleries and museums such as LOMEX have featured Elizabeth\'s work in the past',
    }
]

featuredSpeakers.innerHTML = `
<div class="program-div">
            <h2 class="speakers-header">Featured Speakers</h2>
            <div class="line-break"></div>
        </div>
        <section class="all-speakers">
            <div class="speaker-details">
                <div class="speaker-image">
                    <img 
                        src="./img/220504_kturner01.jpg"
                        alt="Khari Turner"
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
                        src="./img/BrookHsu.jpg"
                        alt="Brook Hsu"
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
                        src="./img/Haley-Josephs.jpg"
                        alt="Haley Josephs"
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
                        src="./img/sarahzapataportrait_copy.jpg"
                        alt="Sarah Zapata"
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
                        src="./img/Derek-Webpage.jpg"
                        alt="Derek Weisberg"
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
                        src="./img/Englander004RGBTall.jpg"
                        alt="Elizabeth Englander"
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
`

const speakerDetails = document.querySelectorAll('.speaker-details');
const speakerHeader = document.querySelectorAll('.article-items h3');
const speakerShortDesc = document.querySelectorAll('.article-items h4');
const speakerLongDesc = document.querySelectorAll('.article-items p');
const speakerButton = document.querySelector('.speakers-button');

for (let i = 0; i < speakerDetails.length; i++) {
    speakerHeader[i].textContent = speakerInfo[i].name;
    speakerShortDesc[i].textContent = speakerInfo[i].shortDescription;
    speakerLongDesc[i].textContent = speakerInfo[i].longDescription;
}

speakerButton.addEventListener('click', () => {
    for (let i = 2; i < speakerDetails.length; i++){
        speakerDetails[i].classList.toggle('hide-speaker');
    }

    if (speakerButton.innerHTML === `MORE <span><i class="fa-solid fa-chevron-down"></i></span>`) {
        speakerButton.innerHTML = `LESS <span><i class="fa-solid fa-chevron-up"></i></span>`
    } else if (speakerButton.innerHTML === `LESS <span><i class="fa-solid fa-chevron-up"></i></span>`) {
        speakerButton.innerHTML = `MORE <span><i class="fa-solid fa-chevron-down"></i></span>`
    }
})