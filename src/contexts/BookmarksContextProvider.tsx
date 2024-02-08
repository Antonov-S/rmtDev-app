import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../lib/hooks";
import { JobItem } from "../lib/types";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: JobItem[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(prev => prev.filter(item => item !== id));
    } else {
      setBookmarkedIds(prev => [...prev, id]);
    }
  };

  const { jobItems: bookmarkedJobItems, isLoading } =
    useJobItems(bookmarkedIds);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
        bookmarkedJobItems,
        isLoading
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
// function useJobItems() {
//   throw new Error("Function not implemented.");
// }
