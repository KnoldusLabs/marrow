## Rendr

**Bottom line:** This is the future. I will be watching this framework _very_ closely, if I don't use it soon.

### 1. Development Seed

As of yet, this was the fastest app to develop.

Rendr recently had a significant update that cleaned up quite a few areas and drastically improved test coverage. I don't know if it was a product of that effort, but this has really become a fantastic framework. Every thing clearly has a place, and feels like it was designed to solve real problems.

- Server-side view generation in a way that feels familiar.
- All resources have URL persistence. Push state happens for free.
- Rendr interfaces with another API. In this case, my Marrow:API of blog post data.
  - This is a killer feature. I often already work with another dev who is responsible for API design.

My only hesitation with this framework is that it feels significantly less polished than the others. It's hard to tell if this is really ready for production. It _feels_ good, but I have no idea how to run a node.js server in production, yet alone pass it off to a client.

### 2. Bulk

`153kb (47kb gzipped)`

This is with Zepto, which seems to work great. Everything is super snappy. With a common backbone router, Rendr is really smart about caching API calls. After clicking around the site for a bit, I stop making any HTTP requests whatsoever.

### 3. Flexibility

I'm still out on this one. I imagine the framework is very flexible if you work from the ground up using its core, however I'm much more curious to see how it can be used with other supersets; specifically Thorax. If these two frameworks could work together, it would be seriously compelling.

### 4. Server side rendering

Rendr does _everything_ server side, sharing code with the client. If it can provide flexibility, it will be a holy grail of javascript app development.
