// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select('tbody');

function popTable(data) {
  tbody.html('');
  data.forEach((ufoSighting) => {
    // Creating table rows for each row of ufroSighting data
    var row = tbody.append('tr');
    //Iterating thru each row for key and values
    Object.entries(ufoSighting).forEach(([key,value]) => {
      // Creating cells for posting table data
      var cell = row.append('td');
      cell.text(value);
});
});
}

// Populate the Table
popTable(tableData);


function handleClick() {
  let dateValue  = d3.select('#datetime').property('value');
  //Filter Data
  let filteredData = tableData.filter(row => row.datetime === dateValue);
  popTable(filteredData);
  console.log(filteredData);
}

// Store value from form
var submit = d3.select("#filter-btn").on("click", handleClick);
