const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })}
if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')

        })
}

      const navLink = document.querySelectorAll('.nav__link')

      const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')

      }
navLink.forEach(n =>n.addEventListener('click', linkAction))

//   ------------Adding Blur to Header---------------------------

const blurheader = ()=>{
const header = document.getElementById('header')
// When the scroll is greater than 50 viewport height, add the scroll- header class to it
        this.scrollY >= 70 ? header.classList.add('blur-header')
                           :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurheader)
// --------------------Email--------------


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
      e.preventDefault()

      //service ID - templateID - #form - publicKey
      emailjs.sendForm('service_g1tgmpu','template_wdbtyio','#contact-form','f-jvcc1Ssf8Py9BV2')
        .then(() =>{
          // show message 
          contactMessage.textContent = 'Message sent successfully ✅'
          setTimeout(()=>{
            contactMessage.textContent = ' '
          },5000)
          
        },()=>{
          //Show Error message
          contactMessage.textContent = 'Message not sent (service error)❌ '
        })

    }
    contactForm.addEventListener('submit',sendEmail)

const scrollUp = ()=>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY>=350 ? scrollUp.classList.add('show-scroll')
                :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollActive)

// Scroll reveal animation

const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration:2500,
  delay:400,
  reset:true
})

sr.reveal()


