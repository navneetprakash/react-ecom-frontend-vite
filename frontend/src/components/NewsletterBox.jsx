
const NewsletterBox = () => {

  const handleSubmit = (e) => {
    // handle form submission
    e.preventDefault();
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe to our newsletter & get 10% off your first purchase</p>
      <p className="text-gray-400 mt-3">
        We promise not to spam your inbox
      </p>
      <form onSubmit={handleSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3">
        <input className="w-full sm:flex-1 outline-none border px-5 py-2 border-gray-400" type="email" placeholder="Enter your email" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsletterBox;