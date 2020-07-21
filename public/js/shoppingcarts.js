$(document).ready(() => {

    // ********** Event listeners ***********
    $(document).on('click', (event) => {
    });

    // Load the shoppingcarts
    $.ajax({
        method: "GET",
        url: "/api/shoppingcarts/"
    }).then((shoppingcarts) => {
        let total = 0;
        console.log('Shoppingcarts: ', shoppingcarts);

        // Clean the data
        let cleanedCarts = shoppingcarts.map((shoppingcart) => {
            return {
                id: shoppingcart.id,
                UserId: shoppingcart.UserId,
                Books: shoppingcart.Books
            }
        });
        // console.log('cleanedCarts: ', cleanedCarts);

        // Create the table
        cleanedCarts.forEach((cart) => {
            // console.log('cart: ', cart);
            let tr = $('<tr>');
            let td0 = $('<td>');
            let td1 = $('<td>');
            let td2 = $('<td>');
            let td3 = $('<td>');
            let td4 = $('<td>');
            td0.text(cart.id);
            td1.text(cart.UserId);
            Object.values(cart).forEach((cartElement) => {

                // console.log(`cartElement: ${cartElement}, typeof ${typeof cartElement}`);

                if (typeof cartElement === 'object' && cartElement != null && cartElement[0] != undefined) {
                    // td.text(cartElement[0]);
                    td2.text(cartElement[0].id);
                    td3.text(cartElement[0].title);
                    td4.text(cartElement[0].price);
                    /* let price = parseInt(cartElement[0].price);
                    console.log('typeof cartElement[0].price: ', typeof cartElement[0].price);
                    console.log('price: ', price);
                    console.log('typeof price: ', typeof price);
                    // total = parseInt(total + price);
                    total = 500 + 500;
                    console.log('total: ', total); */
                    total += parseFloat(cartElement[0].price);
                }
                tr.append(td0);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
            });
            $('#cartTableBody').append(tr);
        });
        total = total.toFixed(2);
        let tr = $('<tr>');
        let td0 = $('<td>');
        let td1 = $('<td>');
        let td2 = $('<td>');
        let td3 = $('<td>');
        let td4 = $('<td>');
        td3.text('Total');
        td4.text(`${total}`);
        tr.append(td0);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        $('#cartTableBody').append(tr);
    });


});
