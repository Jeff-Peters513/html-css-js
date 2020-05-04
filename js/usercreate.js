
$().ready (() => {
    //console.log("jQuery is ready")
    $("#save").click(()=>{
        console.log("Inside click")
        let newUser = {};
        newUser.id = Number($("#eid").val());
        newUser.userName = $("#eusername").val();
        newUser.password = $("#epassword").val();
        newUser.firstName = $("#efirstname").val();
        newUser.lastName = $("#elastname").val();
        newUser.phonenumber = $("#ephonenumber").val();
        newUser.email = $("#eemail").val();
        newUser.isReviewer = $("#eisreviewer").prop("checked");
        newUser.isAdmin = $("#eisadmin").prop("checked");
        console.log("User: ", newUser);

    })
})



