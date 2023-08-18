var city = "Seoul";
var lang = "kr";
var key = "5fc05e00b4b237301b07feb310b7ff8f"

var dayApiURI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&lang="+lang+"&units=metric";
        $.ajax({
            url: dayApiURI,
            dataType: "json",
            type: "GET",
            async: false,
            success: function(resp) {
                console.log(resp);
                console.log("현재온도 : "+ (resp.main.temp- 273.15) );
                console.log("현재습도 : "+ resp.main.humidity);
                console.log("날씨 : "+ resp.weather[0].main );
                console.log("상세날씨설명 : "+ resp.weather[0].description );
                console.log("날씨 이미지 : "+ resp.weather[0].icon );
                console.log("바람 : "+ resp.wind.speed );
                console.log("나라  : "+ resp.sys.country );
                console.log("도시이름 : "+ resp.name );
                console.log("구름 : "+ (resp.clouds.all) +"%" );
           }
       })


var weekApiURI = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+key+"&lang="+lang+"&units=metric";
        $.ajax({
            url: weekApiURI,
            dataType: "json",
            type: "GET",
            async: false,
            success: function(resp) {
                console.log(resp);
                console.log("현재온도 : "+ (resp.main.temp- 273.15) );
                console.log("현재습도 : "+ resp.main.humidity);
                console.log("날씨 : "+ resp.weather[0].main );
                console.log("상세날씨설명 : "+ resp.weather[0].description );
                console.log("날씨 이미지 : "+ resp.weather[0].icon );
                console.log("바람 : "+ resp.wind.speed );
                console.log("나라  : "+ resp.sys.country );
                console.log("도시이름 : "+ resp.name );
                console.log("구름 : "+ (resp.clouds.all) +"%" );
        }
    })

