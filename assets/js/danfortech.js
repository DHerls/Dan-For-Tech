$('.carousel').carousel({
  interval: 10000
});

var numTechChartAppeared = false;
var goodsearchAppeared = false;

$('#numTechChart').appear();
$('#numTechChart').on('disappear', function(event, $all_appeared_elements) {
	numTechChartAppeared = false;
});
$('#numTechChart').on('appear', function(event, $all_appeared_elements) {
	if (numTechChartAppeared){
		return;
	} else {
		numTechChartAppeared = true;
	}
	
	CanvasJS.addColorSet("techChart",[
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#0964bf",
		"#06c92d"
	]);
	$("#numTechChart").CanvasJSChart({
		title: {
			text: "Number of Tech Chairs by Year"
		},
		animationEnabled: true,
		animationDuration: 2000,
		colorSet:  "techChart",
		axisX:{
		   valueFormatString: "####",
		 },
		axisY:{
			interval: 1,
			   viewportMaximum: 1.1,
		},
		data: [
		{
			xValueFormatString: "####",
			type: "column",
			dataPoints: [
				  { x: 2005, y: 0 },
				  { x: 2006, y: 0 },
				  { x: 2007, y: 0 },
				  { x: 2008, y: 1 },
				  { x: 2009, y: 1 },
				  { x: 2010, y: 0 },
				  { x: 2011, y: 0 },
				  { x: 2012, y: 0 },
				  { x: 2013, y: 1 },
				  { x: 2014, y: 1 },
				  { x: 2015, y: 0 },
				  { x: 2016, y: 0 },
				  { x: 2017, y: 0 },
				  { x: 2018, y: 1 }
			]
		}
		]
	});
});

$('#goodsearchChart').appear();
$('#goodsearchChart').on('disappear', function(event, $all_appeared_elements) {
	goodsearchAppeared = false;
});
$('#goodsearchChart').on('appear', function(event, $all_appeared_elements) {
	if (goodsearchAppeared){
		return;
	} else {
		goodsearchAppeared = true;
	}

	$("#goodsearchChart").CanvasJSChart({
		title: {
			text: "Goodsearch Revenue by THON Year"
		},
		animationEnabled: true,
		animationDuration: 2000,
		axisY:{
            valueFormatString:"$###.00",
        },
		 toolTip:{
			content:"{label} {name}: {y}" ,
		},
		data: [
		{
			type: "line",
			yValueFormatString:"$###.00",
			name: "2014",
			showInLegend: true,
			dataPoints: [
				{ y: 81.63, label: "September"},
				{ y: 135.14, label: "October"},
				{ y: 80.17, label: "November"},
				{ y: 62.50, label: "December"},
				{ y: 44.65, label: "January"},
				{ y: 28.49, label: "February"},
			]
		},
		{
			type: "line",
			yValueFormatString:"$###.00",
			name: "2015",
			showInLegend: true,
			dataPoints: [
				{ y: 53.81, label: "September"},
				{ y: 74.90, label: "October"},
				{ y: 35.47, label: "November"},
				{ y: 57.27, label: "December"},
				{ y: 87.51, label: "January"},
				{ y: 65.51, label: "February"},
			]
		},
		{
			type: "line",
			name: "2016",
			yValueFormatString:"$###.00",
			showInLegend: true,
			dataPoints: [
				{ y: 16.81, label: "September"},
				{ y: 11.79, label: "October"},
				{ y: 8.55, label: "November"},
				{ y: 9.10, label: "December"},
				{ y: 7.76, label: "January"},
				{ y: 5.41, label: "February"},
			]
		},
				{
			type: "line",
			name: "2017",
			yValueFormatString:"$###.00",
			showInLegend: true,
			dataPoints: [
				{ y: 16.88, label: "September"},
				{ y: 162.37, label: "October"},
				{ y: 184.26, label: "November"},
				{ y: 119.93, label: "December"},
				{ y: 104.51, label: "January"},
				{ y: 109.55, label: "February"},
			]
		},
		]
	});
});