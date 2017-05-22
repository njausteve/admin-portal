# AppMart SSP (Self Service Portal)
(c)Pirate 2017<i class="icon-anchor"></i> 

[TOC]

-----------------
## Usage

**Pre-requisite:** 
- [Node JS](https://nodejs.org/en/); an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. We are using this to load our packages via `npm`. And to run all automation with `Gulp`.
- Node JS a runtime environment. And NPM (Node Package Manager) is a package loader comes with Node JS. It is a command line tool.
- It almost [similar](http://stackoverflow.com/questions/38388824/is-maven-similar-to-npm) to Maven for JAVA. 
- It may need proxy configuration settings. Plz check [here](https://knome.ultimatix.net/blogposts/318727-npm-on-tcs-network) for the same.
- [Bower](https://bower.io/);  A package manager for the front end libraries. It is just similar as NPM but only concentrate on front-end libraries.


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

<i class=" icon-info-circled"></i> Folders not to be committed to any version control or shared are: `node_mouldes` and `bower_components`. If you get a project having these folders already present then you may skip first installation i.e. `npm install`.

### Available Commands



###1. Setup
```bash
npm install
```
- This will install all npm and bower dependencies (Only one time process)
- Node Packages will be downloaded in `node_modules` folder in root directory.
- Bower components will be downloaded in `src/bower_component` folder.


### 2. Watch files/ run application from development folder i.e. /src
```bash
gulp
```

### 3. Build production version
```bash
gulp build
```

### 4. Start webserver from build folder
```bash
gulp serve-build
```
### 5. Start Karma/Jasmine Unit test
```bash
gulp test
```

### 6. Start Karma/Jasmine Unit test in Continuous mode
```bash
gulp test-auto
```

### 7. Start End-to-End (e2e) test using Protractor
```bash
gulp protractor
```
<br>

<i class=" icon-attention-alt"></i> all above command should be used on CMD in root directory. To do the same do following steps:
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
* Automatic file Reversion 
* Browser-sync support
* File concatenation for prod
* Service worker generation support
* Automated Unit testing with Karma and Jasmine
* Automated End-to-End (e2e) testing with Protractor

------------------

##Project structure 

```
 _build
 node_modules*
 e2e
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
 karma.conf.js
 package.json
 protractor.config.js
 README.md
 README.html
```
<i class=" icon-attention-alt"></i>Folders marked with `*` should be exclude while committing to SVN or Git or even sharing.

### <i class="icon-folder-open"></i> _build
This folder will contain Production build of the Project. It will be generated automatically with gulp build process `gulp build`.

### <i class="icon-folder-open"></i> node_modules
This folder will contain all necessary components. 
`npm install`
will download all these.

###<i class="icon-folder-open"></i> e2e
This folder will contain all End_to-End testing spec files.

###<i class="icon-folder-open"></i> src
This is where all development will happen. It contains:
>  - app: This will contain all angular files for the application
>  - assets: This will contain all assets like images, css, fonts etc.
>  - bower_component: This will contain all libraries downloaded from bower. npm install command will install all the required component here. 
>  - index.html

###<i class="icon-folder-open"></i> app
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

###<i class="icon-folder-open"></i> assets
This will contain all assets required by the project like css, images etc.

- Any sass or plain css files should go in folder `css`.
- All fonts will be available in folder `fonts`.
- All images should go in folder `images`.

###<i class="icon-folder-open"></i> bower_components
This will contain all library files added via `bower.json`.
###<i class="icon-file"></i> index.html
This is the first file loaded by the browser.

###<i class="icon-file"></i>  bower.json
This is a file specific to `Bower` package manager. All front end packages like Angular, Bootstrap, Ui-router etc. will be downloaded automatically just after `npm install`.

###<i class="icon-file"></i>  gulpfile.js
This is a file specific to `Gulp`. Gulp is a task runner, which help us to automate in development time. Task such as; automatically reloading browser if any file changes, minifying files etc.

###<i class="icon-file"></i>  karma.conf.js
This is a <code>Karma</code> configuration file.

###<i class="icon-file"></i>  package.json
This is a file specific to Node Package Manager `npm`. It will download all the external packages required for the project to run like Gulp, Browser-sync etc.

###<i class="icon-file"></i>  protractor.config.js
This is a <code>Protractor</code> configuration file.

###<i class="icon-file"></i>  README.md and README.html
This is the file you are reading up now. All the documentation is written in MARKDOWN language (the same pattern is used on GitHub) and then converted into HTML pages using an Online Markdown editor [StackEdit](https://stackedit.io). Both .md (markdown) and HTML is kept in the directory.

---------------------------



##Tech Stack

###Production

--------
####1. Angular JS
`Version: 1.4 / 1.6 (latest)`
`Link : https://angularjs.org`
`License: The MIT License`

**Description**:
[Angular JS 1.X](https://angularjs.org/) is a supersonic Clien-Side Java Script framework. 

-------

####2. Bootstrap
`Version: 3.3.7`
`Link : http://getbootstrap.com`
`License: The MIT License`

**Description**:
[Bootstrap](http://getbootstrap.com) is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

-------

####3. UI Bootstrap
`Version: 2.5.0`
`Link : https://github.com/angular-ui/bootstrap`
`License: The MIT License`

**Description**:
UI Bootstrap has Bootstrap JS components written in pure AngularJS. No dependency on Bootstrap JS and jQuery.

**Specific Use-Case in application**:
To remove dependency on jQuery.

-------

####4. UI-Router
`Version: 1.0.0`
`Link : https://ui-router.github.io`
`License: The MIT License`

**Description**:
[Angular UI-Router](https://ui-router.github.io) is a client-side Single Page Application routing framework for AngularJS.
Routing frameworks for SPAs update the browser's URL as the user navigates through the app. Conversely, this allows changes to the browser's URL to drive navigation through the app, thus allowing the user to create a bookmark to a location deep within the SPA.

UI-Router applications are modeled as a hierarchical tree of states. UI-Router provides a state machine to manage the transitions between those application states in a transaction-like manner.

**Specific Use-Case in application**:
To achieve nested routing.

-------

####5. OcLazyLoad
`Version: 1.1.0`
`Link : https://github.com/ocombe/ocLazyLoad`
`License: The MIT License`

**Description**:
[OcLazyLoad](https://github.com/ocombe/ocLazyLoad) is used to load the dependency files and also to inject the AngularJS modules on the fly. Perfectly suitable to load JS or even CSS async. A recommended lazy loader for Angular 1.X .

Key features:
 - Dependencies are automatically loaded Debugger friendly
 - The ability to mix normal boot and load on demand Load via the service or the directive
 - Use the embedded async loader or use your own ([Web Pack](https://webpack.github.io/), [requireJS](http://requirejs.org/), ...)
 - Load js / css / templates files
 - Compatible with AngularJS 1.2.x/1.3.x/1.4.x/1.5.x/1.6.x

**Specific Use-Case in application**:
To achieve Lazy-loading and dependency injection on the fly. 

-------
####6. Service Worker
`A Browser feature`

**Description**:
[Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is a brand new Cache API provided by Modern Browsers. A major advantage of the service worker cache API is that it gives you more detailed control than the built-in browser cache does. Older browsers will work with a fall-back to normal browser cache mechanism.

**Specific Use-Case in application**:
To achieve fine tune control over browser cache.

-------


###Developement
####1. SASS
`Version: 3.4.23 `
`Link : sass-lang.com`
`License: The MIT License`

**Description**:
[Sass](sass-lang.com) is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

**Specific Use-Case in application**:
To achieve faster CSS development.

**Available Alternative**:
Plain CSS, LESS.

-----------------------

####2. Gulp
`Version: 4`
`Link : http://gulpjs.com`
`License: The MIT License`

**Description**:
[Gulp](http://gulpjs.com/) is a toolkit that helps you automate painful or time-consuming tasks like Minification, concatenation, live reload, running test etc. in your development workflow.

**Specific Use-Case in application**:
To make development workflow easy and automated.

**Available Alternative**:
Grunt. 

-------

####3. Karma
`Version: 1.5.0`
`Link : https://github.com/karma-runner/karma`
`License: The MIT License`

**Description**:
[Karma](https://github.com/karma-runner/karma) is Test runner JavaScript. Specifically designed for Angular.

**Specific Use-Case in application**:
To achieve Unit testing using Jasmine testing framework.

-------
####4. Jasmine
`Version: 1.1.0`
`Link : https://github.com/karma-runner/karma-jasmine`
`License: The MIT License`

**Description**:
[Jasmine](https://jasmine.github.io/2.0/introduction.html) is a behavior-driven development framework for testing JavaScript code.

**Specific Use-Case in application**:
To Unit test code.

**Available Alternative**:
Mocha, QUnit etc.

-------
####5. Protractor
`Version: 5.1.1`
`Link : http://www.protractortest.org`
`License: The MIT License`

**Description**:
[Protractor](http://www.protractortest.org) is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

**Specific Use-Case in application**:
To End-to-End (e2e) testing of project.

----------------------

## Lost somewhere???

Don't worry.  We'll take you till the end of this document with complete understanding.
Let's start from very basic level.

Before getting started with coding, you must know there is **no direct connection between Front-End and Back-End except HTTP calls (RESTful services)**. Hence we can decouple Front-End and Back-End code and move out of bulky IDE's like Eclipse or NetBeens. We can simply use advanced text editors like Sublime, Atom, Brackets and many more. We suggest to stick to Sublime as it has great community support and large Packages repository.

Have a look at all the magic you can do with Sublime [here](https://www.lynda.com/Sublime-Text-tutorials/Learn-Sublime-Text-3-Basics/513594-2.html?org=tcs.com).

We consider, you already know the basics of HTML, CSS (Bootstrap) and Angular. If not please go through following courses one by one. **Don't skip any.** (Just click on  the Titles to view)

 1. [HTML 5](https://www.w3schools.com/html/default.asp)
 2. [CSS 3](https://www.w3schools.com/css/default.asp)
 3. [Bootstrap 3](https://www.w3schools.com/bootstrap/default.asp)
 4. [Bootstrap 4](https://www.lynda.com/Bootstrap-tutorials/Bootstrap-4-Essential-Training/372545-2.html?org=tcs.com) (Grid system only: Chapter3. Mastering Layout with Bootstrap)
 5. [Javascript](https://www.w3schools.com/js/default.asp)
 6. Angular 1.x core
  1. [W3School](https://www.w3schools.com/angular/default.asp)
  2. [Codecademy](https://www.codecademy.com/learn/learn-angularjs)

Horrified???
This is just a start.

All the above courses are the most basic intro to Angular Eco System/programming in JS  and  the programming done in these courses is in loose fashion to make you understand easily . But to develop a full-fledged big web application, you need to set up some automation not only to speed up development but also to make your life easier  .

And for the same, first you're needed to learn a Coding Style, in other words best practices of Angular Coding. After that we'll jump to automation stuff.

There are different ways of writing codes and hence different coding styles, but we'll strictly stick to ECMA Script-5 and [Angular 1 Style by John Papa](https://github.com/johnpapa/angular-styleguide/tree/master/a1). 
Please go through it.

Now, let's head to Awesome world of JavaScript.
**Node JS** is an open-source JavaScript runtime built on Chrome V8 JavaScript engine. In simple words, we can run JS on Node JS. Ha ha ha, isn't it so simple?? But here lies the magic. Many developers out there came up with few script files (Packages) that run on Node JS and can perform many tasks like copying files, minification, concatenation and many more. Using multiple packages simultaneously we can automate many tasks. There exists Node Package Manager (a repository of all these packages online); comes inbuilt with Node JS installer. We just need to specify the name of packages in **packages.json** file to download them for development . After that, executing one simple instruction in CMD will download those packages for you. And then Task runner like Gulp makes it as simple as to run any package as per certain conditions with simple instructions in CMD.

Head on to following **Lynda.com** courses to get started with Node JS and NPM:
1. [Learning NPM the Node Package Manager](https://www.lynda.com/Web-Development-tutorials/Up-Running-NPM-Node-Package-Manager/409274-2.html?org=tcs.com)
2. [Tooling with NPM Scripts](https://www.lynda.com/NPM-tutorials/Tooling-NPM-Scripts/495275-2.html?org=tcs.com)
3. [Web Tooling & Automation](https://www.udacity.com/course/web-tooling-automation--ud892)
4.  [Sass Essential Training](https://www.lynda.com/Sass-tutorials/Sass-Essential-Training/375925-2.html?org=tcs.com)
5. [Web Project Workflows with Gulp.js, Git, and Browserify](https://www.lynda.com/Web-Design-tutorials/Web-Project-Workflows-Gulp-js-Git-Browserify/154416-2.html?org=tcs.com)

Also have a look at following (very advanced and important ) concepts:
1. [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
2. [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
3. [Offline Web Applications](https://www.udacity.com/course/offline-web-applications--ud899)

Hell...lot of courses??
But this is where, after watching all the mentioned courses, you will understand/enjoy the magical world of JS.

This was all about development. But without testing it is useless. We strongly believe in Test Driven Development, wherein **first we've to write Unit tests and then code to pass those tests**. For Angular we have **Karma** as test runner and **Jasmine** as unit testing framework. As well we have **Protractor** for End-to-End test. These are quite advanced topics. You can head to following links for more info.

1. [Learning AngularJS Testing](https://www.lynda.com/AngularJS-tutorials/Learning-AngularJS-Testing/521229-2.html?org=tcs.com),   [Tutorial1](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1) and [Tutorial2](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-2). 

Till now we have learnt everything to follow this project structure.
Here you complete the basic training! 

Now *Let the hacking begin!*
