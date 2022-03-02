'use strict'

const 
sourceForJobs = document.querySelector('#general_jobs_template').innerHTML,
templateForJobs = Handlebars.compile(sourceForJobs)

const generalJobs= {
    jobs: [
        {
            title: 'registered general nurse',
            abbr: 'rgn', 
            duties: []
        },
        {
            title: 'registered mental nurse',
            abbr: 'rmn',  
            duties: []
        },
        {
            title: 'registered nurse with learning disability',
            abbr: 'rnld',  
            duties: []
        },
        {
            title: 'advanced nurse practitioner',
            abbr: 'anp',  
            duties: []
        },
        {
            title: 'reg child nurse',
            abbr: 'rcn',  
            duties: []
        },
        {
            title: 'operating department practitioner',
            abbr: 'odp',  
            duties: ['works with anaesthetist']
        },
        {
            title: 'scrub',
            abbr: '',  
            duties: ['works with surgeons', 'theatre duties']
        },
        {
            title: 'health care assistance (band 2,3,4)',
            abbr: 'hca',  
            duties: []
        },
        {
            title: 'case support workers',
            abbr: 'csw',  
            duties: []
        }
    ]
}

document.querySelector('#general_jobs').innerHTML = templateForJobs(generalJobs)