

function Items(name, price, size, quantity){
    this.name = name;
    this.price = price;
    this.size = size;
    this.quantity = quantity;
}

       
$(function(){
    
    for(var i=1; i<=9;i++){

        $('[data-id = ' + i + ']').click(function () {
            // body...
            var obj = $(this);
            console.log("obj is ", obj);
            var siblings = obj.siblings();
            var name;
            var price;
            var size;
            var quantity;
            console.log("$ object " , $('[data-id = ' + i + ']'));
            console.log("this object " , siblings);
            price = siblings[0].innerText;
            size = siblings[2].innerText;
            quantity = siblings[4].value;
            var parent = siblings.parent();
            console.log('Parent ' ,  parent);
            name = parent.siblings()[0].innerText;
            // console.log("ith value " + i);

            console.log('Price: ' + price);
            console.log('Size: ' + size);
            console.log('Quantity: ' + quantity);
            console.log('Name: ' + name);

            var newItem = new Items(name, price, size, quantity);
            console.log("This is new item: " , newItem);
            cartList.push(newItem);
            console.log("cartList Array is: ", cartList);

        
            saveProducts();
            });
    }


});