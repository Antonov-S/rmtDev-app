import { useEffect, useState } from "react";

import { BASE_URL } from "./constants";
import { JobItem, JobItemExpanded } from "./types";

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchJobItem = async () => {
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      setJobItem(data.jobItem);
    };

    fetchJobItem();
  }, [id]);

  return jobItem;
};

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

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

  return [jobItemsSliced, isLoading] as const;
};
