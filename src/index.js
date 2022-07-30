import { toDate, isToday, isThisWeel, subDays, format } from 'date-fns';
import image from "./img/x-symbol.svg"

//make inbox for tasks 
// add ui for adding tasks         

class Page{
    constructor(name, lowercase, selector){
        this.name = name;
        this.lowercase = lowercase;
        this.selector = selector;
    }
    makeTitle(){
        const container = document.querySelector("#container");
        container.replaceChildren("")
        const h2 = document.createElement("h2");
        h2.textContent = this.name;
        const newContainer = document.createElement("div")
        newContainer.id = this.lowercase +"-content"
        container.appendChild(h2);
        container.appendChild(newContainer);
    }
    addRemoveBtn(){
        handleRemoveButton(this.selector)
    }

}

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const thisWeek = document.querySelector("#this-week");
const archived = document.querySelector("#archived");

const inboxpg = new Page("Inbox", "inbox", inbox);
const todaypg = new Page("Today", "today", today);
const thisWeekpg = new Page("This Week", "this-week", thisWeek);
const archivedpg = new Page("Archived","archive", archived);

const pgArray = [inboxpg, todaypg, thisWeekpg, archivedpg]

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
        const addProj = document.querySelector("#add-project")
        addProj.remove();
        const prompt = document.createElement("div");
        prompt.className = "new-proj-prompt"
        prompt.innerHTML += `
            <input type="text" id="proj-name" name="proj-name" required>
            <button type="submit" id = "add-proj">Add</button>
            <button id = "cancel-proj">Cancel</button>
        `
        newProj.append(prompt);
        this.newProjButtons();
    }

    newProjButtons(){
        const addProj = document.querySelector('#add-proj');
        const cancelProj = document.querySelector("#cancel-proj");
        const projName = document.querySelector("#proj-name")

        addProj.addEventListener("click", () => {
            this.handleAdd(projName.value);
            this.replaceProj();
        })
        // addProj.addEventListener("keypress",function (e){
        //     if (e.key === 'Enter'){
        //         this.handleAdd(projName.value);
        //     }   
        // })
        cancelProj.addEventListener("click", () => {
            this.replaceProj();
        })
    }
    replaceProj(){
        const projPrompt= document.querySelector(".new-proj-prompt");
        const container = document.querySelector("#project-container");
        const newProjButton = document.createElement("button")
        newProjButton.className = "add";
        newProjButton.setAttribute("id", "add-project");
        newProjButton.textContent = "Add Project"
        container.appendChild(newProjButton);
        projPrompt.remove()
        newProjButton.addEventListener("click", ()=>{
            this.newProjPrompt();
        })
    }   

    handleAdd(name){
        const newProj= document.querySelector("#project-container");
        const projItem = document.createElement("button");
        projItem.setAttribute("id", "new-project")
        projItem.innerHTML = name 
       
        newProj.appendChild(projItem);
        
        const projpg = new Page(name);
        projpg.makeTitle();

        projItem.addEventListener("click", ()=>{
            projpg.makeTitle();
        })

        handleRemoveButton(projItem);
    }
}

class ListItems{

    makeItem(){
        const container = document.querySelector("#inbox-main-container");
        
    }
    sortItem(){

    }
    deleteItem(){

    }
    // archiveItem(){

    // }
}

function handleRemoveButton(btn){
    const remove = document.createElement("img");
    remove.src =  image;
    remove.setAttribute("id","remove-image");
    btn.addEventListener("focus",()=>{
        btn.appendChild(remove);
    });
    
    btn.addEventListener("blur", ()=>{
        btn.removeChild(remove);
    });

    remove.addEventListener("click", ()=>{removeItem(btn)})

}

function removeItem(btn){
    btn.remove()
}