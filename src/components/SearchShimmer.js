const SearchShimmer = () => {
  return (
    <div className="w-10/12 m-auto">
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <h1 className="w-full h-8 mx-auto bg-gray-200 rounded-lg mt-16"></h1>

          <div className="grid grid-cols-1 gap-8 mt-4 xl:mt-6 md:grid-cols-2 xl:grid-cols-4">
            {[...Array(20)].map((_, index) => (
              <div className="flex gap-3 items-center p-8" key={index}>
                <p className="w-12 h-12 bg-gray-200 rounded-xl"></p>
                <div>
                  <p className="w-36 h-3 mx-auto bg-gray-200 mt-4 rounded-lg"></p>
                  <p className="w-16 h-2 bg-gray-200 mt-4 rounded-lg mb-4"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchShimmer;
