module.exports = function(Handlebars) {

var templates = {};

templates["categories/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<article class=\"preview\">\n			<time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['pretty-date'] || depth0['pretty-date']),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "pretty-date", depth0.date, options)))
    + "</time>\n			<section class=\"content\">\n				<h2 class=\"title\">\n					<a href=\"/posts/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n				</h2>\n			</section>\n		</article>\n	";
  return buffer;
  }

  buffer += "<section class=\"home\" role=\"content\">\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>\n";
  return buffer;
  });

templates["posts/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<article class=\"preview\">\n			<time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['pretty-date'] || depth0['pretty-date']),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "pretty-date", depth0.date, options)))
    + "</time>\n			<section class=\"content\">\n				<h2 class=\"title\">\n					<a href=\"/posts/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n				</h2>\n			</section>\n		</article>\n	";
  return buffer;
  }

  buffer += "<section class=\"home\" role=\"content\">\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>\n";
  return buffer;
  });

templates["posts/show"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n				<a href=\"/categories/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a>\n			";
  return buffer;
  }

  buffer += "<article role=\"content\" class=\"single\">\n	<header>\n		<h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n		<div class=\"meta\">\n			<time datetime=\"";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"date\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['pretty-date'] || depth0['pretty-date']),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "pretty-date", depth0.date, options)))
    + "</time>\n			&lsaquo;\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.categories) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.categories; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.categories) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			&rsaquo;\n		</div>\n	</header>\n\n	<section class=\"body\">\n		<p>";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.content; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n	</section>\n</article>\n";
  return buffer;
  });

return templates;

};