# Bought By Many - Frontend Candidate Task

## The Task

We'd like you to write a small prototype application to allow users to browse a list of customers together with their pet insurance quotes and policies.

Here are some examples of features we would like to see, but feel free to be as creative as you wish:

* Choosing a customer displays their details along with a list of their quotes and policies.
* Choosing a quote or policy displays the details of that quote or policy.
* Customers are sorted by their `registered` field by default.
* Users can deep link to customers, quotes and policies.
* Sort order of lists can be chosen.
* Users can search for a customer, quote or policy.

The task should take approximately 2-4 hours to complete. We're not expecting you to finish the app, we're more interested to see how you approach the task so just do what you can in the time you have.

Good luck!

## Getting set up

1. Download and install [Node.js](https://nodejs.org/)

1. Clone the repository:

   ```bash
   git clone git@github.com:boughtbymany/fe-candidate-javascript-task-[your_github_username].git
   ```

1. Install dependencies:

    ```bash
    npm install
    ```

1. Run the app:

    ```bash
    # This will start an API server at http://localhost:3000
    #   and the app at http://localhost:8080

    npm run serve
    ```

## A few things to help get you started

The app was created with [Vue CLI](https://cli.vuejs.org/).

### Data API

This project exposes a REST API using [JSON Server](https://github.com/typicode/json-server) at `http://localhost:3000` which can be used to fetch the data for the app. This is automatically started when running the app but can be run seperately with:

```bash
npm run db
```

Examples:

* Customers - <http://localhost:3000/customers>
* Quotes - <http://localhost:3000/quotes>
* Policies - <http://localhost:3000/policies>

Specific customer/quotes/policies can be fetched by appending the `uuid` to the end of the URL, e.g. `http://localhost:3000/customers/fb2b4c61-940e-468a-ad92-69b05ca57e16`

#### Raw Data

The raw data can be seen in [src/db.json](src/db.json)

### Styling

* Pages don't need to be high-fidelity designs but you should make use of the existing SASS in [src/sass](src/sass) where possible.
* Please re-use existing variables where you can (these can be found in [src/sass/framework/_variables.scss](/src/sass/framework/_variables.scss))
