import html from "html-literal";
export default state => html`
  <h1>Contact Me</h1>
  <fieldset>
    <label for="first name"
      >Your First Name: <input id="first name" name="first name" type="text" />
    </label>
  </fieldset>
  <fieldset>
    <label for="last name"
      >Your Last Name: <input id="last name" name="last  name" type="text" />
    </label>
  </fieldset>
  <fieldset>
    <label for="email"
      >Your Email Address: <input id="email" name="email" type="text" />
    </label>
  </fieldset>
  <footer></footer>
`;
