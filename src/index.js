import { toDate, isToday, isThisWeel, subDays, format } from 'date-fns'

(()=>{


    //make inbox for tasks 
    // add ui for adding tasks         
    
    class Page{
        constructor(name){
            this.name = name;
        }
        makeTitle(){
            const container = document.querySelector("#container");
            container.replaceChildren("")
            const h2 = document.createElement("h2");
            h2.textContent = this.name;
            container.appendChild(h2);
        }
        handleInbox(){

        }
    }

    const inbox = document.querySelector("#inbox");
    const today = document.querySelector("#today");
    const thisWeek = document.querySelector("#this-week");
    const archived = document.querySelector("#archived");

    const inboxpg = new Page("Inbox");
    const todaypg = new Page("Today");
    const thisWeekpg = new Page("This Week");
    const archivedpg = new Page("Archived");

    inbox.addEventListener("click", () =>{
        inboxpg.makeTitle();
    })
    today.addEventListener("click", () =>{
        todaypg.makeTitle();
    })
    thisWeek.addEventListener("click", () =>{
        thisWeekpg.makeTitle();
    })
    archived.addEventListener("click", () =>{
        archivedpg.makeTitle();
    });

    const addProject = document.querySelector("#add-project")
    const addProjpg = new Project()
    addProject.addEventListener("click", ()=>{
        addProjpg.newProjPrompt();
    })

    class Project{

        newProjPrompt(){
            const newProj= document.querySelector("#project-container")
            newProj.replaceChildren("")
            newProj.innerHTML += `
            <input type="text" id="proj-name" name="proj-name">
            <button id = "add-proj">Add</button>
            <button id = "cancel-proj">Cancel</button>
            `
            newProj.append();
            this.newProjButtons();
        }

        newProjButtons(){
            const addProj = document.querySelector('#add-proj');
            const cancelProj = document.querySelector("#cancel-proj");
            const projName = document.querySelector("#proj-name")
            addProj.addEventListener("click", () => {
                this.handleAdd(projName.value);
                // this.replaceProj()
            })
            // cancelProj.addEventListener("click", this.replaceProj())
        }
        // replaceProj(){
        //     const newProj= document.querySelector("#project-container");
        //     newProj.replaceChildren("")
        // }
        handleAdd(name){
            const newProj= document.querySelector("#project-container");
            const projItem = document.createElement("button");
            projItem.textContent = name;
            newProj.appendChild(projItem);
            
            const projpg = new Page(name);
            projpg.makeTitle();
        }

    }

    class ListItems{

    }

//put items in today or this week

    // make projeccts tab, and add projects and put accordingly

//handleProjects 
//handle
})()
