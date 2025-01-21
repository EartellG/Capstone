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
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "home":
      case "walmart":
        case "homeDepot":
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
        router.updatePageLinks();

        // add menu toggle to bars icon in nav bar
        document.querySelector(".fa-bars").addEventListener("click", () => {
            document.querySelector("nav > ul").classList.toggle("hidden--mobile");
        });
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
