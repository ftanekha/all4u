'use strict'

const 
source = document.querySelector('#navbar_template').innerHTML,
template = Handlebars.compile(source),

navItems = ['about', 'registration', 'jobs', 'contact'],
context = {
    nav: []
}

for(let item of navItems) context.nav.push({id: item, href: `#${item}`})
context.nav[3].href = './contact.html'

document.querySelector('#navbar').innerHTML = template(context)