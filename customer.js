var inquirer = require("inquirer");
var mysql= require("mysql");

var connection = mysql.createConnection({
    host: '127.0.0.1' ,
    port: 8889,
    user: "root",
    password: "root",
    database : 'Bamazon2'
})

function validateInput(data){
    var integer= Number.isInteger(parseFloat(data));
    var sign = Math.sign(data);
    if (integer && (sign === 1)){
        return true;
    }else {
        return "That is not an integer"
    }
}

function promptUserPurchase (){
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Enter an item ID that you would like to buy",
            validate: validateInput,
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "How Many? ",
            validate: validateInput,
            filter: Number
        }
    ]).then(function(input){
        console.log("Cusomter has selected: " + input.item_id)
        var item= input.item_id;
        var quantity= input.quantity;
        var queryStr= 'SELECT * FROM products WHERE ?'

        connection.query(queryStr, {item_id: item}, function(err, data){
            if (err) throw err;

            if(data.length === 0 ){
                console.log("Error, Bad Item ID, try again")
                displayInventory();
            } else {
                var productData= data[0];

                if(quantity <= productData.stock_quantity){
                    console.log("The product you selected is in stock!");
                    var updateQueryStr= 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity- quantity) + 'WHERE item_id = ' + item;

                    connection.query(updateQueryStr, function(err, data){
                        if (err) throw err;

                        console.log("Your order has been placed! Your total is $" + productData.price * quantity);
                        console.log("Thanks for shopping!");
                        console.log("\n_________________________________________________\n");


                        connection.end();
                    })
                } else {
                    console.log("Sorry there is not enough product in stock, your order cannot be placed");
                    console.log("please change your order");
                    console.log("\n______________________________________________\n");

                    displayInventory();
                }
            }
        })

    })
}

function displayInventory() {
    queryStr= 'SELECT * FROM products';
    
    connection.query(queryStr, function(err, data){
        if (err) throw err;
        console.log("Current Inventory: ");
        console.log("\n________________________________________________\n");

        var strOut= '';
        for (var i=0 ; i < data.length ; i++){
            strOut= '';
            strOut += 'Item ID: ' + data[i].item_id + " //";
            strOut += 'Product Name: ' + data[i].product_name + " // ";
            strOut += 'Department: ' + data[i].department_name + ' // ';
            strOut += 'Price: $' + data[i].price + '\n';

            console.log(strOut);
        }

        console.log ("\n________________________________________________\n");

        promptUserPurchase();
    })
}

function runBamazon(){
    displayInventory();
}

runBamazon();
