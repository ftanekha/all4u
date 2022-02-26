const 
links = document.querySelectorAll('.nav_link'),
pages = document.querySelectorAll('.page'),
logo = document.querySelector('#company_logo')

for(let link of links) link.addEventListener(
    'click', ()=> {
        //initially, hide all pages
        for (let page of pages) page.style.display = 'none'
        //hide copyright info on registration page
        if(link.id === 'registration') {
            document.querySelector('#copyright_info').style.visibility = 'hidden'
        }else{
            document.querySelector('#copyright_info').style.visibility = 'visible'
        }
        //display only corresponding link
        document.querySelector(`#${link.id}_page`).style.display = 'block' 
    }
)

//logo returns to landing page
logo.addEventListener('click', ()=> {
    for (let page of pages) page.style.display = 'none'
    document.querySelector(`#home_page`).style.display = 'block' 
})