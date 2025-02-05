import html from "html-literal";
export default state => html`
  <h2 class="listType">Tools</h2>
  <ol>
    ${state.currentList.tooltype}
  </ol>
  <h2 class="listType">Food</h2>
  <ol>
    ${state.currentList.food}
  </ol>
  <h2 class="listType">Drink</h2>
  <ol>
    ${state.currentList.drink}
  </ol>
`;
