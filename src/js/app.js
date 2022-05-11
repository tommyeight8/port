// import {sendEmail} from './functions/sendEmail'

const sections = document.querySelectorAll('.section')
// const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
// const allSections = document.querySelector('.main-content')

const form = document.querySelector('.contact-form')
const mainBtn = document.querySelector('.main-btn')

const navigationItem = document.querySelectorAll('.navigation__item')
const navCheckBox = document.querySelector('.navigation__checkbox')

const ary = Array.from(navigationItem)


ary.map(it => {
    return it.addEventListener('click', (e) => {
        const id = e.target.closest('.navigation__item').dataset.id
        
        if(id) {
                // Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })

                const selectedSec = document.getElementById(id)
                selectedSec.classList.add('active')
            }

        navCheckBox.checked = false
    })
})

mainBtn.addEventListener('click', (e) => {
    console.log('Clicked')
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    console.log('submitted');
})

// console.log(sectBtns);
// sectBtns.forEach(sec => console.log(sec))

function pageTransition() {
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(e) {
            let allBtns = document.querySelectorAll('.active-btn')
            allBtns[0].classList.remove('active-btn')
            // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.classList.add('active-btn')

            const id = e.target.dataset.id
            if(id) {
                // Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })

                const selectedSec = document.getElementById(id)
                selectedSec.classList.add('active')
            }
        })
    }

    // Testing

    // Sections active class
    // allSections.addEventListener('click', function(e) {
    //     const id = e.target.dataset.id
    //     if(id) {
    //         // Remove selected from the other buttons
    //         sectBtns.forEach((btn) => {
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         // Hide other sections
    //         sections.forEach((section) => {
    //             section.classList.remove('active')
    //         })

    //         const element = document.getElementById(id)
    //         element.classList.add('active')
    //     }
    // })
}

pageTransition()