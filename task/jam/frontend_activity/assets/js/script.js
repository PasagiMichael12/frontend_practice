$(document).ready(function () {
  $.ajax({
    url: "assets/js/data.json",
    type: "GET",
    datatype: "json/application",
    success: function (data) {
      let name = data.projects[0].name;
      let image = data.projects[0].image;
      let date = data.projects[0].date;
      let description = data.projects[0].description;
      let systemSize = data.projects[0].systemSize;
      let monthlyYield = data.projects[0].monthlyYield;
      let monthlySavings = data.projects[0].monthlySavings;
      let totalYield = data.projects[0].totalYield;
      let imageUrl = "assets/images/" + image;

      $('#mainImg').attr("src", imageUrl);
      $('#mainDesc').text(description);
      $('#mainName').text(name);
      $('#mainDate').text("Installed on " + date);
      $('#systemSize').text(systemSize + " kW");
      $('#monthlyYield').text(monthlyYield + " kWh");
      $('#monthlySavings').text("$" + monthlySavings);
      $('#totalYield').text(totalYield + " MWh");

      $("#proj1").click(function () {
        let name = data.projects[0].name;
        let image = data.projects[0].image;
        let date = data.projects[0].date;
        let description = data.projects[0].description;
        let systemSize = data.projects[0].systemSize;
        let monthlyYield = data.projects[0].monthlyYield;
        let monthlySavings = data.projects[0].monthlySavings;
        let totalYield = data.projects[0].totalYield;
        let imageUrl = "assets/images/" + image;

        $('#mainImg').attr("src", imageUrl);
        $('#mainDesc').text(description);
        $('#mainName').text(name);
        $('#mainDate').text("Installed on " + date);
        $('#systemSize').text(systemSize + " kW");
        $('#monthlyYield').text(monthlyYield + " kWh");
        $('#monthlySavings').text("$" + monthlySavings);
        $('#totalYield').text(totalYield + " MWh");
        $('#co-own').show();
        $('#checkProperty').show();
      });
      $("#proj2").click(function () {
        let name = data.projects[1].name;
        let image = data.projects[1].image;
        let date = data.projects[1].date;
        let description = data.projects[1].description;
        let systemSize = data.projects[1].systemSize;
        let monthlyYield = data.projects[1].monthlyYield;
        let monthlySavings = data.projects[1].monthlySavings;
        let totalYield = data.projects[1].totalYield;
        let imageUrl = "assets/images/" + image;

        $('#mainImg').attr("src", imageUrl);
        $('#mainDesc').text(description);
        $('#mainName').text(name);
        $('#mainDate').text("Installed on " + date);
        $('#systemSize').text(systemSize + " kW");
        $('#monthlyYield').text(monthlyYield + " kWh");
        $('#monthlySavings').text("$" + monthlySavings);
        $('#totalYield').text(totalYield + " MWh");
        $('#co-own').show();
        $('#checkProperty').show();
      });
      $("#proj3").click(function () {
        let name = data.projects[2].name;
        let image = data.projects[2].image;
        let date = data.projects[2].date;
        let description = data.projects[2].description;
        let systemSize = data.projects[2].systemSize;
        let monthlyYield = data.projects[2].monthlyYield;
        let monthlySavings = data.projects[2].monthlySavings;
        let totalYield = data.projects[2].totalYield;
        let imageUrl = "assets/images/" + image;

        $('#mainImg').attr("src", imageUrl);
        $('#mainDesc').text(description);
        $('#mainName').text(name);
        $('#mainDate').text("Installed on " + date);
        $('#systemSize').text(systemSize + " kW");
        $('#monthlyYield').text(monthlyYield + " kWh");
        $('#monthlySavings').text("$" + monthlySavings);
        $('#totalYield').text(totalYield + " MWh");
        $('#co-own').hide();
        $('#checkProperty').hide();
      });

    },
    error: function () {
      alert("error");
    },
  });
});