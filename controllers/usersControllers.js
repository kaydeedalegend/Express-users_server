import { v4 as uuidv4 } from "uuid";
import { users } from "../models/usersModel.js";

// get all users.
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

/// add a single user and generate an id for them.
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} was added`);
}

/// Find a user with Id.
export const findUser = (req, res) => {
    const { id } = req.params;
    const foundUsers = users.find((user) => user.id === id);
    res.send(foundUsers);
}

/// Delete a user with Id.
export const deleteUser = (req, res) => {
    const { id } = req.params;
    let user = users.filter((user) => user.id != id);
    res.send(`user with the id: ${user.id} was deleted from database.`);
}

/// Update a user record.
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`user with the id: ${id} was updated. new details are : ${user.firstName}, ${user.lastName}, ${user.age}`);
}


