import { toDate, isToday, isThisWeek, subDays, format } from "date-fns";
import image from "./img/x-symbol.svg";

//make inbox for tasks
// add ui for adding tasks
const page = (name, lowercase, selector) =>{
    
  const makeTitle = () => {
      const container = document.querySelector("#container");
      container.replaceChildren("");
      const h2 = document.createElement("h2");
      h2.textContent = name;
      const newContainer = document.createElement("div");
      newContainer.id = lowercase + "-content";
      container.appendChild(h2);
      container.appendChild(newContainer);
      if (selector.id === "inbox" ||  selector.id === "new-project"){
        handleAddItemButton(newContainer);
      }
    };
    const handleAddItemButton = (container) =>{
      const addItemButton = document.createElement("button");
      addItemButton.setAttribute("id","add-list-item");
      addItemButton.textContent ="Add List Item";
      container.appendChild(addItemButton);
      const list = ListItems(name, container, addItemButton)
      addItemButton.addEventListener("click", ()=>{
        list.makeItem();
      })
    }
      
  return{name, lowercase, selector, makeTitle, handleRemoveButton}
}
// --------------------------------------Project------------------------------//
const Project = (addProj) => {
  const newProjPrompt = () => {
    const newProj = document.querySelector("#project-container");
    addProj.remove();
    const prompt = document.createElement("div");
    prompt.className = "new-proj-prompt";
    prompt.innerHTML += `
            <input type="text" id="proj-name" name="proj-name" required>
            <button type="submit" id = "add-proj">Add</button>
            <button id = "cancel-proj">Cancel</button>
        `;
    newProj.append(prompt);
    newProjButtons();
  }

  const newProjButtons = () => {
    const addProj = document.querySelector("#add-proj");
    const cancelProj = document.querySelector("#cancel-proj");
    const projName = document.querySelector("#proj-name");

    addProj.addEventListener("click", () => {
      handleAdd(projName.value);
      replaceProj();
    });
    // addProj.addEventListener("keypress",function (e){
    //     if (e.key === 'Enter'){
    //         this.handleAdd(projName.value);
    //     }
    // })
    cancelProj.addEventListener("click", () => {
      replaceProj();
    });
  }
  const replaceProj = () => {
    const projPrompt = document.querySelector(".new-proj-prompt");
    const container = document.querySelector("#project-container");
    const newProjButton = document.createElement("button");
    newProjButton.className = "add";
    newProjButton.setAttribute("id", "add-project");
    newProjButton.textContent = "Add Project";
    container.appendChild(newProjButton);
    projPrompt.remove();
    newProjButton.addEventListener("click", () => {
      newProjPrompt();
    });
  }

  const handleAdd = (name) => {
    const newProj = document.querySelector("#project-container");
    const projItem = document.createElement("button");
    projItem.setAttribute("id", "new-project");
    projItem.innerHTML = name;
    

    newProj.appendChild(projItem);

    const projpg = page(name, name.toLowerCase(), projItem.id);
    projpg.makeTitle();

    projItem.addEventListener("click", () => {
      projpg.makeTitle();
    });

    handleRemoveButton(projItem);
  }
  return{addProj, newProjButtons, replaceProj, newProjPrompt, handleAdd}
}

//-------------------------------list-------------------------------------//
const ListItems = (name,container, addItem) =>  {
  const makeItem = () => {
    const newItemPrompt = () => {
      
      const prompt = document.createElement("div");
      prompt.className = "new-item-prompt";
      prompt.innerHTML += `
              <form>
                <input type="text" id="item-name" name="item-name" required>
                <input type="date" id="item-due-date" required>
                <label for="item-due-date">Due Date</label> 
                <button type="submit" id = "add-item">Add</button>
                <button id = "cancel-item">Cancel</button>
              </form>
          `;
      container.append(prompt);
      newItemButtons(prompt);
    }
  
    const newItemButtons = (prompt) => {
      const addItembtn = document.querySelector("#add-item");
      const cancelItem = document.querySelector("#cancel-item");
      const itemName = document.querySelector("#item-name");
      const date = document.querySelector("#item-due-date")
  
      addItembtn.addEventListener("click", () => {
        handleAdd(itemName.value);
        replaceItem(prompt);
      });
      // addProj.addEventListener("keypress",function (e){
      //     if (e.key === 'Enter'){
      //         this.handleAdd(projName.value);
      //     }
      // })
      cancelItem.addEventListener("click", () => {
        replaceItem(prompt);
      });
    }
    const replaceItem = (prompt) => {
      const newItem = document.createElement("button");
      newItem.className = "add";
      newItem.setAttribute("id", "add-list-item");
      newItem.textContent = "Add List Item";
      container.appendChild(newItem);
      prompt.remove();
      newItem.addEventListener("click", () => {
        newItemPrompt();
      });
    }
  
    const handleAdd = (name) => {
      const item = document.createElement("button");
      item.setAttribute("id", "new-item");
      item.textContent = name;
      
      container.appendChild(item);
  
      handleRemoveButton(item);
    }
    newItemPrompt(); 
    return{newItemPrompt,  newItemButtons, replaceItem, handleAdd}
  }

  const sortItem = () =>{
 
  }
  const deleteItem = () =>{}
  
  // archiveItem(){

  // }
  return{makeItem, sortItem, deleteItem}
}

const inboxList = ListItems("inbox", document.querySelector("#inbox-content"));
// const projList = p;

function handleRemoveButton(btn) {
  const remove = document.createElement("img");
  remove.src = image;
  remove.setAttribute("id", "remove-image");
  btn.addEventListener("focus", () => {
    btn.appendChild(remove);
  });

  btn.addEventListener("blur", () => {
    btn.removeChild(remove);
  });

  remove.addEventListener("click", () => {
    removeItem(btn);
  });
}

function removeItem(btn) {
  btn.remove();
}

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const thisWeek = document.querySelector("#this-week");
const archived = document.querySelector("#archived");

const inboxpg = page("Inbox", "inbox", inbox);
const todaypg = page("Today", "today", today);
const thisWeekpg =page("This Week", "this-week", thisWeek);
const archivedpg = page("Archived", "archive", archived);

inbox.addEventListener("click", () => {
  inboxpg.makeTitle();
});
today.addEventListener("click", () => {
  todaypg.makeTitle();
});
thisWeek.addEventListener("click", () => {
  thisWeekpg.makeTitle();
});
// archived.addEventListener("click", () => {
//   archivedpg.makeTitle();
// });

const addProject = document.querySelector("#add-project");
const addProjpg = Project(addProject);
addProject.addEventListener("click", () => {
  addProjpg.newProjPrompt();
});

