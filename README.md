# learnings

Learning each one at a time.

# AXIOS PRACTICE

- PostApi.jsx : containst the api data & methods.
- Designed the UI with Fake Data.
- InputContainer.jsx : input components are designed.
- Created DataUi component.
- DataComponent: Had individual component data.
  - used the LIFTING STATE UP. (sent data from child to parent)
- Crud operations with Json Fake api.

# CRUD APPLICATION WITH JSON SERVER.

- setup routing with component pages
- host the json data to the server
  . json-server --watch jsonFileName
- integrate with the tailwind
- Developed the UI with dummy data
- setup routing with Browser router.
  - Home
  - Read
  - Update
- Created a TableData component to display the data inside a table separately.
- Fetched the data with GET request with Axios.
- Updated the data with PUT: Axios.
- Did the DELETE request too.

  . UseNaviagte is used to redirect to new page
  . UseParams for fetching the data based on the Url link.

- Add User takes to create page where we can add new user
- Edit will go to the edit user page base on the Id and edit the existing user.
- Delete will remove the user from the Json.

# Pagination

- Loaded Dummy Json products data
- Styled the UI based on this
- Created a pagination.
- The state changewill of current page will handle the items that has to be displayed.

# CAROUSEL

- Design the Carousel with single image
- Use absolute relative to design them accordingly
- Transform -trasnlate-x-1/2 to left align properly
- maintain a constant state of the image slide
- use the functions and manipulate the images based on the click.

# MODAL

- Create the UI with A button to open the Modal
- Style the Modal UI
  - use the react Lucide UI to get the X cancel Icon.
  - use the BACKDROP BLUR to blur the background page.
  - INSET 0 : Taking access to all the 4 properties top, bottom, left, right.
  - Place Self End: for align right / more of float right
- Modal is opened and closed based on the click and the state is adjusted based on the click.
- Targeting a particular div with useRef, if that matches the target element we are closing the modal.

# TYPE SCRIPT TUTORIAL

- Revised / Learned the Required basic typescript
- Just a sample todo application with typeScript.

# NESTED LEVEL COMMENTS

- Had a dummy comments data
- Created and designed comment component which has usericon name and comment.
- Comment List component uses the comments Dummy data and calls the comment component.
- Inside this comment list component, we are again recursively calling the comments component with replies array data if present. (More of a RECURSIVE COMPONENT).


# CRUD OPERATIONS IN TRADITIONAL WAY. 

- Design the UI for showing the students data 
- Routing with react browser router. 
- Created dummy data with Json Server. 
- Did the CRUD  OPERATIONS Js traditional methods instead of AXIOS. 