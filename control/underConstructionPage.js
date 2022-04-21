'use strict'

const 
socialMediaPageLinks = document.querySelectorAll('.social-icon'),
underConstructionPageMessage = document.querySelector('#under_construction_page_message'),
main = document.querySelector('#main'),
constructionPageToContactPageLink =  document.querySelector('#construction_page_to_contact_page_link'),
homePage = document.querySelector('#home_page'),
contactPage = document.querySelector('#contact_page')

for(let link of socialMediaPageLinks){
    link.addEventListener('click', ()=> {
        main.classList.remove('show')
        main.classList.add('hide')
        underConstructionPageMessage.classList.remove('hide')
        underConstructionPageMessage.classList.add('show')
    })
}

//reroute to contact page
constructionPageToContactPageLink.addEventListener('click', ()=> {
    underConstructionPageMessage.classList.remove('show')
    underConstructionPageMessage.classList.add('hide')
    main.classList.add('show')
    main.classList.remove('hide')
    homePage.style.display = 'none'
    contactPage.classList.add('show')
})