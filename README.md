## How to run the web application?
### Clone the repository
Type ```git clone https://github.com/ArturN31/WebDev2_CW2.git``` into the CLI.

### Move into the clone of repository
Type ```cd path/to/WebDev2_CW2``` into the CLI.

### Install project dependencies
Type ```npm install``` into the CLI.

### Run the web server
Type ```node index.js``` or ```nodemon``` into the CLI.

## List of implemented features
- Menu page allows choosing Lunch or Dinner menu, then category, e.g., lunch specials, salads, etc. Upon selection, available dishes are retrieved from a database and displayed to the user.
- Successful authorization allows performing CRUD operations on a lunch and dinner menu databases.
- **_Access upon authorization_** - Add new dish page, which allows to input dish details into a form and chose which menu and category it will be added to.
- **_Access upon authorization_** - Remove dish page allows choosing Lunch or Dinner menu, then input dish name into a form and remove a dish upon submitting it. Additionally, upon choosing a menu, all dishes are displayed.
- **_Access upon authorization_** - Update the menu page allows choosing Lunch or Dinner menu, then input dish name into a form and submit it to edit the dish. Additionally, upon choosing a menu, all dishes are displayed.
- Bootstrap form validation that disables submission until all conditions are met. Additionally, real time feedback is provided for users.

## App deployed - preview
[Click here to view](https://webdev-cw2.herokuapp.com/)