# UI Router Exercises

You can download UI Router from https://unpkg.com/angular-ui-router@0.3.2/release/angular-ui-router.js

Because template url only work when Ajax is working and Ajax does not work with local HTML files, to run your AngularJS application I recommend using the serve command line, which can be installed by

```
npm install -g serve
```

Once it is installed, go the the directory of your project and run:

```
serve
```
After this you can access the files from ```http://localhost:3000``` in the browser.

You can use the examples in ```ui-router-examples.zip``` as reference. You will unzip them, cd into the directory and use serve to ```serve``` up the files.


## Family members

Make a site about either your pets or your family, or both. You will make a separate page for each member and you will use UI Router routing to make a URL to each pseudo page within the SPA application.


## Beginnings of a Wiki

You will make a Wiki application, except it will not persist to the database, but only store the pages in a JavaScript object. The object will use the page names of the pages as the keys.

```javascript
function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
};
```


### Step 1

Set up the router such that going to the URL ```#/Python``` will display the title and the contents of the Python page, and same for other pages with their respective page name. It will make use of:

* ```$stateProvider```
* ```$stateParams```
* Create a ```page_view.html``` template HTML file
* Create a ```PageViewController```. It will need to take in the ```$stateParams``` object in order to access the matched page name parameter from the URL.
* Create a state definition in the ```app.config``` section with the ```$stateProvider```. The state definition will have a name, a URL. The URL will match the pattern ```/{page_name}```, and associate the template URL to ```page_view.html``` and the controller to ```PageViewController```.
* In the ```PageViewController```, get the page name parameter from the ```$stateParams``` object and attach it to the scope of the controller so that the template can render the page name.
* Look up the ```WikiPage``` object keyed by the page name on the ```pages``` object. Save this object as a scope variable so that the template can render its content.
* Render the title and the content of the page in the ```page_view.html``` template, if the page exists.


### Step 2: Placeholder page

If the page does not exist, display the following message: "This page does not exist yet." and you will provide a "Create it" link to allow them to create the page. See next step.


### Step 3: The edit page

Set up the router such that the route ```#/Python/edit``` will load the page editor (a form and a textarea within it) to edit the Python page. It will pre-populate the textarea with the content of the page in it.

1. Create a 'page_edit.html' template file
2. Create a PageEditController. It will also need the $stateParams object.
3. Create a state definition for the page_edit state. Its URL will be /{page_name}/edit.
4. In the controller, use the $stateParams object to get the page name as with the PageViewController. Render a form with a textarea to edit the content of the wiki page object.
5. Create a done button which simply links to the page view for the same page.


### Linkable Memory Game

Use UI Router to make your Memory game linkable. So that you can copy the link for a medium sized board, for example, send it to a friend and he will be able to see the medium sized board immediately. There should be 4 different linkable URLs:

* front page with the menu
* easy board
* medium board
* difficult board
