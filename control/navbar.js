'use strict'

const 
source = document.querySelector('#navbar_template').innerHTML,
template = Handlebars.compile(source),

navItems = ['home', 'about', 'jobs', 'registration', 'contact'],
context = {
    nav: []
}
for(let item of navItems) context.nav.push({id: item, href: `#${item}`})
//hide registration till database sorted
// for(let item of navItems.filter(page => page !== 'registration')) context.nav.push({id: item, href: `#${item}`})
document.querySelector('#navbar').innerHTML = template(context)