 
 const userGetAll = () =>{
    return $.getJSON(`${url}/users/`);

}

const userGetByPK = (id) => {
   return $.getJSON(`${url}/users/${id}`);
}

const userCreate = (user) => {
    $.ajax({
        method: "POST",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"

    })
        .done(() => {
            console.log("User inserted!");
        })
        .fail((err) => {
            console.error(err);
        });


}

const userChange = (user) =>{
    $.ajax({
        method: "PUT",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"

    })
        .done(() => {
            console.log("User updated!");
        })
        .fail((err) => {
            console.error(err);
        });

}

const userRemove = (user) =>{
    $.ajax({
        method: "DELETE",
        url: `${url}/users/${user.id}`,
        //data: JSON.stringify(newUser),
        contentType: "application/json"

    })
        .done(() => {
            console.log("User deleted!");
        })
        .fail((err) => {
            console.error(err);
        });

}