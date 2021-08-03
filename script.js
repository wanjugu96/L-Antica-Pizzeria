$(document).ready(function() {

    // Tests
    //collecting form Values:\
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


    $("#btnSubmit").one("click", function() {

        //var getPrice= priceFunction() 
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

        //   console.log(pizzaPrice)
        // let price1 = pizzaPrice;


        let selectedToppings = [];
        $('input[name="toppings"]:checked').each(function() {
            selectedToppings.push(this.value);
        })

        let sizes = $("#size").val();
        let crust = $("#crust").val();
        let delivery = $("input[type='radio'][name='delivery']:checked").val();
        let number = $("#numberid").val();
        // let deliveryn = $('#noid').val();

        let priceOfNewPizza = price(sizes, crust, selectedToppings);
        let newPizzaSelected = new Pizza(sizes, crust, selectedToppings, priceOfNewPizza)

        console.log(` newPizzaSelected price is ${priceOfNewPizza}`)
        console.log(newPizzaSelected.fullPizza())
        console.log(`The selected toppings are ${selectedToppings}`)
        console.log(`the size is ${sizes}`)
        console.log(`the crust is ${crust}`)
        console.log(`the delivery is ${delivery}`)
        console.log(`the delivery is ${number}`)


        let fullPrice = priceOfNewPizza * number;


        let newText = newPizzaSelected.fullPizza()
        $(".summary").prepend("<li>" +
            newText + "</li>")
        $(".totalp").prepend("<p>- Your total price for " + number + " pizza(s)" + " is ksh " + fullPrice + "</p>")



        $(".totalp").append('<input id="btndeliver" type="button" value="Deliver to my home" />')
            //
        $("#btndeliver").one("click", function() {
            $(".locationdetails").show()

        })
    })

    $("#btncheckout").one("click", function() {
            var name = $("input.name").val();
            var inputtedStreet = $("input.new-street").val();
            var inputtedCity = $("input.new-city").val()
            var inputtedCounty = $("input.new-county").val()

            console.log(name)
            console.log(inputtedCity)
            console.log(inputtedCounty)
            console.log(inputtedStreet)

            let text = ""
            text = "Dear " + name + " We will deliver your order at " + inputtedStreet + " " + inputtedCity + " " +
                inputtedCounty + " " + " at " + "ksh.100"
            console.log(text)
            document.getElementById("checkoutid").innerHTML = text

        })
        //let num = priceFunction()
        //console.log(priceOfNewPizza)


})