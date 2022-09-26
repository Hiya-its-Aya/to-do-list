
const inbox = document.querySelector("#inbox")

let projList = [inbox]

// create an overall ui system that adds projects and newlist
const handleProj = () => {  
  
  // get all of our relavent quereies
  const mainProjContainer = document.querySelector("#proj-container");
  const addProjContainer = document.querySelector(".add-proj-container");
  const createProj = document.querySelector("#create-proj");
  const addProjButton = document.querySelector("#add-project")
  const createdProjects = document.querySelector("#created-projects");
  

  // when add project button is clicked, button display is off and new project prompt display is off
  
  addProjButton.addEventListener("click", ()=>{
    addProjButton.style.display = "none"
    createProj.style.display = "flex"
    handlePrompButtons()
  })
   
  const handlePrompButtons = () =>{
    document.querySelector("#add-proj-button").addEventListener("submit", (e)=>{
      e.preventDefault();
      const newProj = document.createElement("button");
      const name = document.querySelector("#proj-name");
      newProj.className = "project"
      newProj.id = name.value; 
      console.log(newProj);
      
    })
  }
}

handleProj();

const mainContainer = document.querySelector("#container");
const titleContainer = document.querySelector("#proj-title");
const listContainer = document.querySelector("#list-main-container");


