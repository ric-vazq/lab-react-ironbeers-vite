import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col gap-5 mx-auto items-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/beers"}>
          <img src={beers} alt="" className="rounded-t-lg" />
        </Link>
        <div className="p-5">
          <Link to={"/beers"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              All Beers
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Come browse our selection of beers
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/random-beer"}>
          <img src={randomBeer} alt="" className="rounded-t-lg" />
        </Link>
        <div className="p-5">
          <Link to={"/random-beer"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Random Beer
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Looking for a surprise? Click here to receive the details from a
            random beer!
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"/new-beer"}>
          <img src={newBeer} alt="" className="rounded-t-lg" />
        </Link>
        <div className="p-5">
          <Link to={"/new-beer"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Add a Beer
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Have a favorite beer and cannot find it in our selection? Add it
            using our interactive form!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
