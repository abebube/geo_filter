# geo_filter
This is a small application that filters out customers who are within a particular range of a location.

This is an Angular 6.0.0 project. Node version used in development was version 8.9.4.
Find instruction below on how to run the code in debug mode, and how to test.

# To Run the Code
Step 1: Install Angular and Node on machine if not available (~6.0.0 and ~8.9.4 respectively). To install angular, node is required. Angular install command is 'npm install @angular/cli@6.0.0'.
Step 2: cd into the geo-filter-app folder and run the command 'npm install' to install the node_modules.
Step 3: On successful node_modules installation, run the command 'ng serve' to serve the application, which will run on http://localhost:4200 by default.

# To Test (Using Karma and Jasmine)
Step 1: cd into the geo-filter-app folder and run the command 'ng test'. This will open a new browser window with a running instance of Karma showing successful tests. Test files have the extension .spec.ts.
