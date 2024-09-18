import User from "./User";
import UserClass from "./UserClass";
const Contact = () => {
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl text-center">Contact Us</h1>
      <form className="flex m-4 border border-purple-300 rounded-md justify-between">
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-black p-2 m-2"
          ></input>
          <input
            type="text"
            placeholder="Feedback"
            className="border border-black p-2 m-2"
          ></input>
        </div>
        <button
          type="submit"
          className="p-2 px-8 m-2 border border-purple-600 rounded-lg bg-purple-200 cursor-pointer active:bg-purple-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
