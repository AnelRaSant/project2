$(document).ready(() => {

    // Get logged in user's data
    let user = $.get("/api/user_data").then(function (data) {
        console.log('user.email: ', data.email);
        console.log('user.id: ', data.id);
        return data;
    });

    // ********** Event listeners ***********
    let currentBookId;
    $(document).on('click', (event) => {

        // Click on any category name
        if ($(event.target).attr('class') === 'categoryLink') {

            // Get the books within the category
            $.ajax({
                method: "GET",
                url: `/api/books/category/${event.target.text}`
            }).then((books) => {
                console.log(`Books within ${event.target.text}: `, books);

                // Empty the booksCards area
                $('#booksCards').empty();

                // Create the book cards
                books.forEach((book) => {
                    // data-toggle="modal" data-target="#bookModal"
                    let card = `
                <div class="card" style="width: 12rem;">
                    <img src="${book.thumbnail}" class="card-img-top" alt="${book.title} book image" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" class="modalTrigger" bookId="${book.id}">${book.title}</a></h5>
                        <p class="card-text">
                            By ${book.authors}
                        </p>
                    </div>
                </div>
                `;
                    $('#booksCards').append(card);
                });
            });
        }

        // Click on the modal
        else if ($(event.target).attr('class') == 'modalTrigger') {

            // Get book details by its id
            $.ajax({
                method: "GET",
                url: `/api/books/${$(event.target).attr('bookId')}`
            }).then((book) => {
                console.log('Modal book: ', book);

                // Empty the modal area
                $('.modal-body').empty();

                // Create the modal book card
                let modalBookCard = `
                <div class="card">
                    <img src="${book.thumbnail}" class="card-img-top" alt="${book.thumbnail}" />
                    <div class="card-body">
                        <h5 class="card-title"><a href="#" class="modalTrigger" bookId="${book.id}">${book.title}</a></h5>
                        <p class="card-text"> <strong> Subtitle </strong> ${book.subtitle}</p>
                        <p class="card-text"> <strong> By </strong> ${book.authors}</p>
                        <p class="card-text"> <strong> Categories </strong> ${book.categories}</p>
                        <p class="card-text"> <strong> Published year </strong> ${book.published_year}</p>
                        <p class="card-text"> <strong> Average rating </strong> ${book.average_rating}</p>
                        <p class="card-text"> <strong> Ratings count </strong> ${book.ratings_count}</p>
                        <p class="card-text"> <strong> Description </strong> ${book.description}<p>
                        <p class="card-text"> <strong> Price </strong> ${book.price}</p>
                    </div>
                </div>
                `;
                $('.modal-body').append(modalBookCard);

                // Display the modal
                $('#bookModal').modal();

                currentBookId = book.id;
            });
        }

        // Click on add to the cart
        else if ($(event.target).attr('id') == 'addToCart') {
            console.log('Add to cart button clicked');
            console.log('currentBookId: ', currentBookId);

            $.get("/api/user_data").then(function (data) {
                console.log('user.email: ', data.email);
                console.log('user.id: ', data.id);

                // Add the book to the cart
                $.post("/api/shoppingcarts", {
                    UserId: data.id,
                    BookId: currentBookId
                }, (cart_answer) => {
                    console.log('cart_answer: ', cart_answer);
                    window.location.href = "/cart";
                });
            });


        }
    });




    // Load the books
    $.ajax({
        method: "GET",
        url: "/api/books/"
    }).then((books) => {
        // console.log('Books: ', books);

        // Create the list of categories
        let categories = books.map((book) => {
            return book.categories;
        });
        // console.log('Categories: ', categories);

        let uniqueCategories = Array.from(new Set(categories));

        // console.log('uniqueCategories: ', uniqueCategories);

        uniqueCategories.forEach((category) => {
            let li = $('<li>');
            let a = $('<a>');
            a.attr('href', `#`);
            a.attr('class', 'categoryLink');
            a.text(category);
            li.append(a);
            $('#categories').append(li);
        });
    });
});