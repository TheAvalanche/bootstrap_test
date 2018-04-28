1. NPM

    `npm install gulp-sass --save-dev`
    
    `npm install gulp-sass -D`
    
    Installs libraries to
    /node_modules
    
    Adds to package.json in devDependencies
    
    `npm install bootstrap`
    
    Installs libraries to /node_modules
    
    Adds to package.json to dependencies
    
    ----
    
    To install all dependencies in package.json on project init, run:
    
    `npm install`
    
2. GULP

    What is project build?
    
    * HTML templating
    * SCSS -> CSS compilation
    * CSS concatination
    * CSS minimization
    * ES6 -> ES5 compilation (babel)
    * JS concatination
    * JS minimization
    
    All steps configuration is done in `gulpfile.js`
    
    Process
    
    * In /src -> development
    * In /dist -> final result
    * /src -> gulp -> /dist