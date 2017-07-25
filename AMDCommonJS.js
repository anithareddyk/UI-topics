// AMD and CommonJS are both Javascript module loader. They accomplish the same task but works different.
// AMD is better for browser, hence, the name ‘Asynchronous’,
//  as it loads each distinct module in async manner instead of loading in one large file.
//   No extra steps are required to use AMD, it works out-of-the-box. In my opinion, as it is its in Asynchronous nature,
//  it makes alot of async http requests and may not be as performant as described by other devs.
// While, CommonJS, is a standard, 
// mostly used in servers and it loads modules synchronously, 
// though extra step is required if you want your JS file size to be minified and compressed.
// Why do we need to use Javascript module loader?
// Usually, JS files are loaded in order via script tag in HTML templates, 
// but files and code gets complicated once an application becomes large. 
// Javascript module loaders lets us separate our code into modules and 
// include a specific module in another module. 
// This lets us import what module is required and load only the necessary.
//  Better Javascript file size load and better code compartmentalization, means,
//  JS module loader mitigates away the danger of global-namespace issue.


// So, CommonJS and AMD are JavaScript module definition APIs that have different implementations, 
// but both come from the same origins.

// AMD is more suited for the browser, because it supports asynchronous loading of module dependencies.
// RequireJS is an implementation of AMD, while at the same time trying to keep the spirit of
//  CommonJS (mainly in the module identifiers).
// To confuse you even more, RequireJS, while being an AMD implementation, 
// offers a CommonJS wrapper so CommonJS modules can almost directly be imported into use with RequireJS.