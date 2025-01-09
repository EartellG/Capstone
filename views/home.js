import html from "html-literal";

export default state => html`
  <section id="jumbotron">
  <h1>Navi</h1>
    <img src="C:\Users\Sydne\OneDrive\Pictures\Screenshots\Screenshot 2024-12-14 052242.png" alt="">
    <div class="topnav">
        <a class="active"></a>
        <input type="text" placeholder="Start list">
      </div>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;
