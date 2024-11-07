const Shimmer = () => {
  return (
    <div className="w-9/12 m-auto">
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <div className="m-1">
            <p className="w-8/12 h-8 mx-auto bg-gray-200 rounded-lg mb-5"></p>
            <div className="flex gap-1 justify-center">
              <p className="xl:w-28 h-6 bg-gray-200 rounded-lg sm:w-18"></p>
              <p className="xl:w-28 h-6 bg-gray-200 rounded-lg sm:w-18"></p>
              <p className="xl:w-28 h-6 bg-gray-200 rounded-lg sm:w-18"></p>
              <p className="xl:w-28 h-6 bg-gray-200 rounded-lg sm:w-18"></p>
              <p className="xl:w-28 h-6 bg-gray-200 rounded-lg sm:w-18"></p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-10 xl:mt-10 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {[...Array(8)].map((_, index) => (
              <div className="w-full" key={index}>
                <div className="w-full h-40 bg-gray-300 rounded-xl"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shimmer;
