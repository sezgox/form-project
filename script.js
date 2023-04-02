 const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
        console.log("addEventListener detected")
        console.log(document.getElementById("name").value)

});