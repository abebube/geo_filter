# geo_filter
This is a small application that filters out customers who are within a particular range of a location.

This is an Angular 6.0.0 project. Node version used in development was version 8.9.4.
Find instruction below on how to run the code in debug mode, how to run an already built version, and how to test.

# To Run the Code
Step 1: Install Angular and Node on machine if not available (~6.0.0 and ~8.9.4 respectively).
Step 2: cd into the geo-filter-app folder and run the command 'npm install' to install the node_modules.
Step 3: On successful node_modules installation, run the command 'ng serve' to serve the application, which will run on http://localhost:4200 by default.

# To Run the built version
Step 1: Navigate to /geo-filter-app/dist/ folder
Step 2: Run index.html in a browser. That's all!

# To Test (Using Karma and JAsmine)
Step 1: cd into the geo-filter-app folder and run the command 'ng test'. This will open a new browser window with a running instance of Karma showing successful tests. Test files have the extension .spec.ts.
