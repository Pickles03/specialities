const usersData = [ { id: 1, name: 'Alice', age: 28, specialty: 'marketing' }, { id: 2, name: 'Bob', age: 35, specialty: 'developers' }, { id: 3, name: 'Charlie', age: 30, specialty: 'developers' }, { id: 4, name: 'David', age: 25, specialty: 'QAs' }, { id: 5, name: 'Emma', age: 32, specialty: 'ventas' }, { id: 6, name: 'Frank', age: 28, specialty: 'marketing' }, { id: 7, name: 'Grace', age: 34, specialty: 'developers' }, { id: 8, name: 'Hank', age: 27, specialty: 'QAs' }, { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' }, { id: 10, name: 'Jack', age: 29, specialty: 'marketing' }, { id: 11, name: 'Karen', age: 36, specialty: 'developers' }, { id: 12, name: 'Leo', age: 26, specialty: 'QAs' }, { id: 13, name: 'Mia', age: 33, specialty: 'ventas' }, { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' }, { id: 15, name: 'Olivia', age: 37, specialty: 'developers' }, { id: 16, name: 'Paul', age: 24, specialty: 'QAs' }, { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' }, { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' }, { id: 19, name: 'Sara', age: 35, specialty: 'developers' }, { id: 20, name: 'Tom', age: 29, specialty: 'QAs' }, { id: 21, name: 'Uma', age: 30, specialty: 'ventas' }, { id: 22, name: 'Victor', age: 27, specialty: 'marketing' }, { id: 23, name: 'Wendy', age: 34, specialty: 'developers' }, { id: 24, name: 'Xander', age: 31, specialty: 'QAs' }, { id: 25, name: 'Yara', age: 33, specialty: 'ventas' }, { id: 26, name: 'Zack', age: 28, specialty: 'marketing' }, { id: 27, name: 'Ava', age: 36, specialty: 'developers' }, { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' }, { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' }, { id: 30, name: 'Derek', age: 30, specialty: 'marketing' }, ];

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the User API!</h1><a href="/users">View Users</a>');
});

app.get('/users', (req, res) => {
    res.send('<h1>Users</h1> <a href="/marketing">Marketing</a><br> <a href="/developers">Developers</a><br> <a href="/QAs">QAs</a><br> <a href="/ventas">Ventas</a><br> <a href="/">Home</a>');
});

app.get('/marketing', (req, res) => {
    const users = usersData.filter(user => user.specialty === 'marketing');

    const html = `
        <h1>Marketing Users: (${users.length})</h1>
        ${users.map(user => `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Specialty: ${user.specialty}</p>
            <br>`).join('')}
        <a href="/users">Back to Users</a>
    `;
    res.send(html);
});


app.get('/developers', (req, res) => {
    const users = usersData.filter(user => user.specialty === 'developers');

    const html = `
        <h1>Developers Users: (${users.length})</h1>
        ${users.map(user => `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Specialty: ${user.specialty}</p>
            <br>`).join('')}
        <a href="/users">Back to Users</a>
    `;
    res.send(html);
});

app.get('/QAs', (req, res) => {
    const users = usersData.filter(user => user.specialty === 'QAs');

    const html = `
        <h1>QAs Users: (${users.length})</h1>
        ${users.map(user => `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Specialty: ${user.specialty}</p>
            <br>`).join('')}
        <a href="/users">Back to Users</a>
    `;
    res.send(html);
});

app.get('/ventas', (req, res) => {
    const users = usersData.filter(user => user.specialty === 'ventas');

    const html = `
        <h1>Ventas Users: (${users.length})</h1>
        ${users.map(user => `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Specialty: ${user.specialty}</p>
            <br>`).join('')}
        <a href="/users">Back to Users</a>
    `;
    res.send(html);
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
    console.log(`Server is running on port: http://localhost:3000`);
});