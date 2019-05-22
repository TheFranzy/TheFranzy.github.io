/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        let $bio = $('#section-bio').css('color', 'black').css('font-style', 'italic');
        let $quotes = $('#section-quotes').css('color','blue').css('font-style', 'italic');
            // _.forEach(topRated, function(recording) {
            // console.log(recording);
            //  });
            
        //#####BILLY IMAGE#####
        let billyImages = data.images.billy;
        // _.forEach(billyImages, function(image){
        //     console.log(image);
        // })
        
        // let randomBilly = _.shuffle(billyImages)[0]
        // // console.log(randomBilly, 'may this work')
        

        // = $('#image-billy')
        // .attr('src', randomBilly);
        
        // let $imagecontainer = $('<div>')
        // .attr('id', 'image-container')
        // // .text('Clickable')
        // .appendTo('#image-container-billy')
        
        // $billyImageManipulation.on('click', function(event){
        // return $('#image-billy').attr('src', randomBilly)
        // })
        
        
        let count = 1;
        $('#image-billy').on('click', function(event){
            if(count < billyImages.length){
                $('#image-billy').attr('src', "images/billy/billy-"+count+".jpg" )
                count++;
            }else{
                // count = 1;
                $('#image-billy').attr('src', "images/billy/billy-0.jpg" )
            }
        })
        
        
        // $('#image-billy').on('click', function(event){
        //     let trigger = $(event.currentTarget);
        //     let count = trigger.attr('i');
        //     if(count < billyImages.length - 1){
        //         let src = billyImages[count++]
        //         $('#image-billy').attr('src', "images/billy/billy-"+count+".jpg").attr('i', count);
        //     }else{
        //         $('#image-billy').attr('src', "images/billy/billy-0.jpg")
        //     }
        // })
        
         
         
            
        //#####TOP RATED###
        
        
        let topRated = data.discography.topRated;
        let topRatedMapped = _.map(topRated, function(recorded){
            return $('<li>').attr('class', 'top-rated')
            .append($('<div>').text(recorded.title).addClass('title'))
            // .append($('<div>').text(recorded.artist).addClass('artist'))
            // .append($('<div>').text(recorded.release).addClass('release'))
            // .append($('<div>').text(recorded.year).addClass('year'))
            .attr('art', recorded.art)
        })
       
        _.each(topRatedMapped, function(ele){
            $('#list-top-rated').append(ele)
        })
        // let $topRated = $('#list-top-rated').append(topRatedMapped).css('padding', '20px').css('color', 'black').css('font-size', 15);
        let $topRatedHeader = $('#header-top-rated').css('color', 'black').css('font-size', 25);
        
        let $topRatedImageContainer = $('#section-top-rated').prepend($('<div>').attr('id', 'image-container-top-rated'));
        let $topRatedImage = $('#image-container-top-rated').append($('<img>').attr('src', "images/album/voice-in-the-night.jpg").attr('class', 'image')
        .attr('id', 'image-top-rated'))
        
        $('.top-rated').on('click', function(event){
            let trigger = $(event.currentTarget);
            $('#image-top-rated').attr('src', $(trigger).attr('art'));
            
        })
        
        //############OTHER RECORDINGS#########
        let $test = $('#sidebar').append($('<section>').attr('id', 'section-recordings'));
        let $test2 = $('#section-recordings').append($('<header>').attr('id', 'header-recordings').attr('class', 'header').text('Other Recordings'));
        
        let $otherRecordingImageContainer = $('#section-recordings').append($('<div>').attr('id', 'image-container-recording').attr('class', 'image-container')
        .append($('<img>').attr('src', "images/album/eastern-rebellion.jpg").attr('class', 'image').attr('id', 'item-recordings')));
        // let $otherRecordingsImage = $('#image-container-recording')
        // .attr('class', 'im'))
        
        
        
        let otherRecordings = data.discography.recordings;
        let otherMapped = _.map(otherRecordings, function(a){
            return $('<li>').attr('class', 'recording')
            .append($('<div>').text(a.title).addClass('title'))
            .append($('<div>').text(a.artist).addClass('artist'))
            .append($('<div>').text(a.release).addClass('release'))
            .append($('<div>').text(a.year).addClass('year'))
            .attr('art', a.art);
        });
        $('#section-recordings').append($('<ul>').attr('id', "list-recordings" ).attr('class', "list-recordings"))
        .css('font-size', 15).css('font-color', 'black')
        
        
        _.each(otherMapped, function(ele){
            $('#list-recordings.list-recordings').append(ele);
        })
        
        // .attr('id', "list-recordings" ).attr('class', "list-recordings")
        
        // let $otherRecordings = $('#section-recordings').append(otherMapped).css('font-size', 15).css('color', 'black');
        
         $('.recording').on('click', function(event){
            let trigger = $(event.currentTarget);
            $('#item-recordings').attr('src', $(trigger).attr('art'));
            
        })
        
        
        
        
        
        let $background = $('#sidebar')
        .css('background-color', 'grey')
        .css('border-radius', '10px')
        .css('border-style', 'solid');
        
        
        //#####TABLE#####
        
        let billyRider = data.rider;
        // var riderType = _.map(billyRider, function(e){
        //     console.log(e.type)
        // })
        
        let billyTable = function(billyRider){
            var billyRow = function(rider){
                var $row = $('<tr>');
                var $type = $('<td>').text(rider.type)
                var $desc = $('<td>').text(rider.desc)
                $row.append($type);
                $row.append($desc);
                return $row;
            }
            var $table = $('<table>');
            var $rows = _.map(billyRider, billyRow);
            $table.append($rows);
            return $table;
        };
        
        console.log(billyTable)
        billyTable(billyRider).appendTo('#sidebar')
    
        
        
        
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
