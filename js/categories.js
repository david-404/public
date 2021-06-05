class categories {
    constructor() {
        this.apiurl = "https://fakestoreapi.com/";
    }

    getAllCategory() {
     $.ajax({
         type: "GET",
         url: this.apiurl + "products/categories",
         succcess: function (data) {
             console.log(data);
         },
     });
    }
}