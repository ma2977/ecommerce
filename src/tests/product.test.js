const User = require("../models/User");
const request = require('supertest');
const app = require('../app');
const usersData = require("./data/usersData");

// let initialUsers;

// beforeEach(async() => {
//     await User.truncate({ cascade: true });
//     initialUsers = await User.bulkCreate(usersData);
// })
beforeAll(async () => {
    const res = await request(app).post('/products').send({
        email:'testuser@gmail.com',
        password: 'testuser',
    });
    token = res.body.token;
})

test("GET /products", async() => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});



test("POST /products", async() => {
    const body= {
        title: "TV",
        description:"Flat screen", 
        categoryId: "A23B32",
        brand: "Samsung",
        price: "$1234"
    }

    const res = await request(app)
    .post('/products')
    .send(products);
   expect(res.status).toBe(201);
   expect(res.body.token).toBeDefined();
});

// test("PUT /users/:id should update an user", async () => {
//     const user = {
//         firstName: "Johnny updated",
//     }
//     // const id = initialUsers[0].id;
//     // await request(app).put(`/api/v1/users/${id}`).send(update);
//     const res = await request(app).put(`/users/${id}`).send(user);
//     expect(res.status).toBe(200);
//     expect(res.body.firstName).toBe(user.firstName)
// });


//    test("POST /users/login credenciales incorrectas" , async() => {
//     const body= {
//         email: "incorrecto@gmail.com",
//         password: "incorrecto123",
//     }
//     const res = await request(app).post('/users/login').send(body);
//    expect(res.status).toBe(200);
// });

// test("DELETE /users/:id should delete an user", async () => {
//     // const id = initialUsers[0].id;
//     // await request(app).delete(`/api/v1/users/${id}`);
//     const res = await request(app).delete(`/users/${id}`);
//     expect(res.status).toBe(204);
// });

//     const user = {
//         firstName: "John",
//         lastName: "Doe",
//         email: "John123@gmail.com",
//         password: "JohnDoe123",
//         phone: "123-345-9876"
//     }
//     const res = await request(app).post('/users').send(user);
//     id = res.body.id;
//     expect(res.status).toBe(201);
//     expect(res.body.id).toBeDefined();
//     expect(res.body.firstName).toBe(user.firstName);
//     expect(res.body.password).not.toBe(user.password);
// });




