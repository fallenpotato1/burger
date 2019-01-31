$(document).ready(function () {
    $(".burgerForm").on("submit", function (event) {
        event.preventDefault()
        var newBurger = {
            burger: $("#newBurger").val().trim()
        }
        $.ajax("/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        )
    })
})
