import { getOrders, getWheels, getInteriors, getPaints, getTechnologies } from "./database.js"

const buildOrderListItem = (order) => {
    
    const wheels = getWheels()
    const foundWheel = wheels.find ( (wheel) => {
        return wheel.id === order.wheelId
    })

    const paints = getPaints()
    const foundPaint = paints.find ( (paint) => {
        return paint.id === order.paintId
    } )

    const interiors = getInteriors()
    const foundInterior = interiors.find ( (interior) => {
        return interior.id === order.interiorId
    } )

    const technologies = getTechnologies()
    const foundTechnology = technologies.find ( (technology) => {
        return technology.id === order.technologyId
    } )

    const totalCost = foundWheel.price + foundInterior.price + foundPaint.price + foundTechnology.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)
    
    html += listItems.join("")
    html += "</ul>"

    return html
}