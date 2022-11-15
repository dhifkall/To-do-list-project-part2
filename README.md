# TODO List Project

This is a project for the Justice Redeemed Boot Camp

If you have not already, complete the [first part](https://github.com/ewlahay/ToDoList_Project) before continuing on to this.

The goal of this project is to create a dynamic TODO list in the browser. You will use JavaScript to add items to the page, alongside CSS to style and format the HTML.

But you will also sync your changes with a server using AJAX.

## Key Skills:

- AJAX
- REST APIs
- CSS Loaders

Steps:

1. Clone the project using Git
2. Create your own repository in GitHub
3. `git remote add origin git@github.com:<your_github_username>/<your_repo_name>.git`
4. Go to https://todo.ctkraleigh.com/docs and generate a token. Save this and set the `token` variable in javascript.js to your generated tokens value
5. Use the API documentation and your wits to implement the createToDo, deleteToDo, and updateToDo functions
6. Add CSS styling to show a loader over a TODO block when an API call is in progress
7. Good luck!

## Notes

- When an API call is in progress, the associated TODO block should be in a loading state
- Clicking the X icon should remove the TODO block
- Clicking anywhere else on the block should toggle the status of that TODO

## Hints:

- Use `position: absolute;` to position the loader element on top of other elements
- You can hide or show the loader by adding the `loading` class to the TODO element

You should be able to add a TODO item:

![](https://github.com/ewlahay/ToDoList_Project_Part_2/blob/main/illustrations/addTODO.gif?raw=true)

Mark a TODO as done:

![](https://raw.githubusercontent.com/ewlahay/ToDoList_Project_Part_2/main/illustrations/markAsDone.gif)

Remove TODOs from the list:

![](https://raw.githubusercontent.com/ewlahay/ToDoList_Project_Part_2/main/illustrations/removeTODO.gif)

The layout for the project should look like below:

![](https://github.com/ewlahay/ToDoList_Project_Part_2/blob/main/illustrations/addMultiple.gif)
