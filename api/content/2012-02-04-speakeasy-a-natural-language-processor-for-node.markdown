I've been working lately on
[nodebot](http://github.com/nhunzaker/nodebot),
a helper robot written for node.js. It's forced me to learn quite
a few new skills, one of which being natural language processing.

This project has been in the works for quite a while now and it
suffers from a bit of bloat. To battle this I have begun to pull
elements of it into seperate modules. The first of which is
[SpeakEasy](http://github.com/nhunzaker/speakeasy), a natural language
processor.

The aim of the project isn't to be
[the Natural Language Toolkit](http://nltk.org), there is a
[wonderful project](https://github.com/NaturalNode/natural) with this
goal.
However it does perform some rather useful task such as calculate sentiment and draw basic
meaning out of statements. Check out some sample code:

    // Using Speakeasy
    //--------------------------------------------------//

    // Sentiment analysis
    var mood = require("speakeasy-nlp").sentiment;
    mood.analyze("I hate you");   //=> { score: -1, ..... }

    // Classifying statements
    var meaning = require("speakeasy-nlp").classify;
    meaning.classify("What is the meaning of life?") //==>
    /*
    {
        action: 'what',
        owner: 'life',
        subject: 'meaning',
        tokens: [ 'What','is', 'the', 'meaning', 'of', 'life','?' ]
    }
    */

Pretty neat eh? I have to admit it's a ton of fun to play with. Take a look at [nodebot](http://github.com/nhunzaker/nodebot)
or the new [twittermap](http://twittermap.nodejitsu.com) for some nice examples of what's posssible.

Also checkout the [project on Github](http://github.com/nhunzaker/speakeasy).
