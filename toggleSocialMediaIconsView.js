'use strict'

const 
calculatedSocialMediaIconsBoundingClientRect = 895, //from document.querySelectorAll('.social-icon').forEach(el => console.log(el.getBoundingClientRect().top))
mostBottomElements = document.querySelectorAll('.most_bottom_els'),
socialMediaIcons =  document.querySelector('#social_media_icons')

document.addEventListener(
    'scroll',
    ()=> {
        if(document.body.getBoundingClientRect().bottom > calculatedSocialMediaIconsBoundingClientRect){
            socialMediaIcons.style.display = 'none'
        }else{
            socialMediaIcons.style.display = 'block'
        }
    }
)