# inspoFit

inspoFit is a workout inspiration and app where you can post, read, edit and delete a created workout. In creating a workout, you can also create exercises along with posting an example video description in order to assist with the movement overall. 

## Why I Made It

When I was younger and had a lot less disposable income, finding workouts, I thought were appropriate for my level and state of fitness could be a challenge. There are sites out there like bodybuilding.com that were staples in finding workouts. Though many of them worked, as someone who was still a novice to workout structute, I was never sure if the workout was the best fit for me.

I hope inspoFit, can be a way for people to experiement with their fitness and be inspired to try new things that fit what a user can or wants to do along their fitness journey.

## Wireframes
#### Index Route 
![Screen Shot 2021-09-21 at 9 22 11 PM](https://media.git.generalassemb.ly/user/37185/files/fe8a7400-1b21-11ec-848e-f906800793e8)

#### Show Route
![Screen Shot 2021-09-21 at 9 22 23 PM](https://media.git.generalassemb.ly/user/37185/files/05b18200-1b22-11ec-9c1e-c0898d51a232)

#### New Route 
![Screen Shot 2021-09-21 at 9 22 47 PM](https://media.git.generalassemb.ly/user/37185/files/12ce7100-1b22-11ec-9487-4926747f72fb)

#### Edit Route 
![Screen Shot 2021-09-21 at 9 22 59 PM](https://media.git.generalassemb.ly/user/37185/files/19f57f00-1b22-11ec-8e01-d6cc8592be02)

Above are my wireframes for my index, show, edit , and new GET routes. Overall, I was able to create an app that is very similar in design to the wireframes. The design was helped primarily through the use of the CSS framework Materialize. This framework help do the bulk of the styling, allowing me to need to touch a very small portion of the elements. 

## User Stories 

### MVP Goals
As a user, I want to be able to create a workout
As a user, I want to be able to edit a workout 
As a user, I want to be able to read a workout 
As a user, I want to be able to delete a workout
As a user, I want to be able to go to and interact with a well designed page. 
As a user, I want to be able to access the app online.

### Stretch Goals
As a user, I want to be able to log in and sign into my own account 
As a user, I want to only have the ability to edit and delete my own workouts 
As a user, I want to be able to group my daily workouts into a workout plan
As a user , I would like to see pictures and/or tutorials on how to do the exercises listed. 
As a user, I would like to be able to post my gym selfie of the day to my workout 
As a user, I would like to include my workout playlist


## Technologies Used

1. Node.js
2. Express.js
3. Mongoose
4. EJS
5. Atlas MongoDB 
6. body-parser
7. Method Override
8. Heroku
9. Materialize

## Approach 

I approached this project through the use of the MVC(Model, View, Controller framework. 

#### Models
This app consists of two models, the Exercise Model and the Workout model.

##### Workout
The workout model is the main model for the app and is in essence the parent model. Below you will see the key:value pairs for the workout model. The workout model also has a key value pair that is a reference to the exercise model. This allows me the ability to add exercises created through the exercise model in order to populate a given workout. 

![Screen Shot 2021-10-02 at 10 03 05 AM](https://user-images.githubusercontent.com/25748411/135719798-939f71cb-a737-4e35-b44f-ca3ee3f30059.png)

##### Exercise
The exercise model is necessary for the proper functioning of the workout model. The exercise model at this moment consist of the exercise, sets, reps, and a link to a video description of what the exercise is. Below you will be able to get a better grasp of what the exercise model entails.

![Screen Shot 2021-10-02 at 10 02 50 AM](https://user-images.githubusercontent.com/25748411/135720156-06ef9bf2-8016-458f-bd8c-08fd618f472f.png)

In the future once I am able to have users have a designated username,  I plan to edit this model in particular, to give users the ability to post the amount of sets and reps they would like to do or to use as a log of the days workout. 

## Views
Views were created through the use of the templating language EJS. In total, there are eight views (four views for each model). These four main views are an index page, a show page, an edit page with a form, and a new page with a form. These views also use partials(header file and footer file) in order to consolodate much of the nav and logo.

## Controllers
A server.js file is used in order to consolidate individual controllers, hold our listerner, and consolidate our middleware. With this app having two models currently, each model uses its own controller in order to maintain organization. Both of these controllers use the 7 RESTFUL routes in order to establish CRUD functionality across both models. 


## Unsolved Problems

Some of my unsolved problems include:

1. On my edit forms, could not figure out at this time how to get values on a multi-select dropdown menu to appear prior to the user updating their workout or exercise( both models use a dropdown for at least 1 key:value).
2. The styling isn't exactly what I am looking for, so I want to go back to the drawing board and may try using either Bootstrap or make my own custom CSS.

## Forthcoming Features

In the future, I would like to add the following features:

1. Adding a user login. This can allow me to expand more on this app so users can use it a a place for inspiration or a place to track and log their workout information 
2. Adding a routine model that consists of your workouts for a weekly period. Many people do the same workouts weekly, this can assist these folks with tracking that workout also in inspiring others with a full week of workouts. 
3. Integrating both Instagram and Spotify to the app. This will allow users to create workout playlists and have access to fitness images they have posted on Instagram 
4. Integrating an Exercises and Health API in order to have access to a pool of exercises with descriptions and pictures. 
5. Updates on design, through the use of Bootstrap and potential templates.


