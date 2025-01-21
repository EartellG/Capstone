import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <!-- <img
      src="C:UsersSydneOneDrivePicturesScreenshotsScreenshot 2024-12-14 052242.jpg"
      alt=""
    /> -->
    <div class="topnav">
      <a class="active"></a>
      <input type="text" placeholder="Start list" />
    </div>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </section>
`;
