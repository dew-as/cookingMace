import { useEffect, useState } from "react";

const useResmenu = (params) => {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.490872999999999&lng=76.9527483&restaurantId=" +
        params.id
    );
    const json = await data.json();
    setResMenuData(json.data);
  };
  return resMenuData;
};

export default useResmenu;
