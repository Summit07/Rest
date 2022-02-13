import { v4 as uuidv4 } from "uuid";

let users = [
  //  db also be empty.
  {
    fName: "Ram",
    lastName: "Yadav",
    age: 25,
  },
  {
    fName: "Rahul",
    lastName: "Singh",
    age: 23,
  },
];

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`user Pushed in the database ${user.fName} by post method`);
};

export const deleateUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { fName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (fName) user.fName = fName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send(`user with the ${id} has been updated ${user.fName}`);
};

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};
