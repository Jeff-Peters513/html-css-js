let url = "http://localhost:8080";

let user =null;

$().ready(() => {

        $("#eid").click(() => {
            getUser();
        });

        $("#save").click(() => {
            updatetUser();
        });
});

const updatetUser= () => {
    user.userName = $("#eusername").val();
    user.password = $("#epassword").val();
    user.firstName = $("#efirstname").val();
    user.lastName = $("#elastname").val();
    user.email = $("#eemail").val();
    user.phoneNumber = $("#ephonenumber").val();
    user.reviewer = $("#eisreviewer").prop("checked");
    user.admin = $("#eisadmin").prop("checked");
    console.debug("User before update: ", user);
    putUser(user);
}

const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/users/`,
        data:JSON.stringify(user),
        contentType: "application/json"

    })
        .done((res) => {
            console.log("Update Successfull! Res is ", res);
        })
        .fail((err) => {
            console.error("Error: ", err);
        });
}


const getUser = () => {
    let userId = $("eid").val();
    userGetByPK(userId);
};

const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
        .done((res)=>{
            user = res.data;
            console.debug("JR:", res);
            display();
        })
        .fail((err)=> {
            console.error(err);
        })
}
const display = () =>{
    $("#eusername").val(user.userName);
    $("#epassword").val(user.password);
    $("#efirstname").val(user.firstName);
    $("#elastname").val(user.lastName);
    $("#ephonenumber").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("eisreveiwer").prop("checked", user.reviewer);
    $("eisadmin").prop("checked", user.admin);
}