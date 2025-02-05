import html from "html-literal";
import * as views from "./views";
import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import dotenv from "dotenv";



const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
        ${header(state)}
        ${nav(store.nav)}
        ${main(state)}
        ${footer()}
      `;
  console.log();
  router.updatePageLinks();
}

router.hooks({
  before: async (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "stores":
         await axios
          .get(`${process.env.CAPSTONE_API_URL}/hardwares`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);

            store.stores.hardwares = response.data;


          })
          .catch((error) => {
            console.log("It puked", error);

          });
        await axios
          .get(`${process.env.CAPSTONE_API_URL}/groceries`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);

            store.stores.food = response.data.filter((grocery) => grocery.food );
            store.stores.drinks = response.data.filter((grocery) => grocery.drink );
            console.log("response drinks", store.stores.drinks);
            console.log("response food", store.stores.food);



          })
          .catch((error) => {
            console.log("It puked", error);

          });
          done();
        break;

      case "list":
         await axios
          .get(`${process.env.CAPSTONE_API_URL}/hardwares`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);

            store.list.hardwares = response.data;


          })
          .catch((error) => {
            console.log("It puked", error);

          });
        await axios
          .get(`${process.env.CAPSTONE_API_URL}/groceries`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);

            store.list.groceries = response.data;


          })
          .catch((error) => {
            console.log("It puked", error);

          });
          done();
        break;

      case "home":
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`)
          .then(response => {
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            done();

          })
          .catch((err) => {
            console.log(err);
            done();
          });
          break;
          default :
            // We must call done for all views so we include default for the views that don't have cases above.
            done();
            // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
        }
      },
      already: (match) => {
        const view = match?.data?.view ? camelCase(match.data.view) : "home";

        render(store[view]);
      },
      after: (match) => {
        const view = match?.data?.view ? camelCase(match.data.view) : "home";
        router.updatePageLinks();

        // add menu toggle to bars icon in nav bar
        document.querySelector(".fa-bars").addEventListener("click", () => {
            document.querySelector("nav > ul").classList.toggle("hidden--mobile");
        });
        if (view === "stores") {
          document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = event.target.elements;
            console.log(formData);
            console.log(formData.tooltype.selectedOptions);
            const tools = [];
            for (let input of formData.tooltype.selectedOptions) {
              tools.push(input.value);
            }
            console.log(tools);



            console.log(formData.food.selectedOptions);
            const Foods = [];
            for (let input of formData.food.selectedOptions) {
              Foods.push(input.value);
            }
            console.log(Foods);


            console.log(formData.drink.selectedOptions);
            const Drinks = [];
            for (let input of formData.drink.selectedOptions) {
              Drinks.push(input.value);
            }
            console.log(Drinks);

            const stringTools = tools.join(", ");
            const stringFoods = Foods.join(", ");
            const stringDrinks = Drinks.join(", ");
            const requestData = {
              tooltype: stringTools,
              food: stringFoods,
              drink: stringDrinks
            };
            console.log(requestData);
            store.list.currentList = requestData;
            router.navigate("/list");

          });
      }
    }
  });

    router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": (match) => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      // Determine if the view name key exists in the store object
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
