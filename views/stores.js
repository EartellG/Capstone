import html from "html-literal";
export default state => {
  console.log(state.hardwares);
  console.log(state.groceries);
  return html`
    <section>
      <form id="Hd" method="POST" action="">
        <h2>Hardware</h2>
        <!-- add class to h2 for styling -->

        <div>
          <label class="listType" for="tooltype">Tool Type</label>
          <select name="tooltype" id="tooltype" multiple>
            <option value="Not Selected">--Please choose an option--</option>
            ${state.hardwares.map(hardware => {
              return `<option value="${hardware.tooltype}">${hardware.tooltype}</option>`;
            })}
          </select>
        </div>

        <h2>Groceries</h2>
        <!-- add class to h2 for styling -->
        <div>
          <label class="listType" for="food">Food</label>
          <select name="food" id="food" multiple>
            <option value="Not Selected">--Please choose an option--</option>
            ${state.food.map(food => {
              return `<option value="${food.food}">${food.food}</option>`;
            })}
          </select>
        </div>
        <div>
          <label class="listType" for="drink">Drink</label>
          <select name="drink" id="drink" multiple>
            <option value="Not Selected">--Please choose an option--</option>
            ${state.drinks.map(drink => {
              return `<option value="${drink.drink}">${drink.drink}</option>`;
            })}
          </select>
        </div>
        <input type="submit" value="Search" />
      </form>
    </section>
  `;
};
