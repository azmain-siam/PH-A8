const Contact = () => {
  return (
    <div className="poppins mt-4">
      <h3 className="font-bold text-2xl text-[#23BE0A] mb-5">
        Send Your Request
      </h3>
      <p className="font-medium text-lg mb-10">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>
      <div className="flex gap-7">
        <form className="w-[55%]" action="#">
          <div className="flex gap-6 w-full">
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                className="input input-bordered w-full"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label> <br />
              <input
                className="input input-bordered w-full"
                type="phone"
                name="phone"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                className="input input-bordered"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label> <br />
              <input
                className="input input-bordered"
                type="phone"
                name="subject"
                placeholder="Subject here"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message">Message</label> <br />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
