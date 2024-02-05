import { useContext } from "react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

import { BookmarksContext } from "../contexts/BookmarksContextProvider";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIcon) {
  const { bookmarkedIds, handleToggleBookmark } = useContext(BookmarksContext);

  return (
    <button
      onClick={e => {
        handleToggleBookmark(id);
        e.preventDefault();
        e.stopPropagation();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
