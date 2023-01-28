# Awari's React Course - Exercise 5 - Mini Game

## Objective
I was given the task to code a mini game, in which a hero should fight a certain amount of monsters. Some other requirements includes:

* The monsters should have a certain amount of Health Points (HP). It should also increase as the levels increment;
* The hero would have three attacks (Axe, Sword and Spell) which should decrease monster's hp by 5, 10 and 15 HP respectively;
* ...

There was also some technical requirements like:

* Using React-Router to navigate between object pages;
* Using context to store some data;
* Fetching data from an API and using it on your monsters;
* ...


Additionally I gave myself the following task:

Use the [D&D API](https://www.dnd5eapi.co/docs/#get-/api/monsters) to fetch data from specific monsters and display it in a glossary-like page (still under construction)

![image](https://user-images.githubusercontent.com/44590561/215243331-fa6a7c45-f30e-4bef-88cc-413b2d7aeba3.png)

### Concepts used
Here is a list of concepts that I learned and used during this exercise

#### Vanilla React

Reusable Componentes (as noted in Generic Weapon)
Props usage
Passing JSX as props using Component Nesting and {children}
Updating Parent Component's State from Children (passing 'setX' as props)

##### Hooks

useState
useEffect
useContext

#### React Router 6.7

Route / Routes
Routes Nesting
Fixed Parent Route (adding a NavBar that always render inside a Route)
Navigate / useNavigate
Link / NavLink (with active usage)

#### Data and APIs

fetch + promise Handling + useEffect ('Monster Not Found' page)

#### Git
Branching
Merging 
Pull Requests

#### Other Stuff
Atomic Design (kind of, since no complex structures from simpler ones were needed.)
Project Template and Organization
