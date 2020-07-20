$(document).ready(() => {

    // ********** Event listeners ***********
    $(document).on('click', (event) => {


        // Click on any category name
        /* if ($(event.target).attr('class') === 'categoryLink') {
        } */




    });




    // Load the shoppingcarts
    $.ajax({
        method: "GET",
        url: "/api/shoppingcarts/"
    }).then((shoppingcarts) => {
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
            console.log('cart: ', cart);
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
                    console.log('Book: ', cartElement[0]);
                    console.log('Book.id: ', cartElement[0].id);
                    console.log('Book.title: ', cartElement[0].title);
                    console.log('Book.price: ', cartElement[0].price);
                    /* Object.entries(cartElement[0]).forEach((bookProp) => {
                        console.log('bookProp: ', bookProp);
                        td.text(bookProp);
                    }); */
                    // td.text(cartElement[0]);
                    td2.text(cartElement[0].id);
                    td3.text(cartElement[0].title);
                    td4.text(cartElement[0].price);
                }
                tr.append(td0);
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
            });
            $('#cartTableBody').append(tr);
        });
    });


});

{/* <tr>
    <th scope="col">ShoppingcartId</th>
    <th scope="col">UserId</th>
    <th scope="col">BookId</th>
    <th scope="col">Title</th>
    <th scope="col">Price</th>
</tr>

        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr> */}