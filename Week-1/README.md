1.<strong> What is the main functionality of the browser? </strong>

<p>The main function is to retrieve information from the World Wide Web and making it available for users <p>

2.<strong> High Level Components of a browser. </strong>

<p>
1. User Interface (How user interact with browser)
2. Browser Engine (Bridge between UI and Rendering Engine)
3. Rendering Engine (Render content based on the response type ex. Html,CSS)
4. Networking (Make network requests ex. to fetch/post data)
5. Javascript Interpreter (Parsing and executing Javascript code)
</p>

3.<strong> Tree construction + Rendering engine and its use. </strong>

<p>After Html gets loaded browser renders DOM tree. Then it appropriate styling will get processed to contruct CSSOM tree.Once DOM tree and CSSOM tree are ready render tree will get constructed, then browser will start painting elements in the UI.</p>

4.<strong> Parsers (HTML, CSS, etc) </strong>

<p>Parsing means reading HTML content and constructing DOM tree.</p>
<p>HTML parse will parse markup into the parse tree,CSS parser will tokenize the markup into token to will parse it to CSS rules which will helpful to create CSSOM tree.

5.<strong> Order of script processing </strong>

<p> Browser will first go through the markup code line by line, then it will decide whether sync/async script can be loaded to optimize performance of loading website.</p>
<p>Style sheets will be loaded async, without waiting of that DOM tree will get constructed </p>

6.<strong> Layout and Painting </strong>

<p> DOM tree + CSSOM tree => Render tree </p>
<p> Appropriate position, size will be computed by layout </p>
<p> In the painting phase, final rendering tree will be rendered into the screen with appropriate pixels.</p>

Image: https://github.com/AakashPandya/p4-rajesh-AakashPandya/blob/apandya/week1/Week-1/PestoExercise1.1.drawio%20(1).png


