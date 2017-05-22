# AppMart SSP (Self Service Portal)
(c)Pirate 2017

[TOC]

-----------------
## Usage

**Pre-requisite:** 
- [Node JS](https://nodejs.org/en/); an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. We are using this to load our packages via `npm`. And to run all automation with `Gulp`.
- Node JS a runtime environment. And NPM (Node Package Manager) is a package loader comes with Node JS. It is a command line tool.
- It almost [similar](http://stackoverflow.com/questions/38388824/is-maven-similar-to-npm) to Maven for JAVA. 
- It may need proxy configuration settings. Plz check [here](https://knome.ultimatix.net/blogposts/318727-npm-on-tcs-network) for the same.
- [Bower](https://bower.io/);  A package manager for the front end libraries. It is just similar as NPM but only concentrate on frontend libraries.


> **Why NODE/NPM ?**
> A Package Manager allows you to specify the dependencies for your project, to say that in order to run (or develop) this tool or site it needs these particular 3rd party components. And it'll then figure out what they need and also download them. 
> 
> NPM is a Java Script package manager. This help JS developer to develop and share code easily.
>  
>  All required packages are written in file named `package.json`.
>   
>   
> We can get all packages downloaded with single command `npm install`.
> 
> All packages will be saved in a specific folder named `node_modules`.
> 

**Folders not to be committed to any version control or shared are: `node_modules` and `bower_components`. If you get a project having these folders already present then you may skip first installtion i.e. `npm install`.


You may have look-in [Up and Running with NPM, the Node Package Manager](https://www.lynda.com/Web-Development-tutorials/Up-Running-NPM-Node-Package-Manager/409274-2.html?org=tcs.com) Lynda.com course for better knowledge.
As well [Web Project Workflows with Gulp.js, Git, and Browserify](https://www.lynda.com/Web-Design-tutorials/Web-Project-Workflows-Gulp-js-Git-Browserify/154416-2.html?org=tcs.com) for better knowledge on Gulp automation.
Also [Sass Essential Training](https://www.lynda.com/Sass-tutorials/Sass-Essential-Training/375925-2.html?org=tcs.com) for better knowledge on SASS; a CSS pre processor.


###1. Setup
```bash
npm install
```
- This will install all npm and bower dependencies (Only one time process)
- Node Packages will be downloaded in `node_modules` folder in root directory.
- Bower components will be downloaded in `src/bower_component` folder.


### 2. Watch files/ run application from development folder i.e. /src
```
gulp
```

### 3. Build production version
```
gulp build
```

### 4. Start webserver from build folder
```
gulp serve-build
```

** all above command should be used on CMD in root directoy. To do the same do following steps:
Assuming that in File Explorer you have opened the target directory/folder, do this:
 1. Click on address bar, alternatively press Alt+D
 2.  Now when address bar is highlighted, type cmd in the bar.
 3. Press Enter key
You will notice that command prompt from that folder.

----------------
## Features available with Gulp task
* SASS support including sourceMaps
* Minimal CSS styling of the view
* Gulp watch, build and local server tasks
* Minified HTML, CSS and JS build files
* Automatic file Reversioning 
* Browser-sync support
* File concatenation for prod
* Service worker generation support

------------------

##Project structure 

```
 _build
 node_modules*
 src
 -- app
 ------ components
 ------ externalModules
 ------ shared
 ------ app.js
 ------ config.js
 ------ constants.js
 ------ route.js
 ------ run.js
 -- assets
 ------ css
 ------ fonts
 ------ images
 -- bower_components*
 -- index.html
 bower.json
 gulpfile.js
 package.json
 README.md
 README.html
```

** Folders marked with `*` should be exclude while committing to SVN or Git or even sharing.

### _build
This folder will contain Production build of the Project. It will be generated automatically with gulp build process `gulp build`.

### node_modules
This folder will contain all necessary components. 
`npm install`
will download all these.

### src
This is where all development will happen. It contains:
>  - app: This will contain all angular files for the application
>  - assets: This will contain all assets like images, css, fonts etc.
>  - bower_component: This will contain all libraries downloaded from bower. npm install command will install all the required component here. 
>  - index.html

### app
This will contain all angular files for the application. 
We are following coding guidelines of [John Papa](https://github.com/johnpapa/angular-styleguide/tree/master/a1).

 - Main file is `app.js`.
 - All configuration functions are written in `config.js`.
 - Ui-routing is written in `route.js`.
 - Any run block functions can be written in `run.js`.
 - Any constants can be defined in `constants.js`.
 - All components and there respective controllers/services/directive should be written in folder `components`.
 - Any external modules should be added to folder `externalModules`. Only JS files. If any css is present for particular module then it should be added to folder `assets/css`.
 - Any shared directive or services can be places in folder `shared`.

### assets
This will contain all assets required by the project like css, images etc.

- Any sass or plain css files should go in folder `css`.
- All fonts will be available in folder `fonts`.
- All images should go in folder `images`.

### bower_components
This will contain all library files added via `bower.json`.
### index.html
This is the first file loaded by the browser.

###bower.json
This is a file specific to `Bower` package manager. All front end packages like Angular, Bootstrap, Ui-router etc. will be downloaded automatically just after `npm install`.

### gulpfile.js
This is a file specific to `Gulp`. Gulp is a task runner, which help us to automate in development time. Task such as; automatically reloading browser if any file changes, minifying files etc.

### package.json
This is a file specific to Node Package Manager `npm`. It will download all the external packages required for the project to run like Gulp, Browser-sync etc.

### README.md and README.html
This is the file you are reading up now. All the documentation is written in MARKDOWN language (the same pattern is used on Github) and then converted into HTML pages using an Online Markdown editor [StackEdit](https://stackedit.io). Both .md (markdown) and HTML is kept in the directory.
