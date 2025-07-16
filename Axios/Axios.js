import axios from "axios";

// Base URL
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// 1. GET: Fetch all users
async function getUsers() {
  try {
    const response = await axios.get(BASE_URL);
    console.log('GET - All Users:', response.data);
  } catch (error) {
    console.error('GET Error:', error.message);
  }
}

// 2. POST: Create a new user
async function createUser() {
  try {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890'
    };
    const response = await axios.post(BASE_URL, newUser);
    console.log('POST - Created User:', response.data);
  } catch (error) {
    console.error('POST Error:', error.message);
  }
}

// 3. PUT: Replace a user (simulate full update)
async function updateUser() {
  try {
    const updatedUser = {
      name: 'Updated Name',
      email: 'updated@example.com',
      phone: '999-999-9999'
    };
    const response = await axios.put(`${BASE_URL}/1`, updatedUser);
    console.log('PUT - Updated User:', response.data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }
}

// 4. PATCH: Partial updatenpm
async function patchUser(){
  try {
    const patchData = {
      email: 'patched@example.com'
    };
    const response = await axios.patch(`${BASE_URL}/1`, patchData);
    console.log('PATCH - Patched User:', response.data);
  } catch (error) {
    console.error('PATCH Error:', error.message);
  }
}

// 5. DELETE: Delete a user
async function deleteUser() {
  try {
    const response = await axios.delete(`${BASE_URL}/1`);
    console.log('DELETE - User deleted:', response.data);
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
}
getUsers()
createUser()
updateUser()
patchUser()
deleteUser()

