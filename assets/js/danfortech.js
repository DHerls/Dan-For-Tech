$('.carousel').carousel({
  interval: 10000
});

var numTechChartAppeared = false;

$('#numTechChart').appear();
$('#numTechChart').on('disappear', function(event, $all_appeared_elements) {
	console.log("Disappeared");
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