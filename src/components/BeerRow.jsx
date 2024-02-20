import { Link } from "react-router-dom";

function BeerRow(props) {
  let { beer } = props;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          src={beer.image_url}
          className="w-16 md:w-32 max-w-full max-h-full"
          alt="Beer Image"
          style={{width: "60px", height: "100px"}}
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {beer.name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {beer.tagline}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {beer.contributed_by}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <Link to={`/beers/${beer._id}`}>Details</Link>
      </td>
    </tr>
  );
}
export default BeerRow;
