// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select('tbody');

// Populate Table Function
function popTable(data) {
  //Clear Existing Table
  tbody.html('');
  //Use d3 to update each cell's text with
  // UFO Sightings values (weekday, date, high, low)
  data.forEach((ufoSighting) => {
    // Append table header from data
    var row = tbody.append('tr');
    //Use `Object.entries` data value
    Object.entries(ufoSighting).forEach(([key,value]) => {
      // Append a cell to the row for each value
      var cell = row.append('td');
      cell.text(value);
});
});
}

// Populate the Table
popTable(tableData);

// Filter Table by enter date Function
function handleClick() {
  let dateValue  = d3.select('#datetime').property('value');
  //Filter Data
  let filteredData = tableData.filter(row => row.datetime === dateValue);
  popTable(filteredData);
  console.log(filteredData);
}

// Store value from form
var submit = d3.select("#filter-btn").on("click", handleClick);
