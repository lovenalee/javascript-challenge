// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Display the entire dataset as default

tableData.forEach((record) => {
    console.log(record);
    var row = tbody.append('tr');

    Object.entries(record).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputdate = d3.select("#datetime").property("value");
    console.log(inputdate);

    // Filter reports
    var filteredData = tableData.filter(info => info.datetime === inputdate);
    console.log(filteredData);

    // Display the filtered dataset
    filteredData.forEach((record) => {
        var row = tbody.append('tr');

        Object.entries(record).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });


});

