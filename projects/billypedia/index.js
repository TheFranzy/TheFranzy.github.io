/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        let $bio = $('#section-bio').css('color', 'black').css('font-style', 'italic');
        let $quotes = $('#section-quotes').css('color','blue').css('font-style', 'italic');
        let topRated = data.discography.topRated;
            // _.forEach(topRated, function(recording) {
            // console.log(recording);
            //  });
        let $mapped = _.map(topRated, function(recorded){
            return $('<li>')
            .append($('<div>').text(recorded.title).addClass('title-top-rated'))
        })
        let $topRated = $('#list-top-rated').append($mapped).css('padding', '20px').css('font-style', 'italic');
        let $test = $('#sidebar').append($('<section>').attr('id', 'section-recordings'));
        let $test2 = $('#section-recordings').append($('<header>')
                    .attr('id', 'header-recordings').attr('class', 'header')
                    .text('Other Recordings'));
        let otherRecordings = data.discography.recordings;
        let otherMapped = _.map(otherRecordings, function(recording){
            return $('<ul>')
            .append($('<div>').text(recording.title).addClass('title'))
            .append($('<div>').text(recording.artist).addClass('artist'))
            .append($('<div>').text(recording.release).addClass('release'))
            .append($('<div>').text(recording.year).addClass('year'))
        });
        
        let $otherRecordings = $('#section-recordings').append(otherMapped).css('font-size', 15);
        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });


        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
