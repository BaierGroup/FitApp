
$(document).ready(function() {
  var text = $("#hSleep").text();
    var results = [];
    var data = [];
    results = text.split(",");
    // alert(results);
    console.log("results: " + text);
    for(var i = results.length-1; i >= 0; i--) {
        data.push([new Date(results[i-1]).getTime(), results[i]]);
        i--;
    }

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 43200000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        grid: {
            hoverable: true
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "Date: %x, Minutes: %y"
        }
    };
    var barData = {
        label: "bar",
        data: data
    };
    $.plot($("#flot-bar-chart"), [barData], barOptions);

    text = $("#hSteps").text();
    results = text.split(",");
    data = [];
    for(var i = results.length-1; i >= 0; i--) {
        data.push([new Date(results[i-1]).getTime(), results[i]]);
        i--;
    }
    var options = {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        grid: {
            hoverable: true //IMPORTANT! this is needed for tooltip to work
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        tooltip: true,
        tooltipOpts: {
            content: "'Date: %x.1, Steps: %y",
            shifts: {
                x: -60,
                y: 25
            }
        }
    };
    var plotObj = $.plot($("#flot-line-chart"), [{
            data: data,
            label: "Steps"
        }],
        options);
});


function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('sleep_hours'));
        chart.draw(data, options);
}

// function drawSleepChart(arr) {
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Days');
//   data.addColumn('number', 'Hours');
//   for (var i = 0; i < arr.length; i++) {
//     var date = new Date(arr[i].timestamp);
//     data.addRows([
//       [lookUpTable[date.getDay() - 1], arr[i].sleep_hours]
//     ]);
//   }
//   // Set chart options
//   var options = {'width':800,
//                  'height':600};
//   // Instantiate and draw our chart, passing in some options.
//   var chart = new google.visualization.BarChart(document.getElementById('sleep_hours'));
//   chart.draw(data, options);
// }
//
// function drawStepsChart(arr) {
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Days');
//   data.addColumn('number', 'Steps');
//   for (var i = 0; i < arr.length; i++) {
//     var date = new Date(arr[i].timestamp);
//     data.addRows([
//       [lookUpTable[date.getDay() - 1], arr[i].steps]
//     ]);
//   }
//   // Set chart options
//   var options = {'width':800,
//                  'height':600};
//
//   // Instantiate and draw our chart, passing in some options.
//   var chart = new google.visualization.ColumnChart(document.getElementById('running_steps'));
//   chart.draw(data, options);
// }
//
// function drawCalorieChart(arr) {
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Days');
//   data.addColumn('number', 'Calorie');
//   for (var i = 0; i < arr.length; i++) {
//     var date = new Date(arr[i].timestamp);
//     data.addRows([
//       [lookUpTable[date.getDay() - 1], arr[i].calorie]
//     ]);
//   }
//   // Set chart options
//   var options = {'width':800,
//                  'height':600};
//
//   // Instantiate and draw our chart, passing in some options.
//   var chart = new google.visualization.LineChart(document.getElementById('calorie'));
//   chart.draw(data, options);
// }
