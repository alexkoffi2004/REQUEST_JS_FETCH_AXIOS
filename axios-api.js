const axios = require('axios'); // ou import axios from 'axios' si tu es en ES6

const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users";

// GET By ID
// const userID = 8;

axios.get(`${PLACEHOLDER_URL_API}/${userID}`)
  .then(res => {
    console.log('Utilisateur récupéré :', res.data);
  })
  .catch(error => {
    console.error('Erreur GET by ID :', error);
  });


// GET ALL
  axios.get(PLACEHOLDER_URL_API)
  .then(res => {
    console.log('Tous les utilisateurs :', res.data);
  })
  .catch(error => {
    console.error('Erreur GET all :', error);
  });


// PUSH 
axios.post(PLACEHOLDER_URL_API, {
    name: 'Koffi Ange',
    userName: 'koffiange09',
    email: "koffiange09@gmail.com",
})
.then(res => {
    console.log('Utilisateur créé :', res.data);
})
.catch(error => {
    console.error('Erreur POST :', error);
});


// PUT

// const userID = 9;

axios.put(`${PLACEHOLDER_URL_API}/${userID}`, {
    name: 'Benie Sylvestre',
    userName: 'beniesylvestre09',
    email: "beniesylvestre09@gmail.com",
})
.then(res => {
    console.log('Utilisateur modifié :', res.data);
})
.catch(error => {
    console.error('Erreur PUT :', error);
});


// DELETE
const userID = 5;

axios.delete(`${PLACEHOLDER_URL_API}/${userID}`)
  .then(res => {
    console.log('Utilisateur supprimé');
  })
  .catch(error => {
    console.error('Erreur DELETE :', error);
  });
