$(document).ready(function(){
	

	$.ajax({
		url:"https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=imperial&appid=0c0bbef6afc5138e59d77792a534f5c0",
		type:"GET",
		dataType:"JSON",
        success: function(data) {
            // print all the JSON to the console
           	console.log(data.list[0].main.temp);
            console.log(data.list[1].main.temp);
            console.log(data.list[2].main.temp);

            var Moscow = $(".Photo1");
			var	KV= $(".Photo2");
			var London = $(".Photo3");

            $(".Photo1").html("The temp is: " + data.list[0].main.temp +"Fahrenheit in Moscow!");
	      	$('body').append(Moscow);
			$(".Photo2").html("The temp is: " + data.list[1].main.temp +"Fahrenheit in Kiev!");
			$('body').append(KV);
			$(".Photo3").html("The temp is: " + data.list[2].main.temp +"Fahrenheit in London!");
			$('body').append(London);

			
        },
        error: function(data, textStatus, errorThrown) {
        	console.log("whomp, whomp");
            //Do Something to handle error
            console.log(errorThrown);
        }	
    })
	//Moscow
	$(".Photo1").click(function(){
				$("#Moscow").toggle();
			})
	
	//KV
	$(".Photo2").click(function(){
				$("#KV").toggle();
			})
		//London
	$(".Photo3").click(function(){
				$("#London").toggle();
			})
	



})