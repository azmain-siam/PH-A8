const Contact = () => {
  return (
    <div className="poppins mt-4 grid md:grid-cols-2 gap-7 mb-10">
      <div className="border-[#23BE0A] border-2 p-5 md:p-6 rounded-2xl border-opacity-50">
        <h3 className="font-bold text-2xl text-[#23BE0A] mb-5">
          Send Your Request
        </h3>
        <p className="font-medium md:text-lg mb-10 text-[#131313c0]">
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </p>
        <div>
          <form className="w-full" action="#">
            <div className="flex gap-4 md:gap-6 mb-4 w-full">
              <div className="space-y-2 w-full">
                <label className="text-[#23BE0A] font-medium" htmlFor="name">
                  Name
                </label>
                <br />
                <input
                  className="input input-bordered w-full"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2 w-full">
                <label className="text-[#23BE0A] font-medium" htmlFor="phone">
                  Phone
                </label>
                <br />
                <input
                  className="input input-bordered w-full"
                  type="phone"
                  name="phone"
                  placeholder="Your Phone"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 md:gap-6 mb-4 w-full">
              <div className="space-y-2 w-full">
                <label className="text-[#23BE0A] font-medium" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  className="input input-bordered w-full"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="space-y-2 w-full">
                <label className="text-[#23BE0A] font-medium" htmlFor="subject">
                  Subject
                </label>
                <br />
                <input
                  className="input input-bordered w-full"
                  type="phone"
                  name="subject"
                  placeholder="Subject here"
                  required
                />
              </div>
            </div>

            <div className="mb-4 space-y-2">
              <label className="text-[#23BE0A] font-medium " htmlFor="message">
                Message
              </label>{" "}
              <br />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="btn bg-[#23BE0A] w-full text-white md:text-xl hover:bg-white hover:text-black border-2 border-[#23BE0A] hover:border-[#23BE0A]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}

      <div className="border-[#23BE0A] border-opacity-50 border-2 p-6 rounded-2xl h-full ">
        <h3 className="font-bold text-2xl text-[#23BE0A] mb-5">Reach Us</h3>
        <div className="flex gap-5">
          <div className="md:text-lg text-sm font-semibold *:mb-6">
            <p>Email:</p>
            <p>Phone:</p>
            <p>Address:</p>
          </div>
          <div className="font-medium text-sm md:text-lg *:mb-6">
            <p>book-vibe@mail.com</p>
            <p>+1 234 56789</p>
            <p>923 Huel Rapids, West Okeyshire, Texas 77222</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
