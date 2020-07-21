$(document).ready(() => {
    $('#purchasesDiv').hide();

    // ********** Event listeners ***********
    $(document).on('click', (event) => {

        // Continue browsing button clicked
        if ($(event.target).attr('id') === 'continueBrowsing') {
            window.location.href = "/browse"
        }

        // Purchases history button clicked
        if ($(event.target).attr('id') === 'purchasesHistory') {
            $('#purchasesDiv').toggle();
        }

        // Confirm purchse button clicked
        if ($(event.target).attr('id') === 'confirmPurchase') {
            // Display the modal
            $('#purchaeConfirmationModal').modal();

            // Show purchase history
            $('#purchaeConfirmationModal').on('hidden.bs.modal', function (e) {
                $('#purchasesDiv').show();
            })
        }

    });

    // Load the shoppingcarts
    $.ajax({
        method: "GET",
        url: "/api/shoppingcarts/"
    }).then((shoppingcarts) => {
        let total = 0;

        // Clean the data
        let cleanedCarts = shoppingcarts.map((shoppingcart) => {
            return {
                id: shoppingcart.id,
                UserId: shoppingcart.UserId,
                Books: shoppingcart.Books
            }
        });

        // Create the table
        cleanedCarts.forEach((cart) => {
            let tr = $('<tr>');
            let td0 = $('<td>');
            let td1 = $('<td>');
            let td2 = $('<td>');
            let td3 = $('<td>');
            let td4 = $('<td>');
            td0.text(cart.id);
            td1.text(cart.UserId);
            Object.values(cart).forEach((cartElement) => {
                if (typeof cartElement === 'object' && cartElement != null && cartElement[0] != undefined) {
                    td2.text(cartElement[0].id);
                    td3.text(cartElement[0].title);
                    td4.text(cartElement[0].price);
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
