
const users = [
    {
        name: "Rajat",
        age: 22,
        email: "rajat@gmail.com"
    },
    {
        name: "John",
        age: 26,
        email: "john@gmail.com"
    },
    {
        name: "Rahul",
        age: 18,
        email: "rahul@gmail.com"
    }
];


const container = document.getElementById("container");


users.forEach(user => {

    
    const card = document.createElement("div");
    card.classList.add("card");

    
    const name = document.createElement("p");
    name.textContent = "Name: " + user.name;

    const age = document.createElement("p");
    age.textContent = "Age: " + user.age;

    const email = document.createElement("p");
    email.textContent = "Email: " + user.email;

    
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(email);

    container.appendChild(card);
});