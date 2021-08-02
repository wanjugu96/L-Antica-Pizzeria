$(document).ready(function() {

    // Tests
    //collecting form Values:
    $("#btnSubmit").click(function() {

        function Pizza(size, crust, toppings, price) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings
            this.price = price
        }

        //pizza prototype 
        Pizza.prototype.fullPizza = function() {
            return "You have ordered a " + this.size + " pizza with a " + this.crust + " crust " + " with " + this.toppings + " toppings at Ksh " + this.price
        }

        //Pizze price function
        function price(size, crust, toppings) {
            //toppings = toppings[];
            //size prices
            let pizzaPrice = 0
            switch (size) {
                case "large":
                    pizzaPrice += 1000;
                    break;
                case "medium":
                    pizzaPrice += 800;
                    break;
                case "small":
                    pizzaPrice += 600;
            }


            //crust pricing
            switch (crust) {
                case "cheeseStuffed":
                    pizzaPrice += 150
                    break;

                case "pizzaBagels":
                    pizzaPrice += 150
                    break;
                case "flatBread":
                    pizzaPrice += 100
                    break;

                case "thinCrust":
                    pizzaPrice += 0;
            }

            //toppings prices
            for (let i = 0; i < toppings.length; i++) {
                switch (toppings[i]) {
                    case "pepperoni":
                        pizzaPrice += 100
                        break;
                    case "mushrooms":
                        pizzaPrice += 100
                        break;
                    case "onions":
                        pizzaPrice += 100
                        break;
                    case "sausage":
                        pizzaPrice += 100
                        break;
                    case "bacon":
                        pizzaPrice += 100
                        break;
                    case "cheese":
                        pizzaPrice += 100
                        break;
                    case "olives":
                        pizzaPrice += 100
                        break;
                    case "peppers":
                        pizzaPrice += 100
                }
            }

            return pizzaPrice;
        }

        let selectedToppings = [];
        $('input[name="toppings"]:checked').each(function() {
            selectedToppings.push(this.value);
        })

        let sizes = $("#size").val();
        let crust = $("#crust").val();
        console.log(`The selected toppings are ${selectedToppings}`)
        console.log(`the size is ${sizes}`)
        console.log(`the crust is ${crust}`)


        let priceOfNewPizza = price(sizes, crust, selectedToppings);
        let newPizzaSelected = new Pizza(sizes, crust, selectedToppings, priceOfNewPizza)
        console.log(` newPizzaSelected price is ${priceOfNewPizza}`)
        console.log(newPizzaSelected.fullPizza())

        let thePrice = price("large", "pizzaBagels", ["pepperoni", "bacon", "cheese", "mushrooms"]);
        let hawaiian = new Pizza("large", "pizzaBagels", ["pepperoni", "bacon", "cheese,", "mushrooms"], thePrice)
        console.log(` hawaian pizza price is ${thePrice}`)
        console.log(hawaiian.fullPizza())

        // let cheesy = new Pizza("small", "cheeseStuffed", ["bacon", "cheese"])
        let thePrice1 = price("small", "cheeseStuffed", ["bacon", "cheese"]);
        let cheesy = new Pizza("small", "cheeseStuffed", ["bacon", "cheese"], thePrice1)
        console.log(cheesy.fullPizza())
        cheesy.price = thePrice1;
        hawaina = console.log(` cheesy pizza price is ${thePrice1}`)

        let totalPrice = [];
        totalPrice.push(thePrice)
        totalPrice.push(thePrice1)

        let fullPrice = 0;
        for (let j = 0; j < totalPrice.length; j++) {

            fullPrice = fullPrice + totalPrice[j]
        }
        console.log(`The price of all pizzas is ${fullPrice}`)

    })




})