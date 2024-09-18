const Sorting = ({ data }) => {
  return (
    <div className="flex justify-start mx-3 p-4  flex-auto">
      <div className="mx-3">
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg">
          Distance🔀
        </button>
      </div>
      <div className="mx-3">
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg">
          Delivery Time⏰
        </button>
      </div>
      <div className="mx-3">
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg">
          Price For Two🤑
        </button>
      </div>
    </div>
  );
};

export default Sorting;
