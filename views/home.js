import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <div class="topnav">
      <a class="active"></a>
      <input type="text" placeholder="Start list" />
    </div>
    <h1>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h1>
  </section>
`;
