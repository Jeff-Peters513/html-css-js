let url = "http://localhost:8080";

//let userList = [];
let jsonresp = [];

$().ready ( ()=> {
    $.getJSON(`${url}/users/`)
        .done( (res)=>{
            jsonresp = res;
            display();
            console.log(res);
        })
        .fail ((err)=>{
            console.error(err);
        });
});

const display =() =>{
    let tbody = $("tbody");
    for (let user of jsonresp.data) {
        let tr = $("<tr></tr>");
       // this is a long way = let tdid = $(`<td>${user.id}</td>`);
        let tduserName = $(`<td>${user.userName}</td>`);
        let tdFullName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        let tdemail = $(`<td>${user.email}</td>`);
        let tdpassword = $(`<td>${user.password}</td>`);
        let tdphoneNumber = $(`<td>${user.phoneNumber}</td>`);
        let tdreviewer = $(`<td>${user.reviewer ? "Yes": "No"}</td>`);
        let tdadmin = $(`<td>${user.admin ? "Yes": "No"}</td>`);
        //this (id line) is a compact way, why create a variable then use it in the next line, just combine it
        tr.append($(`<td>${user.id}</td>`));
        tr.append(tduserName);
        tr.append(tdFullName);
        tr.append(tdemail);
        tr.append(tdpassword);
        tr.append(tdphoneNumber);
        tr.append(tdreviewer);
        tr.append(tdadmin);
        tbody.append(tr);

    }

} 
