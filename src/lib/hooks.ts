import { useEffect, useState } from "react";

import { BASE_URL } from "./constants";

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch(BASE_URL + `?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return {
    jobItems,
    isLoading
  };
};
