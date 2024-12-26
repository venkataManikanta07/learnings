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

- Add User takes to create page where we can add new  user 
- Edit will go to the edit user page base on the Id and edit the existing user. 
- Delete will remove the user from the Json. 

# Pagination 

- Loaded Dummy Json products data
- Styled the UI  based on this 
- Created a pagination.
- The state changewill of current page will handle the items that has to be displayed. 

# CAROUSEL 

- Design the Carousel with single image 
- Use absolute relative to design them accordingly 
- Transform -trasnlate-x-1/2 to left align properly
- maintain a constant state of the image slide
- use the functions and manipulate the images based on the click. 
