// create database included in book module

const database = {
    
    paints: [
        { id: 1, paint: "Silver", price: 100},
        { id: 2, paint: "Midnight Blue", price: 200},
        { id: 3, paint: "Firebrick Red", price: 300},
        { id: 4, paint: "Spring Green", price: 400}
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 300},
        { id: 2, interior: "Charcoal Fabric", price: 300},
        { id: 3, interior: "White Leather", price: 300},
        { id: 4, interior: "Black Leather", price: 300}
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 300 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 300 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 300 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 300 }
        ],
    technologies: [
        { id: 1, technology: "Basic Package (basic sound system)", price: 300},
        { id: 2, technology: "Navigation Package ( includes intergrated navigation controls)", price: 300},
        { id: 3, technology: "Visibility Package ( includes side and rear cameras)", price: 300},
        { id: 4, technology: "Ultra Package (includes the Navigation and Visibility packages)", price: 300}
        ]
}
//create export const using get...getPaints for use in other corsponding js modules. 

// create export set functions setPaints 

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