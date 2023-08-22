# mrb-overview

## Beschrijving

mrb-overview is an app for getting insights in your monthly Dutch motor vehicle tax (mrb). Users can create virtual garages in regions in the Netherlands and add vehicles by number plate to simulate their monthly mrb paid of their garage(s).

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

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /restaurants - restaurant list
- /restaurants/create - create a restaurant
- /restaurants/:id - restaurant detail
- /profile/me - my details and favorite restaurants
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Restaurants List Page (public only)
- Restaurant Create (user only)
- Restaurant Detail Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Restaurant Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Restaurant Service
  - restaurant.list()
  - restaurant.create(data)
  - restaurant.detail(id)
  - restaurant.addFavorite(id)
  - restaurant.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
```

Restaurant model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints/Backend Routes

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
  - body:
    - restaurantId
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

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
