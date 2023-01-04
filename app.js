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
                        <h3>Khari Turner</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
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
                        <h3>Brook Hsu</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
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
                        <h3>Haley Josephs</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
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
                        <h3>Sarah Zapata</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
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
                        <h3>Derek Weisberg</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
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
                        <h3>Elizabeth Englander</h3>
                        <h4>An American Artist living and working in New York</h4>
                        <div></div>
                        <p>Khari is a well reknowned artist with two sold out shows at both Ross-sutton gallery and Frevo</p>
                    </article>
                </div>
            </div>

            <button class="speakers-button">MORE <span><i class="fa-solid fa-chevron-down"></i></span></button>
        </section>
`

const speakerDetails = document.querySelectorAll('.speaker-details');
const speakerButton = document.querySelector('.speakers-button');

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