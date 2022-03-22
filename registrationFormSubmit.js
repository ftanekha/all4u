'use strict'

const
registrationPage = document.querySelector('#registration_page'),
registrationSubmitButton = document.querySelector('#candidate_registration_form_submit_button'),
spinner = document.querySelector('#registration_confirmation_loading'),
confirmationMessage = document.querySelector('#registration_confirmation_message')

registrationSubmitButton.addEventListener(
    'click', ev => {
        ev.preventDefault()

        registrationPage.style.display = 'none'
        spinner.style.display = 'block'

        const 
        showSpinner = setInterval(
            ()=> spinner.style.display = 'none', 5e3
        ),
        showConfirmationMessage = setTimeout(
            ()=> {
                clearInterval(showSpinner)
                confirmationMessage.style.display = 'block'
            }, 5e3
        ),
        returnToHomePage = setTimeout(
            ()=>{
                confirmationMessage.style.display = 'none'
                clearTimeout(showConfirmationMessage)
                clearTimeout(returnToHomePage)
                registrationPage.style.display = 'block'
            }, 1.5e4
        )
    }
)