$(document).ready(function () {
    console.log("jQuery Connected");
})

const getAll = function () {
    $.ajax({
        url: "api/products",
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}

const post = function () {
    let input = {req:$("#input").val().trim()};
    $.ajax({
        url: "api/products",
        method: "POST",
        data:input
    }).then(function (response) {
        console.log(response)
        $("#products-view").empty();
        for(let i = 0; i < response.length; i++){
            let data = response[i];
            $("#product-view").append(`<div>${data.product_name} <button data-id=${data.id} class="get-product">Get Product</button></div>`);
        }
    })
}

const getOne = function () {
    $.ajax({
        url: "api/products/:id",
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
}

$("#get").on("click", function (event) {
    event.preventDefault();
    getAll();
})

$("#post").on("click", function (event) {
    event.preventDefault();
    post();
})

$("#get1").on("click", function (event) {
    event.preventDefault();
    getOne();
})

$("#product-view").on("click",".get-product",function(event){
	event.preventDefault();
	let productId = $(this).data("id");
	console.log(productId)
})