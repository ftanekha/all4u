'use strict'

const missionStatementLinks = document.querySelectorAll('.mission_statement_links')

for(let missionStatementLink of missionStatementLinks){
    missionStatementLink.addEventListener('click',
        ()=>{
            //turn of jos page
            document.querySelector('#jobs_page').style.display = 'none'
            //navigate to mission statement page
            document.querySelector('#home_page').style.display = 'block'
        }
    )
}
