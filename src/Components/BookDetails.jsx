const BookDetails = () => {
  return (
    <section className="flex gap-12 work-sans items-center mt-3">
      {/* Image Container */}
      <div className="min-w-[45%] h-[570px] rounded-2xl bg-slate-400">
        <img src="" alt="" />
      </div>

      {/* Details Container */}
      <div>
        <h3 className="playfair text-4xl font-bold text-[#131313] mb-4">
          Name of the book
        </h3>
        <p className="font-medium text-[#131313CC] text-xl">
          By: Name of author
        </p>
        <hr className="my-4" />
        <p className="font-medium text-[#131313CC] text-xl">Category</p>
        <hr className="my-4" />
        <p className="text-[#131313CC] mb-14">
          <span className="text-[#131313] font-bold">Review:</span> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Accusamus provident nisi
          at tempore consequatur natus eaque maxime, voluptate sint rerum
          laudantium recusandae culpa libero nobis illum atque repudiandae quos
          ipsum eos voluptatum asperiores. Dolorem, praesentium nam ipsum
          blanditiis possimus, nulla unde perferendis deserunt quo facilis
          ducimus fuga. Eos, consequuntur? Vitae?
        </p>
        <h4 className="text-[#131313] font-bold mb-5">
          Tags:{" "}
          <span className="px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium">
            Fiction
          </span>
        </h4>
        <hr className="my-4" />
        <div className="flex gap-6 mb-8">
          <div className="space-y-3">
            <h4>Number of pages:</h4>
            <h4>Publisher:</h4>
            <h4>Year of Publishing:</h4>
            <h4>Rating:</h4>
          </div>
          <div className="space-y-3 font-semibold text-[#131313]">
            <h4>Number of pages</h4>
            <h4>Publisher</h4>
            <h4>Year of Publishing</h4>
            <h4>Rating</h4>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mb-6">
          <button className="bg-white hover:bg-[#7cdb6e] border-2 duration-300 text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg">
            Read
          </button>
          <button className="bg-[#59C6D2] hover:bg-[#86dae4]  duration-300 text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-white">
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
