// import html from "html-literal";
// export default state => html`
//   <!-- <div id="tablesWrapper">
//     <section id="WM">
//       <table id="WM">
//         <tr>
//           <th>Food</th>
//           <th>Drink</th>
//           <th>Brand</th>
//         </tr>
//         ${state.groceries
//           .map(grocery => {
//             return `<tr><td>${grocery.food}</td><td>${grocery.drink}</td><td>${grocery.brand}`;
//           })
//           .join("")}
//       </table>
//     </section>

//     <section id="HD">
//       <table id="HD">
//         <tr>
//           <th>Tooltype</th>
//           <th>Brand</th>
//         </tr>
//         ${state.hardwares
//           .map(hardware => {
//             return `<tr><td>${hardware.tooltype}</td><td>${hardware.brand}
//           `;
//           })
//           .join("")}
//       </table>
//     </section>
//   </div>
// `; -->

import html from "html-literal";
export default state => html`
  <div id="tablesWrapper">
    <section id="WM">
      <table id="WM">
        <tr>
          <th>Food</th>
          <th>Drink</th>
          <th>Brand</th>
          <th>Tooltype</th>
          <th>Brand</th>
        </tr>
        ${state.groceries
          .map(grocery => {
            return `<tr><td>${grocery.food}</td><td>${grocery.drink}</td><td>${
              grocery.brand
            }</td> ${state.hardwares
              .map(hardware => {
                return `<td>${hardware.tooltype}</td><td>${hardware.brand}</tr>
          `;
              })
              .join("")}`;
          })
          .join("")}
      </table>
    </section>

    <section id="HD">
      <table id="HD">
        <tr>
          <th>Tooltype</th>
          <th>Brand</th>
        </tr>
        ${state.hardwares
          .map(hardware => {
            return `<td>${hardware.tooltype}</td><td>${hardware.brand}</tr>
          `;
          })
          .join("")}
      </table>
    </section>
  </div>
`;
