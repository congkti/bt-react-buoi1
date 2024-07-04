import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <section class="py-5">
        <div class="mx-auto max-w-7xl py-5 flex justify-between gap-10">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
