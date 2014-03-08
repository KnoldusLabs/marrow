[Flatiron](http://flatironjs.org/) is a framework maintained by the guys over at
[nodejitsu](http://nodejitsu.com/). It's great, I've moved most of my pet node
projects over to it. This has been mostly painless, however I will say
that hit some discomfort with configuring socket.io.

In retrospect, it's actually rather simple process. Let's look at some code.

    // found in lib/flatiron/plugins/http.js
    app.start = function (port, host, callback) {
        [... code ...]
        app.listen(port, host, callback);
    };

    app.listen = function (port, host, callback) {
      [... code ...]
      app.server = union.createServer({
        after: app.http.after,
        before: app.http.before.concat(function (req, res) {
          if (!app.router.dispatch(req, res, app.http.onError || union.errorHandler)) {
            if (!app.http.onError) res.emit('next');
          }
        }),
        headers: app.http.headers,
        limit: app.http.limit
      });
      [... code ...]
    };

The confusion (in my case, anyway) occurs because the `server` property
of `flatiron.app` is only available after the `start` function has
been explicitly called. This means that socket.io can only listen to
the flatiron server after you've told it to start (when the server
property is actually created).

It's okay if that sounds confusing, it tripped me up too. The solution
is rather simple: set up socket.io after the server has started, like
so:

    app.start(8080);

    var io = require('socket.io').listen(app.server);

    io.sockets.on('connection', function(socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function(data) {
            console.log(data);
        });
    });

I've submitted a related
[pull request](https://github.com/flatiron/flatiron/pull/22) with a
good example of what the whole process looks like. Hopefully this will help eliminate further confusion.
