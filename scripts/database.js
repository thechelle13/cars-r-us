// create database include data from book module

const database = {
    // Customer should be able to choose one of the following paint colors. You set the price for each one.
    paints: [
        { id: 1, paint: "Silver", price: 100},
        { id: 2, paint: "Midnight Blue", price: 200},
        { id: 3, paint: "Firebrick Red", price: 300},
        { id: 4, paint: "Spring Green", price: 400}
    ],
    // Customer can choose from the follow options for interior seat types. You set the price for each one.
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 300},
        { id: 2, interior: "Charcoal Fabric", price: 300},
        { id: 3, interior: "White Leather", price: 300},
        { id: 4, interior: "Black Leather", price: 300}
    ],
    // Customer can choose from the follow options for wheels. You set the price for each one.
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 300 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 300 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 300 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 300 }
        ],
        // Customer can choose from the follow options for the tech capabilities of the car dashboard. You set the price for each one.
    technologies: [
        { id: 1, technology: "Basic Package (basic sound system)", price: 300},
        { id: 2, technology: "Navigation Package ( includes intergrated navigation controls)", price: 300},
        { id: 3, technology: "Visibility Package ( includes side and rear cameras)", price: 300},
        { id: 4, technology: "Ultra Package (includes the Navigation and Visibility packages)", price: 300}
        ],
        customOrders: [
            {
                id: 1,
                interiorId: 4,
                paintId: 4,
                wheelId: 4,
                technologyId: 4
            }
        ]
}

// go to the database module and start setting up your data structures for each resource. Also set up the get*()functions for each collection of customizations so that other modules can import the data and convert it to HTML.

//create export const using get...getPaints for use in other corsponding js modules. 

// create export set functions setPaints 

//  Use .map() instead of for of loop to connect <select> elements - for drop down controls

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const setInterniors = (id) => {
    database.orderBuilder.interiorId = id
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// export const getCurrentOrder = () => {
//     return database.orderBuilder
// }

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}