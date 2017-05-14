(function () {
    var locations = [
        ["New york Headquarters", "PO Box 4668, New York, NY 10163-4668, US", true],
        ["Washington 1", "PO Box 96503, Washington, DC 20090-6503, US", false],
        ["Washington 2", "PO 12312, Washington, DC 343-334 US", true],
        ["Florida", "223 E. Concord Street, Orlando, FL 32801", false]
    ];

    locations.forEach(function (item) {
        var htmlString =
            '<div class="col-md-8 col-sm-6 col-xs-12" ><div class="alert alert-success">'
            + '<h5>' + item[0] + '</h5>'
            + '<p>' + item[1] + '</p>'
            + '<br/>'
            + (item[2] ? ' <span class="weekends label label-success">Opened in weekends</span>' : '')
            + '</div>'
            + '</div>';

        $("#locations").append($(htmlString));
    });
})();