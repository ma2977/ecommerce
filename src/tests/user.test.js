const User = require("../models/User");
const request = require('supertest');
const app = require('../app');
const usersData = require("./data/usersData");

// let initialUsers;

// beforeEach(async() => {
//     await User.truncate({ cascade: true });
//     initialUsers = await User.bulkCreate(usersData);
// })

test("GET /users should return 2 users", async() => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test("PUT /users/:id should update an user", async () => {
    const user = {
        firstName: "Johnny updated",
    }
    // const id = initialUsers[0].id;
    // await request(app).put(`/api/v1/users/${id}`).send(update);
    const res = await request(app).put(`/users/${id}`).send(user);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(user.firstName)
});

test("POST /users/login", async() => {
    const body= {
        email: "mari123@gmail.com",
        password: "Mari123",
    }

    const res = await request(app).post('/users/login').send(body);
   expect(res.status).toBe(200);
   expect(res.body.token).toBeDefined();
});

   test("POST /users/login credenciales incorrectas" , async() => {
    const body= {
        email: "incorrecto@gmail.com",
        password: "incorrecto123",
    }
    const res = await request(app).post('/users/login').send(body);
   expect(res.status).toBe(200);
});

test("DELETE /users/:id should delete an user", async () => {
    // const id = initialUsers[0].id;
    // await request(app).delete(`/api/v1/users/${id}`);
    const res = await request(app).delete(`/users/${id}`);
    expect(res.status).toBe(204);
});

    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "John123@gmail.com",
        password: "JohnDoe123",
        phone: "123-345-9876"
    }
    const res = await request(app).post('/users').send(user);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(user.firstName);
    expect(res.body.password).not.toBe(user.password);
});




