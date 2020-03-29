# Purpose of the application

We have been tasked with creating a REACT application that shows a list of employee information.  The application will initially list a default list of 100 users randomly selected.  The user, will then have the opportunity to perform the following actions:

* Sort the list either asscending or descending based on any of the fields
* Filter or search (same end-result) by entering a string or partial string on the search box.  The application will search all fields so the application will return all rows in which any field contains the string entered by the user

Overall, we used www.randomuser.me as the random user data generator.  We also used Material Design Bootstrap datatable to render the information.  We used older generation functionality such as Bootrstap and Google fonts.  Finally, wrapped all of the logic using Facebook's react library to build the overall application, as required by the assignment.

Next, we will discuss the data available, the technology/plugins used, and some potential improvements, should time had allowed.

## User Data

Data is provided by the website https://randomuser.me/, which is a free, open-source API for generating random user data.  None of the information is real, even if it looks so.

The API is called by using a simple fetch call such as  fetch("https://randomuser.me/api/").  The API can be configured to return the following specific request
*  Number of records up to a maximum of 5,000 requests
*  Gender of the records
*  Nationalities
*  Making of specific data responses

The response is in JSON format.  We found this API to be simple for our purposes.  Given it is free, latency is variable but generally tolerable for this particular application.

##  Material Design Bootstrap datatable

As in our prior group projects, we have leveraged the versatility of dataTables from both Material Design Bootrstrap and CDN tables.  Material Design Bootrstrap was selected this time around since they have a solution for React.  We have, therefore chosen to use their implementation to present the results fetched from the randomuser API.

The table presents a total of 10 users at the time.  This setting can be changed to include up to 100 records.  The table allows to paginate to access the records not visible in the current screen.  The table allows to also sort by any of the columns either ascending or descending.  Finally, the table provides a search box which acts as a filter that shows only those records with data that matches the search box text entered at any of its fields.


##  Deployment to Heroku

This application has been deployed to Heroku at www.heroku.com

## Future enhancements

The most significant changes could be as follows

* Allows a record to be selected and then a pop-up screen shows with more detailed information.

* Allows the user to select the number of records returned.

* Allows the user to selecte nationality, gender, and which data fields need to be shown on the table.

##  Overall application demonstration

![GIF of input](./employee_directory.gif)
