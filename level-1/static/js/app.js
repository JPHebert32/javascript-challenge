// from data.js
var tableData = data;
  //console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select('tbody');

data.forEach(function(ufoSighting) {
  //console.log(ufoSighting);
});



 data.forEach((ufoSighting) => {
  var row = tbody.append('tr');
  Object.entries(ufoSighting).forEach(([key,value]) => {
    var cell = row.append('td');
    cell.text(value);
  });
 });

 var form = d3.select('#datetime').property('value');
  console.log(form);
