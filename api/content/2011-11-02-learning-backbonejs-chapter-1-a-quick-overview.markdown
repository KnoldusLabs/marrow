> I've found it difficult to find a guide for learning Backbone.js. They're probably out there -- but it isn't easy. **This is the first in a series of articles dedicated to giving a complete overview of Backbone.js through simple examples and concise code.**

> Something of a **cookbook**, you might say.

---

### What you'll need:

1. **[Underscore.js](http://documentcloud.github.com/underscore)**: A required library for Backbone, it also adds over 60 functions for making Javascript development easier.
2. **[Backbone.js](http://documentcloud.github.com/backbone/)**: The meat of it. This is what we will use for all the magic.

---
### What we're making

Today we'll make a map which displays tweets via the Google Maps API and twitter search results (For the sake of simplicity, we won't go in to the Twitter API yet). We'll focus on fundamental construction using the **Model**, **Collection ** and **View** components of Backbone.

![Twittermap](/img/article_1/twittermap.png)

Hopefully, by the end of this you will have a beautiful night sky lit up by tweets around North America. Let's get started!

---

### A brief introduction:

Backbone.js is used to "supply structure to Javascript-heavy applications". It separates logic into **Models**, **Views**, **Collections**, and **Routers**.

![Architecture](/img/article_1/Backbone_Arch.png)

A typical Backbone application will use **models** to keep track of information, assisted by **collections** (groups of data). **Views** help display this information, by binding themselves to changes in data. **Routers** help orchestrate all of this by providing the ability to navigate to various parts of an application seamlessly.

### Backbone is Model Driven

At the core of all Backbone applications are models. Models, as you may have guessed, act as the base level of information. Since the purpose of our application is to display tweets, let's create a model to define them here:

    // Creates a "Tweet" model based upon the Backbone.Model object
    var Tweet = Backbone.Model;

    // Instantiates the tweet model:
    var myTweet = new Tweet({
        from_user : "natehunzaker",
        text : "Grow you a #backbone for great good!"
    });

What just happened? First we created duplicate of the Backbone Model object. Next we instantiated it as a new Tweet within the **myTweet** variable.

Pretty simple. But let's say we don't want a carbon copy of the Backbone model? Perhaps we need to add custom methods to our model, or we want to define the same defaults for every instance of the Tweet model. Let's create a new model which **extends** the base Backbone.Model object:

    // Creates a "Tweet" model based upon the Backbone.Model object
    var Tweet = Backbone.Model.extend({
        defaults: {
            from_user : "natehunzaker",
            text      : "Grow you a #backbone for great good!"
        }
    });

    // Instantiates the tweet model:
    var myTweet = new Tweet();

    console.log(myTweet.toJSON()); //= { from_user: "natehunzaker", text: "Grow you a #backbone for great good!"

I threw in another function here, **.toJSON()**. For models, this will return a JSON representation of the model's attributes. When used on collections, it will return an Array of JSON objects for each model it contains.


### Working with Collections.

The Tweet model will work well for this application, however we'll need to keep track of more than one of them. This is where **collections** come in to play. Collections are designed to create, delete, and manage groups of models. Let's create one here:

    var Tweet = Backbone.Model;

    var tweetsCollection = new Backbone.Collection({
        model: Tweet
    });

    tweetsCollection.add({
        from_user : "natehunzaker",
        text      : "Grow your JS a #backbone for great good!"
    });

Noticing a trend? Here we first create a Tweet model. Then we create the TweetsCollection collection which references this model. Finally, we use the **add** method of collections to create a new Tweet within with the collection.

### Backbone objects have events

In addition to this, all backbone objects can respond to events. Say, for example, you wish to perform an action every time a new record is added to a collection. Consider the following:

    var Tweet = Backbone.Model;

    var tweetsCollection = new Backbone.Collection({
        model: Tweet,

        initialize: function() {
            this.bind('add', function(model) {
                alert("Oh snap, we have a model!");
            });
        }
    });


    // Will fire the 'add' event of the TweetsCollection
    tweetsCollection.add({
        from_user : "natehunzaker",
        text      : "Grow your JS a #backbone for great good!"
    });

Pretty simple huh? Backbone events are powerful, I would recommend doing some [reading](http://documentcloud.github.com/backbone/#FAQ-events) on what events are available to models and collections. There are some really neat things you can do with them.

---

### Pulling it all Together

Now that we've established some form of a basic understanding, let's get in to the application! First we need some initial construction:

    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">

        <title>Twitter Map</title>

        <link rel="stylesheet" href="css/style.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>

      </head>

      <body>

        <header>Twitter Map</header>

        <div id="map_canvas"></div>

        <footer></footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js"></script>
        <script src="js/map.js"></script>

      </body>
    </html>

    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    @import url("reset.css");

    @import url(http://fonts.googleapis.com/css?family=Lobster);

    body {
        font-family: sans-serif;
    }

    header {
        background: #222;
        box-shadow: inset 0 -3px 5px #000, 0 1px 0 rgba(255,255,255, 0.15);
        color: #fff;
        font: 400 16px/2.5em "Lobster", sans-serif;
        text-shadow: 0 1px 3px #000;
        text-indent: 15px;
    }

    #map_canvas {
        width: 100%;
    }

Cool. Now in your **js** folder, add a file called "map.js". We'll add all of the backbone code into here. From this point on we'll pick up quite a bit of speed, but I'll be sure to comment on everything new along the way.

Let's recycle some of the code made earlier, with some additions:

    // Twitter Map
    $(function() {

    //-- Data ---------------------------------------------------------------------//

        var Tweet = Backbone.Model;

        var Tweets = Backbone.Collection.extend({

            // The search url which will pull in all tweets 1000 miles from roughly the center of the United States
            url: "http://search.twitter.com/search.json?callback=?&count=100&rpp=100&geocode=35.5,-100,1000mi",

            // Filters information before it is passed into the collection
            parse: function(response) {

                // Filter all tweets without a specific geolocation
                var filtered = _.filter(response.results, function(d) {
                    if (d.geo !== null) {
                        return true;
                    }
                });

                this.add(filtered);

            },

            initialize: function() {

              // Search for more tweets every 2 seconds
              setInterval(function() {
                  console.log("Fetching fresh data...");
                  tweets.fetch();
              }, 2000)

              this.fetch();
            }
      });

    });

Overall not too bad, but there are some new elements here. **url**, **fetch**, **parse**, and **initialize**.

* **url**: Backbone is designed enable easy access to information on a server. When we set the `url` property, we tell the collection where it can find information.
* **fetch**: Once a url has been established, `fetch` can be used to retrieve new information. In this case, we will request a json object from the Twitter search service.
* **parse**: A handy function. Whenever the `fetch` event is fired, parse enables you to preprocess data before it is stored in the collection. In example above, we use the underscore method `_.filter()` <sub><a href="#two">2</a></sub> to prevent any tweets that do not have a specific geolocation from being stored.
* **initialize**: A staple of Backbone. Initialize is a method of each backbone object which will always run upon instantiation (in this case, the collection). Here we tell it to fetch new information from the server at an interval of 2 seconds.

---

### Using Views

In order to display these tweets, we'll need to create a view for the map. As said earlier, views are the presentational element associated with Backbone; we'll use them to display content from our collection. I think views are best taught through example, so let's jump right in to it. Take a close look at the preceding code and add it right after your model and collection code

    $(function() {

    //... Model and Collection code ...//


    //-- Views --------------------------------------------------------------------//

        var Map = Backbone.View.extend({

            el: $('#map_canvas'),

            initialize: function() {

                // Roughly the center of the United States
                var latlng = new google.maps.LatLng(35.5, -100);

                // Google Maps Options
                var myOptions = {
                    zoom: 5,
                    center: latlng,
                    mapTypeControl: false,
                    navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.ANDROID
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    streetViewControl: false,
                    styles: [{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",stylers:[{hue:"#0000ff"},{lightness:-84},{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:-61},{lightness:-63}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{},{}]

                };

                // Force the height of the map to fit the window
                this.$el.height($(window).height() - $("header").height());

                // Add the Google Map to the page
                var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

                // Bind an event to add tweets from the collection

                this.collection.bind('add', function(model) {

                    // Stores the tweet's location
                    var position = new google.maps.LatLng( model.get("geo").coordinates[0], model.get("geo").coordinates[1]);

                    // Creates the marker
                    // Uncomment the 'icon' property to enable sexy markers. Get the icon Github repo:
                    // https://github.com/nhunzaker/twittermap/tree/master/images
                    var marker = new google.maps.Marker({
                      position: position,
                      map: map,
                      title: model.from_user,
                      //icon: 'images/marker.png',
                      description: model.text
                    });


                });
            }
        }); //-- End of Map view

    }); //-- End of main function

A lot going on there, right? Let's take a look at everything going on.

* **Line 10:** The `el` property is used to describe the html element associated with a view. In this case, we select the #map_canvas div tag.
* **Lines 14-31:** Standard Google Maps API stuff. This is where the map gets generated. Note that we set the height of the map_canvas to the height of the window to make sure the map is the correct size.
* **Lines 36-51:** Here we add an event to add a tweet to the map every time the collection associated with this view adds a new record.

** UPDATE :** Newer versions of Backbone will actively make a distinction
between `el` and `$el`. Use `el` to access the raw HTML DOM object.
Use `$el` to access the jQuery version, for example:

    // Without jQuery:
    this.el.text = "Hello world";

    // Use jQuery:
    this.$el.text("I'm using jQuery!");

---

### Initialize!

Finally, we instantiate the tweets collection and map view, setting everything in motion:

    $(function() {

    //... Mode, Collection, and View code ...//


    //-- Initialize ---------------------------------------------------------------//

        // Create an instance of the tweets collection
        var tweets = new Tweets({
            model: Tweet
        });

        // Create the Map view, binding it to the tweets collection
        var twitter_map = new Map({
            collection: tweets
        });

    });

---

### Cool, a TwitterMap.

Pop open the browser and take a look at your freshly created TwitterMap! We *could* use the Twitter API to make the tweets appear at an exceptionally faster rate. However you really can't beat the simplicity of the basic search.


### Conclusion

I'm not the first person to write a tutorial on backbone to say *"But we've only scratched the surface"*, and I certainly won't be the last. Future installments will delve into a more detailed overview of how models and collections work. We'll go through events, syncing information, and other important concepts. I look forward to showing you what can be done within Backbone!
