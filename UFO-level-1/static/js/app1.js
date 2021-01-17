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
var button = d3.select("#filter-btn");



// Create event handlers 
button.on("click", runEnter)

// Complete the event handler function
function runEnter() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputdate = d3.select("#datetime").property("value");
    console.log(inputdate);

    // Filter data
    var filteredData = tableData.filter(info => info.datetime === inputdate);
    console.log(filteredData);

    // Display filtered dataset
    filteredData.forEach((record) => {
        var row = tbody.append('tr');

        Object.entries(record).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
};




