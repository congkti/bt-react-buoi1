import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <>
      <Banner />

      <section className="py-5">
        <div className="mx-auto max-w-7xl py-5 flex justify-between gap-10">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </>
  );
};

export default Body;
