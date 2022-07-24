a. <b> What is the main functionality of the browser? <b/>

<p>The main function is to retrieve information from the World Wide Web and making it available for users <p>

b.High Level Components of a browser.

<p>
1. User Interface (How user interact with browser)
2. Browser Engine (Bridge between UI and Rendering Engine)
3. Rendering Engine (Render content based on the response type ex. Html,CSS)
4. Networking (Make network requests ex. to fetch/post data)
5. Javascript Interpreter (Parsing and executing Javascript code)
</p>

c.Tree construction + Rendering engine and its use.

<p>After Html gets loaded browser renders DOM tree. Then it appropriate styling will get processed to contruct CSSOM tree.Once DOM tree and CSSOM tree are ready render tree will get constructed, then browser will start painting elements in the UI.</p>

d. Parsers (HTML, CSS, etc)

<p>Parsing means reading HTML content and constructing DOM tree.</p>
<p>HTML parse will parse markup into the parse tree,CSS parser will tokenize the markup into token to will parse it to CSS rules which will helpful to create CSSOM tree.

e. Order of script processing

<p> Browser will first go through the markup code line by line, then it will decide whether sync/async script can be loaded to optimize performance of loading website.</p>
<p>Style sheets will be loaded async, without waiting of that DOM tree will get constructed </p>

f.Layout and Painting

<p> DOM tree + CSSOM tree => Render tree </p>
<p> Appropriate position, size will be computed by layout </p>
<p> In the painting phase, final rendering tree will be rendered into the screen with appropriate pixels.</p>
