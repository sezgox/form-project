 const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
     
        if(document.getElementById("name").value !==""){
            alert("NO RELLENASTE TODO LOS APARTADOS IMBECIL");
       }else {
        console.log("El else funciona");
       }
        console.log(document.getElementById("name").value, document.getElementById("address").value, document.getElementById("age").value, document.getElementById("surname").value);
         
    });











