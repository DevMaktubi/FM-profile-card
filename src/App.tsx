function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-[326px] md:w-[350px] h-[374px] bg-white rounded-2xl flex flex-col justify-start items-center">
        <section
          id="card-background"
          className="bg-bg-bubbles min-h-[140px] min-w-full rounded-t-2xl"
        ></section>
        <section
          id="profile-info"
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col w-full justify-center items-center mb-6">
            <div className="border-[6px] border-white rounded-full w-28 h-28 -mt-14 bg-white overflow-hidden mb-4">
              <img
                src="/assets/image-victor.jpg"
                alt="Victor Crest Image"
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-title font-bold mb-2">
                Victor Crest{" "}
                <span className="text-gray font-normal ml-2">26</span>
              </h1>
              <h2 className="text-gray text-subtitle">London</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-border border-opacity-30 w-full py-6 px-12">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-title font-bold">80K</h1>
              <p className="text-body text-gray">Followers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-title font-bold">803K</h1>
              <p className="text-body text-gray">Likes</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-title font-bold">1.4K</h1>
              <p className="text-body text-gray">Photos</p>
            </div>
          </div>
        </section>
        <div className="md:absolute hidden  md:top-[-473px] md:left-[-473px] bg-bg-pattern-top w-[622px] h-[621px] md:w-[976px] md:h-[976px]" />
        <div className="md:absolute hidden md:bottom-[-473px] md:right-[-473px] bg-bg-pattern-top w-[622px] h-[621px] md:w-[976px] md:h-[976px]" />
      </div>
    </main>
  );
}

export default App;
