import WatchList from "./components/WatchList";

function App() {
  return (
    <div>
      <div> Here the addbar! </div>
      <div class="container px-lg-5">
        <div class="row">Watchlist </div>
        <div class="row">
          <div class="col py-3 px-lg-5 border bg-light ">
            <WatchList />
          </div>
        </div>
      </div>
      <div class="container px-lg-5">
        <div class="row">Watchedlist </div>
        <div class="row">
          <div class="col py-3 px-lg-5 border bg-light ">
            <WatchList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
