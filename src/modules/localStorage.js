module.exports = {
  isBookmarked: (id) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    return !!bookmarks.find((bookmark) => bookmark === id);
  },
  toggleBookmark: (id) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    localStorage.setItem(
      'bookmarks',
      JSON.stringify(
        bookmarks.find((bookmark) => bookmark === id)
          ? bookmarks.filter((bookmark) => bookmark !== id)
          : [...bookmarks, id],
      ),
    );
  },
};
