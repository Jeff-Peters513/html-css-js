let url = "http://localhost:8080";

$().ready (() => {
    //console.log("jQuery is ready")
    $("#save").click(()=>{
        //console.log("Inside click")
        let newUser = {};
        newUser.id = Number($("#eid").val());
        newUser.userName = $("#eusername").val();
        newUser.password = $("#epassword").val();
        newUser.firstName = $("#efirstname").val();
        newUser.lastName = $("#elastname").val();
        newUser.phoneNumber = $("#ephonenumber").val();
        newUser.email = $("#eemail").val();
        newUser.reviewer = $("#eisreviewer").prop("checked");
        newUser.admin = $("#eisadmin").prop("checked");
        console.log("User: ", newUser);
        $.ajax({
            method: "POST",
            url: `${url}/users/`,
            data: JSON.stringify(newUser),
            contentType: "application/json"

        })
            .done(() => {
                console.log("User added!");
            })
            .fail((err) => {
                console.error(err);
            })
    });
});



