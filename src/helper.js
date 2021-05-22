const getNonReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.some((transaction) => !transaction.returned));
  };
  const getBooksByAuthorId = (books, authorId) => {
    return books.filter((book) => book.authorId === authorId);
  };
  const getAuthorById = (authors, id) => {
    return authors.find((author) => author.id === id);
  };
  const getReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.every((transaction) => transaction.returned));
  };
  module.exports = {
    getAuthorById,
    getNonReturnedBooks,
    getReturnedBooks,
    getBooksByAuthorId
  };