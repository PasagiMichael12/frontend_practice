$(document).ready(function () {
    $("#celcius").click(function () {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=";
        let token = "&appid=14c7e3329c0a2fd5fd361115a1015690";
        let celcius = "&units=metric";
        let city = $("#city").val();

        $.ajax({
            url: `${url + city + token + celcius}`,
            type: "get",
            dataType: "json",
            success: function (data) {
                $("#cityPlace").text(city);
                $("#geolocation").text(
                    `${data.coord.lon}` + ` , ${data.coord.lat}`
                );

                $(data).each(function (index, value) {
                    $(data.main).each(function (index, value) {
                        var temp = value.temp;
                        $("#temp").text(temp.toFixed(0)).append("<sup>o</sup>");
                    });
                    $("#desc").text(value.weather[0].description);

                    var month = new Array();
                    month[0] = "January";
                    month[1] = "February";
                    month[2] = "March";
                    month[3] = "April";
                    month[4] = "May";
                    month[5] = "June";
                    month[6] = "July";
                    month[7] = "August";
                    month[8] = "September";
                    month[9] = "October";
                    month[10] = "November";
                    month[11] = "December";

                    var d = new Date();
                    var month = month[d.getMonth()];
                    var day = d.getDate();
                    var year = d.getFullYear();

                    $("#year").text(year);
                    $("#date").text(month + " " + day);
                });
            },
            error: function (error) {
                alert("error");
            },
        });
    });
});