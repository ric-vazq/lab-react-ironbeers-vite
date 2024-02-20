import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [beerData, setBeerData] = useState({});
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      let data = await response.data;
      console.log(data);
      setBeerData(data);
      setPending(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center mb-5">
      {pending && <p>Loading...</p>}
      <img
        src={beerData.image_url}
        alt=""
        style={{ height: "300px", width: "120px" }}
      />
      <div className="flex justify-between w-1/4 items-center">
        <h1 className="text-5xl">{beerData.name}</h1>
        <h3 className="text-3xl">{beerData.attenuation_level}</h3>
      </div>
      <div className="flex justify-between w-1/4 items-center">
        <h1 className="text-2xl text-gray-500">{beerData.tagline}</h1>
        <p className="text-base">{beerData.first_brewed}</p>
      </div>
      <p className="text-center w-5/12">{beerData.description}</p>
      <p>{beerData.contributed_by}</p>
    </div>
  );
}
export default RandomBeersPage;
