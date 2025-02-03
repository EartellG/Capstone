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
          <label for="tooltype">Tool Type</label>
          <input type="text" name="tooltype" id="tooltype" required />
        </div>
        <div>
          <label for="brand">Brand</label>
          <input type="text" name="brand" id="brand" required />
        </div>
      </form>
    </section>

    <section>
      <form id="Wm" method="POST" action="">
        <h2>Groceries</h2>
        <!-- add class to h2 for styling -->
        <div>
          <label for="food">Food</label>
          <input type="text" name="food" id="food" />
        </div>
        <div>
          <label for="drink">Drink</label>
          <input type="text" name="drink" id="drink" />
        </div>
        <div>
          <label for="brand">Brand</label>
          <input type="text" name="brand" id="brand" required />
        </div>
      </form>
    </section>
    <input type="submit" value="Search" />
  `;
};
