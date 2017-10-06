

var jsonData = $.ajax({
    url: '/output.json',
    dataType: 'json',
}).done(function (results) {
    console.log("good!");
});
