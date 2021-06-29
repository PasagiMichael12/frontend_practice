$(document).ready(function () {
  $.ajax({
    url: "assets/js/data.json",
    type: "GET",
    datatype: "json/application",
    success: function (data) {
      // global var
      var x = 0;

      // main() - get value from data.json
      function main() {
        var name = data.projects[x].name;
        var image = data.projects[x].image;
        var date = data.projects[x].date;
        var description = data.projects[x].description;
        var systemSize = data.projects[x].systemSize;
        var monthlyYield = data.projects[x].monthlyYield;
        var monthlySavings = data.projects[x].monthlySavings;
        var totalYield = data.projects[x].totalYield;
        var imageUrl = "assets/images/" + image;

        $('#mainImg').attr("src", imageUrl);
        $('#mainDesc').text(description);
        $('#mainName').text(name);
        $('#mainDate').text("Installed on " + date);
        $('#systemSize').text(systemSize + " kW");
        $('#monthlyYield').text(monthlyYield + " kWh");
        $('#monthlySavings').text("$" + monthlySavings);
        $('#totalYield').text(totalYield + " MWh");
      }

      // onload default values
      main($(document).ready());

      // call the main() function then change global var value - (card 1, 2, 3)
      // card 1
      $("#proj1").click(function () {
        main(x = 0);
      })
      // card 2
      $("#proj2").click(function () {
        main(x = 1);
      })
      // card 3
      $("#proj3").click(function () {
        main(x = 2);
      })
    },
    error: function () {
      alert("error");
    },
  });
});