    

 //CLICK for past data
document.querySelector('.past-js').addEventListener("click", function(){
    var notes = document.querySelector('.notes');
   notes.innerHTML="(54 Countries)"

       google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([

          ['Country', ''],
          ['Australia', 1,],
          ['Brazil', 1],
          ['India', 1],
          ['Israel', 1],
          ['Central African Republic', 1],
          ['Portugal', 1],
          ['Dominica', 1],
          ['Norway', 1],
          ['Pakistan', 1],
          ['Lithuania', 1],
          ['Turkey', 1],
          ['Canada', 1],
          ['Burundi', 1],
          ['Rwanda', 1],
          ['NZ', 1],
          ['Mozambique', 1],
          ['Ukraine', 1],
          ['Moldova', 1],
          ['Iceland', 1],
          ['Croatia', 1],
          ['Madagascar', 1],
          ['Argentina', 2],
          ['Denmark', 1],
          ['Latvia', 1],
          ['Andorra', 1],           
          ['Antigua', 1],
          ['Phillipines', 1],
          ['Ireland', 2],
          ['Bolivia', 1],
          ['Dominica', 1],
          ['Malta', 1],
          ['United Kingdom', 1],
          ['Sri Lanka', 1],
          ['Lithuania', 1],
          ['Nicaragua', 1],
          ['Bulgaria', 1],
          ['Haiti', 1],
          ['Switzerland', 1],
          ['Panama', 1],
          ['Finland', 1],
          ['Indonesia', 1],
          ['Sao Tome', 1],
          ['Serbia', 1],
          ['Peru', 1],
          ['Macedonia', 1],
          ['Jamaica', 1],
          ['Croatia', 1],
          ['Costa Rica', 1],
          ['Trinidad And Tobago', 1],
          ['Kyrgyzstan', 1],
          ['Slovakia', 1],
          ['Kosovo', 1],
          ['Thailand', 1],
          ['Malawi', 1],
   
        ]);

        var options = {
          colorAxis: {colors: ['#ffcb92', '#ffcb92' ]},
          datalessRegionColor: '#e6e6e6',
          backgroundColor: "#11a8e0",
          legend: 'none',
          tooltip: 'none',
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

      });



//click for PRESENT data
document.querySelector('.present').addEventListener("click", function(){
    var notes = document.querySelector('.notes');
   notes.innerHTML="(15 Countries)";

       google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', ''],
          ['Germany', 1],
          ['Liberia', 1],
          ['United Kingdom', 1],
          ['South Korea', 1],
          ['Norway', 1],
          ['Chile', 1],
          ['Bangladesh', 1],
          ['Malta', 1],
          ['Croatia',1],
          ['Namibia', 1],
          ['Mauritius', 1],
          ['Nepal', 1],
          ['Poland', 1],
          ['Taiwan', 1],
          ['Estonia', 1]
          
        ]);

        var options = {
          colorAxis: {colors: ['#E54028']},
          datalessRegionColor: '#e6e6e6',
          backgroundColor: "#11a8e0",
          legend: 'none'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

      });

//Click for FUTURE data
document.querySelector('.future').addEventListener("click", function(){
   console.log("#imwithher");
   var notes = document.querySelector('.notes');
   notes.innerHTML="(Coming January 2017...)";


       google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', ''],
          ['USA', 1],
        
          
        ]);

        var options = {
          colorAxis: {colors: ['#e51e2e' ]},
          datalessRegionColor: '#e6e6e6',
          backgroundColor: "#11a8e0",
          legend: 'none'
        
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

      });

//Click to refresh
document.querySelector('.header').addEventListener("click", function(){
   var notes = document.querySelector('.notes');
   notes.innerHTML = "While the number of female leaders has more than doubled since 2005, a woman in power is hardly the norm around the world. Sixty-three of 142 nations studied by the World Economic Forum have had a female head of government or state at some point in the 50 years up to 2014, but in nearly two-thirds of those nations a woman was in power for less than four of the 50 years, including 11 countries (17%) where a woman led for less than a year."
      var regions = document.querySelector('.regions');
      regions.innerHTML = " ";


    });


