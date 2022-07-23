
    //make inbox for tasks 
    // add ui for adding tasks         
    
class Page{
    constructor(name, selector){
        this.name = name;
        this.selector = selector;
    }
    makePage(){
        const container = document.querySelector("#container");
        const h2 = document.createElement("h2");
        h2.textContent = this.name;
        container.appendChild(h2);
    }
    pgButton(){
        let select = this.selector;
        select.setAttribute = ".active"
    }
}

const inbox = document.querySelector("#inbox");
const inboxpg = new Page("Inbox");
const todaypg = new Page("Today");
const thisWeekpg = new Page("This Week")

inbox.addEventListener("click", () =>{inboxpg.makePage();})

    //put items in today or this week

    // make projeccts tab, and add projects and put accordingly

//handleProjects 
//handle

