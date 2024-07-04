const Item = () => {
  return (
    <div className="w-1/4 bg-white rounded-lg shadow-lg">
      <img
        className="w-full rounded-t-lg"
        src="/public/placeholder-image.png"
        alt=""
      />
      <div className="text-center px-3 pt-3 pb-5">
        <h3 className="font-bold text-lg mb-3 mt-2 text-teal-600">
          Fresh new layout
        </h3>
        <p className="border-b-2 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          beatae tenetur.
        </p>
        <a
          className="bg-teal-500 text-white py-2 px-5 mt-6 rounded-lg inline-block hover:bg-gray-800 transition-all"
          href="#!"
        >
          Find Out More
        </a>
      </div>
    </div>
  );
};

export default Item;
