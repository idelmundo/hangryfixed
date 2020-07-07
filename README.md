# hangryFixed

## About the project

This application provide the solution the constant battle of indecision on where to eat.

---

## User Story

    As A picky and indecisive eater
    I want to search restaurants near me
    That fullfills some search criteria such as price, location and offering take-out.
    
    As a gathering of big group of people
    I want an application that will randomly choose a restaurant
    So that we don't waste time figuring out where to eat.

---

## Getting started
Below are the prerequisite understanding and programs that were utilized :
* Visual Studio Code-click [here](https://code.visualstudio.com/) to a tutorial to install
* Github repository-click [here](https://help.github.com/en/github/)

* Bulma-click [here](https://bulma.io/documentation/)

* jQuery-click [here](https://code.jquery.com/jquery-3.4.1.min.js)

* aJax- click [here](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js)

* sweetalert- click [here](https://github.com/t4t5/sweetalert)

* Yelp API- click [here](https://www.yelp.com/developers/documentation/v3)

* Googlemaps API- click [here](https://developers.google.com/maps/documentation/javascript/tutorial)

* Tabulator- click [here](http://tabulator.info/docs/4.7)
---

## Code spotlight

The code snippet below does the following:

- create a function that will determine if the user input form is empty
- if the form is empty, a modal alert will let the user know to enter an address
- if the form is filled, it will take the input and reformat the user input into an accepted form for the application.
```js
{
     function validateForm() {
            if (userAddressInput == "") {
                swal({
                    icon: "error",
                    text: "Please enter an address, even the city will work!",
                    button: "Ok"
                });
                return false;
            }
            else {
                buildUserAdrress()
                fetchLocation(buildUserAdrress())
                window.open(href = "food-category.html");

            };
        };

        function buildUserAdrress() {
            return encodeURI(userAddressInput)
        };

}

## Code spotligth II 

-Create a random selection for the user to eat at
-Create a on click function they don't like the place
-Create a list of restaurant using tabulator. 
-Show a gif when they select other option and have it disapear for 4 seconds.

$("#option").on("click", function() { //pointing to the button 
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&tag=mutombo"; //direct to URL
        console.log(queryURL)

        var table = new Tabulator("#food-table", {
            data: businessList,
            reactiveDate: true,
            height: "311px",
            layout: "fitDataTable",
            columns: [
                { title: "Name", field: "name" },
                { title: "Phone #", field: "display_phone" },
                { title: "Address", field: "location.display_address" },
                { title: "Rating", field: "rating" },
                { title: "Price", field: "price" }

            ]
        });

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
                var imageUrl = response.data.image_original_url;
                var mutomboImage = $("<img>");
                mutomboImage.attr("src", imageUrl);
                mutomboImage.attr("alt", "mutombo image");

                $("#images").prepend(mutomboImage);

                setTimeout(function() {
                    mutomboImage.remove()
                }, 3000);

    });
```
## Demo


![Deployed Application](deployed-site.gif)
---

## Deployed link

[Live site](https://idelmundo.github.io/hangryfixed/)
---

## Author

**Mai Banh**
- [Link to Github](https://github.com/mtbanh)
- [Link to LinkedIn](https://www.linkedin.com/in/mai-banh-311ba6164/)

**Joe Davis**
- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)

**Isaias Del Mundo**
- [Link to Github](https://github.com/idelmundo)
- [Link to LinkedIn](https://www.linkedin.com/in/isaiasdelmundo/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

