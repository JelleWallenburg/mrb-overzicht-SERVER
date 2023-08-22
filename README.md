# mrb-overview

## Beschrijving

mrb-overview is an app for getting insights in your monthly Dutch motor vehicle tax (mrb). Users can create virtual garages in regions in the Netherlands and add vehicles by licence plate to simulate their monthly mrb paid of their garage(s).

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can start saving garages and vehicles.
-  **Login:** As a user I can login to the platform so that I can see my garages and vehicles.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Check profile:** 
-  **CREATE garage/vehicle:** As a user I can add a garage/vehicle so I can calculate my total mrb.
-  **READ mrb overview:** As a user I can check my mrb on user/garage or vehicle level and see detailed information about the garage/vehicle.
-  **UPDATE garage/vehicle:** As a user I can update a garage/vehicle so that I can update my mrb calculation.
-  **DELETE garage/vehicle:** As a user I can delete a garage/vehicle so that I can update my total mrb calculation.


## Backlog

Different language:
- add English as a language

Upload vehicle image:
- add an image of the specific vehicle (and extract licence plate)

Yearly overview:
- send yearly overview to registered email

Geo location:
- choose location of garage by point on map.

Yearly mrb development:
- see the development of mrb over years
  
# Client

## Routes

- GET/ - Homepage
- POST/auth/signup - Signup form: username, email and password
- GET/auth/login - Login form: username, password
- POST/auth/logout - redirects to Hompage
- (GET/PUT/POST/garages) - CRUD garage
- (GET/PUT/POST)/garage/:id - garage detail
- (GET)/vehicle/:id - vehicle detail
- (GET/POST)/profile/me - my details
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Garage CRUD (user only)
- Garage Detail Page (user only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Navigation Bar component
- Hero component
- Garage Card component
- Vehicle Card component
- Vehicle Card-detailed component

## Pages
- Homepage
- SignupPage
- LoginPage
- GaragesPage
- GaragePage
- VehiclePage

## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Garage Service
  - garage.list(data)
  - garage.create(data)
  - garage.update(data)
  - garage.remove(data)
- Vehicle Service
  - vehicle.list()
  - vehicle.create(data)
  - vehicle.update(data)
  - vehicle.remove(data)

# Server

## Models

User model

```
username - String // required & unique
email - String // required
password - String // required
```

Garage model

```
owner - ObjectID<User> // required
name - String // required
postalCode - String //required, 4 numbers and ending two letters
```

Vehicle model

```
garage - ObjectID<Garage> // required
licence plate - String //required, check if exists in RDW data
image - String
```

## API Endpoints/Backend Routes

What do I have to fill in here? Can I merge the routes and the API endpoints/backend routes? Where do I have to put the routes to the external API?

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
- DELETE /user/me/favorite/:restaurantId
  - body: (empty)
- GET /restaurant
- POST /restaurant
  - body:
    - name
    - phone
    - address
- GET /restaurant/:id

## Links

### Trello/Kanban

[Link to trello board](https://trello.com/b/FFxOjflY/mrb-overzicht-mvp) or picture of your physical board

### Wireframes

[Link to Figma](https://www.figma.com/file/F6LXHeK6yZkrUjnd7WIZRe/mrb-overzicht?type=design&node-id=0-1&mode=design&t=w0kh7dD9DuA2s4Tq-0)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/JelleWallenburg/mrb-overzicht-CLIENT)
[Server repository Link](https://github.com/JelleWallenburg/mrb-overzicht-SERVER)

[Deploy Link](http://heroku.co)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1hCJ9616y74af72xwZfWvA1Zmy5JD8eR6JxtS-GuLq6g/edit#slide=id.p)
