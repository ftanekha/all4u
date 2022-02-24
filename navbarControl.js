const 
links = document.querySelectorAll('.nav_link'),
pages = document.querySelectorAll('.page'),
logo = document.querySelector('#company_logo')

for(let link of links) link.addEventListener(
    'click', ()=> {
        //hide other pages
        for (let page of pages) page.style.display = 'none'
        //display only corresponding link
        document.querySelector(`#${link.id}_page`).style.display = 'block' 
        
    }
)

//logo returns to landing page
logo.addEventListener('click', ()=> {
    for (let page of pages) page.style.display = 'none'
    document.querySelector(`#landing_page`).style.display = 'block' 
})