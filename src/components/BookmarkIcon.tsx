import { BookmarkFilledIcon } from "@radix-ui/react-icons";

import { useBookmarksContext } from "../lib/hooks";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const context = useBookmarksContext();
  const { bookmarkedIds, handleToggleBookmark } = context;

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
