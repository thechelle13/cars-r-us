// create import so can access array in database - invoke to use.

import { getWheels, setWheels } from "./database";

const wheels = getWheels()

// Use .map() for converting objects to <select> elements - for drop down controls

// generated radio buttons to allow customers to choose their option for each kind of resources, but in this project, you will be using <select> elements to create the dropdown controls.

/* <select id="resource">
    <option value="0">Prompt to select resource...</option>
    <option value="1">First option</option>
    <option value="2">Second option</option>
</select> */


// To get the option that the user selected, you would access the .value property of the <select> element, not the individual options.

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
    )
    



export const Wheels = () => {
    const customOrder = getCurrentOrder()
    // ${customOrder.metalId === metal.id ? "ch 
    let html = "<select>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}" /> ${wheel.wheel}
        </option>`
    }
    
    html += "</select>"

    return html
}