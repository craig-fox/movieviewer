# Movieviewer
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


##Setup
I chose to use the latest version of Angular to develop this, as I felt it would give me the most 
amenable development environment. I used Angular CLI to generate the scaffolding for the application.
For the back end, I created an internal NodeJS app that returns the videos from the provided URL. As the people testing this code might not have Angular CLI installed, the commands below 
for running the app differ from the ones in package.json, which use **ng**.

The code for the Angular application is under `src`, with scaffolding files in the root and the
component & service code under `src/app`.
The code for the Node backend consists of `server.js` in the project root, which accesses code in the 
`backend` directory.

## Running the app
Run **npm install** to generate the required artifacts.

Run **npm run backend** to launch the NodeJS backend server for retrieving the video JSON.

In a separate console, run **npm start** to launch the Angular Application, and navigate the browser
to `http://localhost:4200/`

## Known Issues
The carousel loads the images randomly for each slide. I believe this is caused  by the cover images being retrieved from remote URLs. I believe this would be fixed by asynchronous handling of the carousel load, possibly using the AsyncPipe on the *ngFor directive, but I was unable to get this working.

##Decisions made
Due to the untoward delays around getting my Mac back, I chose to implement a minimal solution. I would have liked to do more, such as a viewing history, but chose to keep it simple so I could get the solution turned in.

**_# Craig Fox Lightning Tal kExercise

##Setup
I chose to use the latest version of Angular to develop this, as I felt it would give me the most 
amenable development environment. I used Angular CLI to generate the scaffolding for the application.
For the back end, I created an internal NodeJS app that communicates with a MongoDB database created
on MLab. As the people testing this code might not have Angular CLI installed, the commands below 
for running the app differ from the ones in package.json, which use **ng**.

The code for the Angular application is under `src`, with scaffolding files in the root and the
component & service code under `src/app`.
The code for the Node backend consists of `server.js` in the project root, which accesses code in the 
`backend` directory.

## Running the app
Run **npm install** to generate the required artifacts.

Run **npm run backend** to launch the NodeJS server for database access.

In a separate console, run **npm start** to launch the Angular Application, and navigate the browser
to `http://localhost:4200/`

##Decisions made
I chose to create two components, one for submitting a topic proposal, and the other for viewing
proposals. These are displayed within a `router-outlet` element, with buttons in the root component
(app-component) toggling between each state.

I chose to use Reactive Forms for the `topic-proposal` form, so that the logic for data handling could
be contained in the form class (`topic-proposal.component.ts`)

## Running unit tests
Run **npm run test** to execute the unit tests. This launches Karma in a separate browser window.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

*If I had implemented History*, I would've created a remote Mongo database on mLab, created backend functions to store viewings and retrieve videos by time watched, and created service to access these.

I chose to create the following components. VideoCarousel, for displaying a gallery of the videos, and Play for video playback.
I also created the stub for a History component, but this has not been fleshed out. It does appear if the History link is clicked.





