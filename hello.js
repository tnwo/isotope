if (Meteor.isClient) {
    Template.hello.events({
        'click #filters': function (e) {
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function () {
                    var number = $(this).find('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium                : function () {
                    var name = $(this).find('.name').text();
                    return name.match(/ium$/);
                }
            };

            var filterValue = $(e.target).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({filter: filterValue});
        }
    });
    Template.hello.rendered = function () {
        // init Isotope
        $container = $('.isotope').isotope({
            itemSelector: '.element-item',
            layoutMode  : 'fitRows',
            getSortData : {
                //name    : '.name',
                //symbol  : '.symbol',
                //number  : '.number parseInt',
                //category: '[data-category]',
                //weight  : function (itemElem) {
                //    var weight = $(itemElem).find('.weight').text();
                //    return parseFloat(weight.replace(/[\(\)]/g, ''));
                //}
            }
        });


        // bind filter button click

        //
        //    // bind sort button click
        //    $('#sorts').on('click', 'button', function () {
        //        var sortByValue = $(this).attr('data-sort-by');
        //        $container.isotope({sortBy: sortByValue});
        //    });
        //
        //    // change is-checked class on buttons
        //    $('.button-group').each(function (i, buttonGroup) {
        //        var $buttonGroup = $(buttonGroup);
        //        $buttonGroup.on('click', 'button', function () {
        //            $buttonGroup.find('.is-checked').removeClass('is-checked');
        //            $(this).addClass('is-checked');
        //        });
        //    });
        //
    }
}

