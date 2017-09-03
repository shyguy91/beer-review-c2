function BeerReviewApp() {
    var beers = [];

    function addBeer(name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    function updateBeer() {
        var array = $('.beers-list').find('li');
        for (var i = 0; i < array.length; i++) {
            array.eq(i).remove();
        }

        for (var i = 0; i < beers.length; i++) {
            $('.beers-list').append('<li>' + beers[i].name + ' | ' + beers[i].category + ' | ' + beers[i].rating + '</li>');
        }

        $('.beers-list').find('li').click(function () {
            this.remove();
        });
    }

    function sortBeer(buttonText){
        if (buttonText === 'Sort Down') {
            beers.sort(function (a, b) { return b.rating - a.rating });
            $('.sort-beer').html('Sort Up');
        }
        else if (buttonText === 'Sort Up') {
            beers.sort(function (a, b) { return a.rating - b.rating });
            $('.sort-beer').html('Sort Down');
        }
        updateBeer();
    }

    return {
        addBeer: addBeer,
        updateBeer: updateBeer,
        sortBeer: sortBeer
    };
}

var app = BeerReviewApp();

$('.post-beer').click(function () {
    var beerInput = $('.beer-input').val();
    var categoryInput = $('.category-input').val();
    var ratingInput = $('.rating-value').val();


    app.addBeer(beerInput, categoryInput, ratingInput);
    app.updateBeer();
});



$('.sort-beer').click(function () {
    app.sortBeer($('.sort-beer').text());
});