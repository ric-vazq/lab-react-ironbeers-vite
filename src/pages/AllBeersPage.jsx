import axios from "axios";
import { useEffect, useState } from "react";
import BeerRow from "../components/BeerRow";

function AllBeersPage() {
  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      let data = await response.data;
      console.log(data);
      setBeersData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 mx-auto mb-5">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-16 py-3">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="px-6 py-3">
            Product
          </th>
          <th scope="col" className="px-6 py-3">
            Tagline
          </th>
          <th scope="col" className="px-6 py-3">
            Contributors
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Links</span>
          </th>
        </thead>
        <tbody>
          {beersData.map((beer) => {
            return <BeerRow key={beer._id} beer={beer} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllBeersPage;
