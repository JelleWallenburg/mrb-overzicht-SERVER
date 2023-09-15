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
-  **UPDATE garage:** As a user I can update a garage so that I can update my mrb calculation.
-  **DELETE garage/vehicle:** As a user I can delete a garage/vehicle so that I can update my total mrb calculation.


## Backlog

Different language:
- add English as a language

Extend tax calculation:
- add 'fijnstoftoeslag'
- add more vehicles
- add 'opcenting'
  
# Client

## Routes

- GET/ - Homepage
- (GET/POST)/signup - Signup form: username, email and password
- (GET/POST)/login - Login form: username, password
- (GET/PUT/POST/garages) - CRUD garage
- (GET/PUT/POST)/garage/:id - garage detail
- (GET)/vehicle/:id - vehicle detail

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Garage CRUD (user only)
- Garage Detail Page (user only)
- My Profile Page (user only)

## Components

- Navigation Bar component
- Footer component
- isAnon component
- Private component
- Loading component
- Garage Card component
- Vehicle Card component
- Vehicle Card-detailed component
- Vehicle Icon component
- NewGarageForm component
- NewVehicleForm component

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
- Vehicles Service
  - vehicle.get()
  - vehicle.create(data)
  - vehicle.remove(data)
- Vehicles Service
  - vehicle.get()
 
  
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
licencePlate - String //required, check if exists in RDW data
voertuigsoort - String //required
bruto-bpm - Number
massa-ledig_voertuig - Number //required
brandstof_omschrijving - String //required
datum_eerste_toelating - Number
co2_uitstoot_gecombineerd - Number
emissie_co2_gecombineerd_wltp - Number

```

## Links

### Trello/Kanban

[Link to trello board](https://trello.com/b/FFxOjflY/mrb-overzicht-mvp) or picture of your physical board

### Wireframes

[Link to Figma](https://www.figma.com/file/F6LXHeK6yZkrUjnd7WIZRe/mrb-overzicht?type=design&node-id=0-1&mode=design&t=mnTO3WtPznz3SP0N-0)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/JelleWallenburg/mrb-overzicht-CLIENT)
[Server repository Link](https://github.com/JelleWallenburg/mrb-overzicht-SERVER)

[Deploy Link]([http://heroku.co](https://mrb-overzicht-client.vercel.app/))

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1hCJ9616y74af72xwZfWvA1Zmy5JD8eR6JxtS-GuLq6g/edit#slide=id.p)
