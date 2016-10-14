angular.module("AnimeApp", [])
    .controller("MainController", ['$http', function($http) {
        var main = this;

        main.asteroidList = [];

        main.name = "test";

        main.searchName = "";

        // $http.get("https://api.nasa.gov/planetary/apod?api_key=inFehaJWogK6MJMMdjpHf7GVLaXd9ZUUoASwbBBt")
        //     .success(function(data) {
        //         main.animeList.push({
        //
        //         }).error(function(data) {
        //             console.log(error);
        //         })
        //     });

        var url = "https://api.nasa.gov/planetary/apod?api_key=nEgKTbShoBFDxw4UyQCIgvw1EtDfGksjFeXDe4YS";


        $.ajax({
            url: url,
            success: function(result) {
                if ("copyright" in result) {
                    $("#copyright").text("Image Credits: " + result.copyright);
                } else {
                    $("#copyright").text("Image Credits: " + "Public Domain");
                }

                if (result.media_type == "video") {
                    $("#apod_img_id").css("display", "none");
                    $("#apod_vid_id").attr("src", result.url);
                } else {
                    $("#apod_vid_id").css("display", "none");
                    $("#apod_img_id").attr("src", result.url);
                }
                $("#reqObject").text(url);
                $("#returnObject").text(JSON.stringify(result, null, 4));
                $("#apod_explaination").text(result.explanation);
                $("#apod_title").text(result.title);
            }
        });
        main.getDay = function() {
            main.editable = !main.editable;
            $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2016-10-08&end_date=2016-10-14&api_key=nEgKTbShoBFDxw4UyQCIgvw1EtDfGksjFeXDe4YS')
                .success(function(data) {
                  main.asteroidList = [];
                    for (var i = 0; i <= main.asteroidList.length; i++) {
                        console.log(main.asteroidList.length);
                        main.asteroidList.push({
                            name: data.near_earth_objects[main.searchName][i]["name"],
                            is_potentially_hazardous_asteroid: data.near_earth_objects[main.searchName][i]["is_potentially_hazardous_asteroid"],
                            url: data.near_earth_objects[main.searchName][i].nasa_jpl_url,
                            diameter: data.near_earth_objects[main.searchName][i].estimated_diameter.feet.estimated_diameter_max,
                            velocity: data.near_earth_objects[main.searchName][i].close_approach_data[0].relative_velocity.miles_per_hour,
                            distance: data.near_earth_objects[main.searchName][i].close_approach_data[0].miss_distance.miles,

                        });

                    }
                    console.log(main.asteroidList);
                });
        }

        // $.ajax('http://epic.gsfc.nasa.gov/api/images.php', {
        //     success: function(iDataArr, stat, xhr) {
        //         main.animeList = [1, 2, 3];
        //     }
        // });



    }]);
