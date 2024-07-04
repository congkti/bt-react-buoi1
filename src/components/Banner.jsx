const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl py-5">
      <div className="p-8 bg-gray-100">
        <h1 className="text-5xl mb-6">A warm welcome!</h1>
        <p className="text-lg mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iure
          dolore eveniet rem exercitationem nisi fugit nostrum, tempora
          praesentium! Fugit quae quia maiores saepe repellendus!
        </p>
        <a
          className="bg-teal-500 text-white py-3 px-7 rounded-lg inline-block hover:bg-gray-800 transition-all"
          href="#!"
        >
          Call to action
        </a>
      </div>
    </div>
  );
};

export default Banner;
