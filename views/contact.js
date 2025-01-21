import html from "html-literal";
export default state => html`
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
  <input type="submit" value="Submit" />
`;
