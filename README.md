# City Whisperer ~ Backend
# Hello to 9-4 Capstone Team 6 backend

![Tour Favicon](https://github.com/MarkRobertson67/9-4-capstone-team-6-backend/assets/115380009/14733b98-691e-4e81-b9e2-03874ed15665)

On the City Whisperer back-end, our robust server powers the entire application, facilitating smooth communication and data management. We've implemented a structured database with extensive features and data types, guaranteeing the accuracy and reliability of our walking routes. You can expect a secure and efficient experience, with dedicated routes for creating, viewing, editing, and removing your city exploration resources. Our server also delivers accurate responses for unmatched routes, ensuring a hassle-free exploration experience.

# **Installation**

## **Back-end**

1.  Clone the repository:   git clone <repository URL>
2.  Navigate to the back-end directory: cd back-end
3.  Install the back-end dependencies:  npm install
4.  Create a .env file in the back-end directory and configure the following environment variables: <br>
PORT=7777<br>
PG_HOST=localhost<br>
PG_PORT=5432<br>
PG_DATABASE=tours<br>
PG_USER=postgres<br>
5.  Make sure to include in your .gitignore file:   node_modules
.env
.DS_Store
5.  Start the back-end server:  npm start, which will actually start Front and back-end.


# **Database**

To connect to the database and view the tables:

1.  Open the PostgreSQL command line interface by running the following command:   
        1.  psql -U postgres -f db/schema.sql<br>
        2.  psql -U postgres -f db/seed.sql   or to run run both 'npm run db:setup'
                db:setup: This script is used to set up the initial state of the database. It executes SQL scripts that define the database schema and potentially populate initial data. The purpose of the db:setup script is to create the necessary tables and configure the database to a predefined state. This script is typically run once during the initial setup or when you want to reset the database to its initial state.
        3.  To start the db, 'npm run db:start' & to shutdown the db, 'npm run db:shutdown'
                db:start: This script is used to start the database server. It ensures that the database server is up and running, allowing your application to establish a connection and interact with the database.
                The db:stop script is used to stop the running instance of the database server. It gracefully shuts down the database server, terminating any active connections and releasing system resources. The purpose of the db:stop script is to ensure a clean and controlled shutdown of the database server. 
                
                Typically, you would use the `db:shutdown` script when you want to stop the database server after you have finished using it or when you need to perform maintenance tasks. It ensures that the database server is properly shut down, preventing any potential data corruption or inconsistencies.

        4.   To summarize:

                - `npm run db:start` starts the database server, making it available for your application to connect.
                - `npm run db:setup` initializes the database with the necessary structure and initial data.
                - `npm run db:shutdown` gracefully shuts down the running instance of the database server.

These scripts work together to manage the lifecycle of the database server, from starting it up to setting it up and finally stopping it when it's no longer needed.


2.  Once logged in, you can view the list of tables by running the following command: \dt
3.  To view the contents of a specific table, use the following command:    SELECT * FROM tour (or commentary or pointofinterest);

That's it! You should now have the City Whisperer App installed and running on your local machine. Enjoy exploring the world of AI self guided walking generated tours.
