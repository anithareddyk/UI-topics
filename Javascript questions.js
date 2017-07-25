// Event Delegation :
// Event delegation allows us to attach a single event listener, to a parent element,
//  that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
 <html>
<body>
<div id="container">
    <ul id="list">
        <li><a href="http://domain1.com">Item #1</a></li>
        <li><a href="/local/path/1">Item #2</a></li>
        <li><a href="/local/path/2">Item #3</a></li>
        <li><a href="http://domain4.com">Item #4</a></li>
    </ul>
</div>
</body>
</html>

// The benefits of JavaScript event delegation are:

// There are less event handlers to setup and reside in memory. This is the big one; better performance and less crashing.
// There’s no need to re-attach handlers after a DOM update. If your page content is generated dynamically, via Ajax for example,
//  you don’t need to add and remove event handlers as elements are loaded or unloaded.

