const url = "http://localhost:8080";

let user = null;

$().ready (() =>{
    //console.log("jQuery is ready.")
    $("#get").click(() => {
        getUser();
    });

    $("#delete").click(() =>{
        remove(user);

    });

});

const remove = (user) =>{
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


const getUser = () =>{
    let userId = $("#userid").val();
    userGetByPK(userId)
        .done(() => {
            console.log("User: ", user);
            display(user.data);
        });
}

const userGetByPK = (id) => {
    
}
const display =(user) =>{
    $("#eid").text(user.id);
    $("#eusername").text(user.userName);
    $("#efirstname").text(user.firstName);
    $("#elastrname").text(user.lastName);
    $("#eemail").text(user.email);
    $("#ephonenumber").text(user.phoneNumber);
    $("ereveiwer").prop("checked", user.reviewer);
    $("eadmin").prop("checked", user.admin);

    }

