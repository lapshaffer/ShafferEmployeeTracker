# ShafferEmployeeTracker
A content management system written in JavaScript, utilizing Node.js, Inquirer and MySQL, to manage a company's employee database

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Developer Notes

```
Hello! My name is Lisa Shaffer, and boy howdy did I have some troubles in development!
Unfortunately, I was unable to run the inquirer prompts on my machine to test this application, or to film a video of the app in use
I was very kindly assisted by Dan Gross with debugging, as he was able to open the application on his machine and run it, even though I was not. I've done my best to implement the fixes he suggested, but as I was unable to test them in the command line, I'm not 100% sure
Near the end of our meeting, despite not touching the .env or connection files, I was unable to connect to my database without hard-coding the credentials into the inquiries/index.js file, the file this application is run from. Upon hard-coding these credentials into the file, I was back to getting my static, non-selectable prompts from inquirer. Tiny victories

I would very much like to continue development on this application in the future, if I'm able to get the inquirer prompts to function on my machine, or get access to a different one. I'd love to see it working someday!
Thank you for your time in reading these notes, your patience is much appreciated
```

## Resources and Questions

```
Please reach out to me with any questions about this application at lapshaffer@gmail.com
GitHub: https://github.com/lapshaffer
```
