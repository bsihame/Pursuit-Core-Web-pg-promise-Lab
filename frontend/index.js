document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    const form = document.querySelector('#addUserForm');
    form.addEventListener('submit', addUserFormSubmitted);
});

const loadUsers = async() =>{
    try{
    const usersList = document.querySelector('#usersList');
    usersList.innerHTML = "";
    const response = await axios.get(`http://localhost:3000/users/all`);
    response.data.users.forEach((user) => {
        //debugger
        let listItem = document.createElement("li");
        listItem.innerText = `${user.firstname} ${user.lastname}, ${user.age}`;
        usersList.appendChild(listItem);
    });
    }catch (err) {
        console.log(err)
    }
}

const addUserFormSubmitted = async(event) =>{
    event.preventDefault();   
    try{
    const firstname = document.querySelector('#firstNameInput').value;
    const lastname = document.querySelector('#lastNameInput').value;
    const age = document.querySelector('#ageInput').value;
    // debugger
    let response = await axios.post(`http://localhost:3000/users/register`, {firstname, lastname, age});
    loadUsers();
    console.log(response)
    } catch (err){
        console.log(err)
    }
}
