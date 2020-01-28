# deltahacks6
DeltaHacks VI Project

## Inspiration
Everyone says that complaining does not fix problems, but Complain! is here to prove them all wrong. We wanted to connect the concerned citizens with responsible city officials to fix the problems in our cities. We saw a gap between the people and public servants. People cannot get a solution to their problems because their voice is not being heard, and public servants are always being judged about why they are not doing more. So, we wanted to built a platform to connect the both sides!

## What it does
Taking community sourced complaints, Complain! can take those complaints and places them on an online map with an associated picture and a message. This allows any community problem to be widely known and make the city officials act on it. At the same time, city officials can show how they are solving the problems of community and actually prove it to skepticals by taking the picture of the fixed soution and send them back to people who made the original complaint.

## How we built it
Using Google's Firebase to store data from concerned citizens and responsible city officials, and a web-app we built by HTML5, CSS and JavaScript, people can easily and quickly upload their problems to the web-app. For better user experience, we take all complaints and map them for people to see the all problems at a glance by using Microsoft Bing Maps API. 

## Challenges we ran into
Storing images in database was a challenge. Due to large size of the images, we stored them on cloud storage (Firebase Storage) and only store the download link in the database. But it was a challenge to connect the download link to complaints data (location, message, tracking ID etc.).

## Accomplishments that we're proud of
Even though having a bunch of bugs, we have a proof of concept of our core functionalities. Right now, people can send complaints, track their status (whether it is fixed or not), and see them on the map. Also, officials can post their fixes and send the picture of the solved picture of the problem. Our UI is responsive to mobile devices so eventhough we don't have native apps at the moment people can still use it via their phone.

## What we learned
We learned mapping, location and image syncing and storing large files on the database by syncing cloud storage with database.

## What's next for Complain!
Adding an upvote system to see what complaints are causing biggest problems and a cleaner UI for smoother complaint web transmission. 
