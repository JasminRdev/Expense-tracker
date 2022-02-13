window.addEventListener("load", () => {
    const form = document.querySelector("#new-item-form");

    const inputName = document.querySelector("#item-name-input");
    const inputDate = document.querySelector("#item-date-input");
    const inputAmount = document.querySelector("#item-amount-input");

    const cons_item = document.querySelector("#items");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const valueName = inputName.value;
        const valueDate = inputDate.value;
        const valueAmount = inputAmount.value;

        if(!valueAmount) {
            alert("Please fill out the amount");
        } else {
         
            //create div for all
            const container = document.createElement("div");
            container.classList.add("container");

    //create input of name
  const item_input_name = document.createElement("input");
        item_input_name.classList.add("new-name");
        item_input_name.type="text";
        item_input_name.value = valueName;
        item_input_name.setAttribute("readonly", "readonly")

     //add child of name in layout class
        container.appendChild(item_input_name);
        
    //append all containers in the item class
    cons_item.appendChild(container);

    //create input of date
    const item_input_date = document.createElement("input");
        item_input_date.classList.add("new-date");
        item_input_date.type="text";
        item_input_date.value = valueDate;
        item_input_date.setAttribute("readonly", "readonly")
    //add child of date in layout class
        container.appendChild(item_input_date);

    //create input of amount
    const item_input_amount = document.createElement("input");
        item_input_amount.classList.add("new-amount");
        item_input_amount.type="number";
        item_input_amount.any ="any";
        item_input_amount.value = valueAmount;
        item_input_amount.setAttribute("readonly", "readonly")
    //add child of amount in layout class
        container.appendChild(item_input_amount);

//create div buttons
    const item_actions_el = document.createElement("div");
    item_actions_el.classList.add("actions");

//c buttons
    const item_edit_el = document.createElement("button");
    item_edit_el.classList.add("edit");
    item_edit_el.innerHTML = "Edit";

    const item_delete_el = document.createElement("button");
    item_delete_el.classList.add("delete");
    item_delete_el.innerHTML = "Delete";


//append both to div of actions class
    item_actions_el.appendChild(item_edit_el);
    item_actions_el.appendChild(item_delete_el);

    container.appendChild(item_actions_el);



    //edit button func
    item_edit_el.addEventListener("click", ()=> {
        if(item_edit_el.innerHTML.toLocaleLowerCase() == "edit"){
            item_input_name.removeAttribute("readonly");
            item_input_name.focus();
            item_input_date.removeAttribute("readonly");
            item_input_date.focus();
            item_input_amount.removeAttribute("readonly");
            item_input_amount.focus();
            item_edit_el.innerHTML = "Save";
        } else {
            item_input_name.setAttribute("readonly", "readonly");
            item_input_date.setAttribute("readonly", "readonly");
            item_input_amount.setAttribute("readonly", "readonly");
            item_edit_el.innerHTML = "Edit";
        }
    });



    //delete func
 item_delete_el.addEventListener("click", () => {
    container.remove();
 });
}



form.reset();
    });
});