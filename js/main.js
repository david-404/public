//a jquery function that atomatically loades a function
$(function () {
    loadScript("js/categories.js", categoriesSetup)
    loadScript("js/product.js", productSetup)
})

var categoriesSetup = function () {
    let = categorie = new categories()
    categorie.getAllCategory();
}

var productSetup = function () {
    console.log("product Setup")
}
//create a function that creates an element called script, type, src, 
function loadScript (url, callback) {
    var head = document.head
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    //add a callback (that is to be executed after another function has finished executing)
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}