import { Wheels } from "./wheels.js"
import { Interiors } from "./interiors.js"
import { Paints } from "./paints.js"
import { Technologies } from "./technologies.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"

// invoke 
// HTML
// event listener with click not change

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "order") {
            addCustomOrder()
            
        }
    }
)

export const CarsRus = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__paints options">
                <h2>Paint</h2>
                ${Paints()}
            </section>
            <section class="choices__technologies options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="order">Create Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Car Add-On Options</h2>        
                ${Orders()}
        </article>
    `
}