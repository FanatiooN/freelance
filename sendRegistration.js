let name = document.querySelector("#registrationName")
let email = document.querySelector("#registrationEmail")
let password = document.querySelector("#registrationPassword")
let service = document.querySelector("#registrationServices")
let button = document.querySelector("#registrationButton")


let users = {};

function User(name, email, password, service) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.service = service;
}



button.addEventListener('click', () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordUser = password.value;
    const serviceUser = service.value;
    console.log(service, service.value);


    const user = new User(nameUser, emailUser, passwordUser, serviceUser);
    const userId = 'User' + Object.keys(users).length;

    users[userId] = user;
    console.log(users);
})