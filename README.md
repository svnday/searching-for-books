# Searching for books
This app is for Module 21: MERN  in my full stack web developer bootcamp.

This is a website that allows you to search for books and while logged in, save them to a list for reference later. Users are also able to remove books from their list and log out. Users will be automatically logged out after 2 hours of inactivity.

## User Story

```
AS AN avid reader  
I WANT to search for new books to read  
SO THAT I can keep a list of books to purchase  

```

## Acceptance Criteria

```
GIVEN a book search engine  
WHEN I load the search engine  
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
WHEN I click on the Search for Books menu option  
THEN I am presented with an input field to search for books and a submit button  
WHEN I am not logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site  
WHEN I click on the Login/Signup menu option  
THEN a modal appears on the screen with a toggle between the option to log in or sign up  
WHEN the toggle is set to Signup  
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button  
WHEN the toggle is set to Login  
THEN I am presented with two inputs for an email address and a password and login button  
WHEN I enter a valid email address and create a password and click on the signup button  
THEN my user account is created and I am logged in to the site  
WHEN I enter my account’s email address and password and click on the login button  
THEN I the modal closes and I am logged in to the site  
WHEN I am logged in to the site  
THEN the menu options change to Search for Books, an option to see my saved books, and Logout  
WHEN I am logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account  
WHEN I click on the Save button on a book  
THEN that book’s information is saved to my account  
WHEN I click on the option to see my saved books  
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author,  description, image, and a link to that book on the Google Books site and a button to remove a book from my account  
WHEN I click on the Remove button on a book  
THEN that book is deleted from my saved books list  
WHEN I click on the Logout button  
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and  an input field to search for books and a submit button  
```

## Technology Used
```
This project uses the following technologies:  
React
GraphQL
MongoDB
Mongoose
JSONWebToken
Apollo
```

## Instructions For Use
```
This application can be used by navigating to [https://searching-for-books-svnday.herokuapp.com/](https://searching-for-books-svnday.herokuapp.com/)

If running on your local machine, clone the repository.  
Next, install dependencies by running `npm init`  
Start the server by running command `npm develop` from the root directory  
Open your browser and navigate to: [http://localhost:3001/](http://localhost:3001/)  
```

____________________________________________________________________________________________________


Link to repository: [https://github.com/svnday/searching-for-books](https://github.com/svnday/searching-for-books)  
Link to deployed application: [https://searching-for-books-svnday.herokuapp.com/](https://searching-for-books-svnday.herokuapp.com/)  
Link to screenshot: ![https://i.imgur.com/ylRrXmk.png](https://i.imgur.com/ylRrXmk.png)  
