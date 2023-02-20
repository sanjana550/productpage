// let sp=document.getElementById('sp');

// let prod=document.getElementById('prod');
// //console.log(prod.value);
// let category=document.getElementById('cat');
// let arr=[];

const replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };
// //console.log(category.value);category.
// document.getElementById('addproduct').addEventListener('click',(e)=>{
//     e.preventDefault();
//     const div=document.createElement('div');
//     div.className=category.value;
//     const doc=document.createTextNode(sp.value+"-"+prod.value+"-"+category.value);
//     div.appendChild(doc);
//     if(category.value==='electronics'){
//         document.getElementById('elec').appendChild(div);
//     }
//     if(category.value==='food'){
//         document.getElementById('food').appendChild(div);
//     }
//     if(category.value==='skincare'){
//         document.getElementById('skincare').appendChild(div);
//     }
//     var products={
//         sellprice:sp.value,
//         prodname:prod.value,
//         cate:category.value


//     }
//     if(localStorage.getItem('products')===null){
//         var products=[];
//         products.push(products);
//         localStorage.setItem('products',JSON.stringify(products));
//     }
//     else{
//        var products=JSON.parse(localStorage.getItem('products'));
//        products.push(products);
//        localStorage.sellprice('products',JSON.stringify(products))

//     }
// document.getElementById('form').reset();

// })

document.getElementById('addproduct').addEventListener('click',addProd);
function addProd(e){
    e.preventDefault();
    var sp=document.getElementById('sp').value;
    var prod=document.getElementById('prod').value;
    var cat=document.getElementById('category');


    if(sp==='' || prod==='' || cat==='')
    {
        alert('Please fill all the details');
    }
  
    var products={
        selling:sp,
        prod_name:prod,
        category:cat

    }
   
    //var regex=new RegExp([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)')
    if(localStorage.getItem('products')===null)
    {
        var products=[];
        products.push(products);
        localStorage.setItem('products',JSON.stringify(products,replacerFunc()));
    }
    else{
        var products=JSON.parse(localStorage.getItem('products'));
        products.push(products);
        localStorage.setItem('products',JSON.stringify(products,replacerFunc()));
    }
    document.getElementById('myform').reset();

}

  
