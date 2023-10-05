import desktopImage from "./assets/image-product-desktop.jpg";
import mobileImage from "./assets/image-product-mobile.jpg";

function App() {
  return (
    <div className="min-h-screen bg-[#f3eae3] flex">
      <main className=" w-4/6 md:w-1/2 lg:w-1/2 xl:w-1/3  m-auto flex lg:flex-row flex-col bg-white rounded-xl">
        <aside className=" lg:w-1/2">
          <img
            src={desktopImage}
            className="lg:block hidden h-full w-full rounded-tl-lg rounded-bl-lg"
            alt=""
          />
          <img
            src={mobileImage}
            alt=""
            className="block lg:hidden h-full w-full rounded-tl-lg rounded-tr-lg"
          />
        </aside>

        <aside className="flex flex-col lg:w-1/2 p-6 justify-evenly">
          <span className="tracking-[0.2em] text-sm lg:text-base text-gray-600">
            PERFUME
          </span>
          <h1 className="font-youngserif font-bold text-[1.75rem] lg:text-2xl lg:w-3/4 leading-8">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="my-2 text-gray-600 lg:text-base w-5/6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-creator for the house of CHANEL
          </p>

          <div className="flex flex-row justify-around items-center lg:w-10/12">
            <h1 className="font-youngserif py-4 text-2xl font-bold sm:py-4 sm:text-2xl md:py-4 lg:text-3xl text-green-800/80">
              $149.99
            </h1>
            <h2 className="line-through text-gray-600">$169.99</h2>
          </div>
          <button className="text-white font-semibold bg-green-800/90 py-3 w-11/12 rounded-lg">
            Add to Cart
          </button>
        </aside>
      </main>
    </div>
  );
}

export default App;
