(function () {
    var employees = [
        ["Bill", "images/bill.jpg", "bill@example.com"],
        ["Jill", "images/jill.jpg", "jill@example.com"],
        ["Jane", "images/jane.jpg", "Jane@example.com"],
        ["Joe", "images/joe.jpg", "Joe@example.com"]
    ];

    employees.forEach(function (item) {
        var htmlString =
            '<div class="employee col-md-3">'
            + '<h3>' + item[0] + '</h3>'
            + '<img src="' + item[1] + '"/>'
            + '<p>' + item[2] + '</p>'
            + '</div>';

        $("#employees").append($(htmlString));
    });
})();