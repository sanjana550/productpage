
    var sp=document.getElementById('sp');
    var prod=document.getElementById('prod');
    var cat=document.getElementById('cat');




document.getElementById('addproduct').addEventListener('click',(e)=>{
e.preventDefault();

if(sp==='' || prod==='' || cat==='')
    {
        alert('Please fill all the details');
    }
let div=document.createElement('div');
let doc=document.createTextNode("selling price = "+sp.value+" "+"product = "+prod.value+" "+"category = "+cat.value);
let btn=document.createElement("button");
btn.innerHTML='Delete';
btn.classList.add('btn','btn-danger');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    btn.parentElement.innerHTML='';
})


div.appendChild(btn);


div.appendChild(doc);



if(cat.value==='electronics'){
    document.getElementById('elec').appendChild(div);
}
if(cat.value==='food'){
    document.getElementById('food').appendChild(div);
}
if(cat.value==='skincare'){
    document.getElementById('skincare').appendChild(div);
}

document.getElementById('myform').reset();



fetch("https://crudcrud.com/api/9d12090a50e44e08b5479548888e77ae", {
     
// Adding method type
method: "POST",
 
// Adding body or contents to send
body: JSON.stringify({
    selling_price:sp.value,
    prod_name:prod.value,
    category:cat.value
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}




})

fetch("https://crudcrud.com/api/9d12090a50e44e08b5479548888e77ae")

// Converting received data to JSON
.then(response => response.json())
.then(json => {

    // Create a variable to store HTML
    let li = `<tr><th>Name</th><th>Email</th></tr>`;
   
    // Loop through each data and add a table row
    json.forEach(user => {
        li += `<tr>
            <td>${user.title} </td>
            <td>${user.body}</td>        
        </tr>`;
    });

// Display result
document.getElementById("users").innerHTML = li;
});

});







    


    
   



   
    
    


   
    
