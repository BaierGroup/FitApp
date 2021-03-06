

google.load('visualization', '1', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
// google.setOnLoadCallback(drawSleepChart);
function drawChart(arr) {
  drawSleepChart(arr);
  drawStepsChart(arr);
  drawCalorieChart(arr);
}

function drawSleepChart(arr) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Days');
  data.addColumn('number', 'Hours');
  for (var i = 0; i < arr.length; i++) {
    var date = new Date(arr[i].timestamp);
    data.addRows([
      [lookUpTable[date.getDay() - 1], arr[i].sleep_hours]
    ]);
  }
  // Set chart options
  var options = {'width':800,
                 'height':600};
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('sleep_hours'));
  chart.draw(data, options);
}

function drawStepsChart(arr) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Days');
  data.addColumn('number', 'Steps');
  for (var i = 0; i < arr.length; i++) {
    var date = new Date(arr[i].timestamp);
    data.addRows([
      [lookUpTable[date.getDay() - 1], arr[i].steps]
    ]);
  }
  // Set chart options
  var options = {'width':800,
                 'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('running_steps'));
  chart.draw(data, options);
}

function drawCalorieChart(arr) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Days');
  data.addColumn('number', 'Calorie');
  for (var i = 0; i < arr.length; i++) {
    var date = new Date(arr[i].timestamp);
    data.addRows([
      [lookUpTable[date.getDay() - 1], arr[i].calorie]
    ]);
  }
  // Set chart options
  var options = {'width':800,
                 'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('calorie'));
  chart.draw(data, options);
}
