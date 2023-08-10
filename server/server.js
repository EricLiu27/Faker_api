const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express()

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            Country: faker.location.country(),
        }
    }
    return newCompany
}


const brandNewPerson = createUser()
const brandNewCompany = createCompany()
//routes
app.get('/api/users/new', (req, res) => {
    res.json(brandNewPerson)
})

const Company = createCompany()
app.get('/api/companies/new', (req, res) => {
    res.json(brandNewCompany)
})


app.get("/api/user/company", (req, res) => {
    res.json({ brandNewCompany, brandNewPerson })
})


app.listen(8000, () => console.log(`listening on port: 8000`))
