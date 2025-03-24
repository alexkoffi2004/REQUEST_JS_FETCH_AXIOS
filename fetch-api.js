const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users/"

// get by id
// const userID = 8

fetch(`${PLACEHOLDER_URL_API}/${userID}`,{
     method: 'GET'
})


// get all
fetch(`${PLACEHOLDER_URL_API}`,{
     method: 'GET'
})


// post 
fetch(`${PLACEHOLDER_URL_API}`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Alex Koffi',
      userName: 'alexkoffi09',
      email: "alexkoffi09@gmail.com",
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})


// put
const userID = 9
fetch(`${PLACEHOLDER_URL_API}/${userID}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: 'Benie Sylvestre',
      userName: 'beniesylvestre09',
      email: "beniesylvestre09@gmail.com",
}),
    headers: {
        'Content-Type': 'application/json'
}
})

.then((res) => {
   return res.json()
})

.then((res) => { 
    console.log(res)
})
.catch((error) => {
    console.error('Error:', error);  // Error handling code goes here.  This is just a placeholder.  In a real-world application, you would have more specific error handling logic.  For example, you might want to log the error to a server or display an error message to the user.  This example just logs the error to the console.  You would also want to have more specific error handling logic in a real-world application.  For example, you might want to display an error message to the user or redirect the user to an error page.  This example just logs the error to the console.  You would also want to have more specific error handling logic in a real-world application.  For example, you might want to display an error message to the user or redirect the user to an error page.  This example just logs the error to the console.  You would also want to have more specific error handling logic in a real-world application
})