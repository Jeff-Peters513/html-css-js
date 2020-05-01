
class customer {
    id;
    name;
    state;

    print() {
        console.log(this.id, this.name, this.state);

    }
    constructor(id, name, state){
        this.id = id;
        this.name = name;
        this.state = state;
    } 
}

let cust1 = new customer(1, "Amazon", "WA");
let cust2 = new customer(2,"Target", "MN");
let cust3 = new customer(3, "Walmart", "AR");

let custs = [cust1, cust2, cust3];

const loaded = () =>{
    display();
}

const display =() => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; //clear old data
    for(let cust of custs) {
        let tr = `<tr>`;
        tr +=`<td>${cust.id}</td>`;
        tr +=`<td>${cust.name}</td>`;
        tr +=`<td>${cust.state}</td>`;
        tr +=`</tr>`;
        tbody.innerHTML += tr;
    }

}

const add =() =>{
    let id = Number(document.getElementById("tid").value);
    let name = document.getElementById("tname").value;
    let state = document.getElementById("tstate").value;
    let cust = new customer(id, name, state);
    custs.push(cust);
    display();

}


console.log("Hi I am here.")

