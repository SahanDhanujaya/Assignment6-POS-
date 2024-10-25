//customer db
let customer_array = [];
console.log("lenght ", customer_array.length);

//load customer table
const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    //create table row
    customer_array.map((item, index) => {
        // To clear the entire table body using jQuery
        let data = `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td>`
        $("#customerTableBody").append(data);
    })
}
//add customer button
$("#customer_add_button").on("click", function () {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();
    console.log(firstName);
    console.log(lastName);
    console.log(mobile);
    console.log(email);
    console.log(address);

    let Customer = {
        id: customer_array.length + 1,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        address: address
    }
    customer_array.push(Customer);
    console.log(customer_array);
    loadCustomerTable();
});

// item save page 
let itemArr = [];
const loadItemTable = ()=>{
    $("#itemTableBody").empty();
    itemArr.map((item,index)=>{
        let data = `<tr><td>${item.item_name}</td><td>${item.desc}</td><td>${item.qty}</td><td>${item.price}</td></tr>`
        $("#itemTableBody").append(data);
    });
}
$("#item-add-button").on('click',function(){
    alert("ebenoo");
    let item_name = $("#itemName").val();
    let qty = $("#qty").val();
    let desc = $("#desitemDescription").val();
    let price = $("#price").val();

    const Item = {
        id: itemArr+1,
        item_name: item_name,
        qty:qty,
        desc:desc,
        price:price
    }
    
    itemArr.push(Item);
    console.log(itemArr);
    loadItemTable();
});
