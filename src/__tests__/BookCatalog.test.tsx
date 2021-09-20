import { getBookById, getBooks } from "../API";

test("fetch list of books", () => {
  return getBooks().then(data => {
    expect(data.status).toBe(200)
  });
});


test("fetch book by id", () => {
  return getBookById('6145f6e47b2d246567c87677').then(data => {
    expect(data.book.title).toBe("Goals!: How to Get Everything You Want -- Faster Than You Ever Thought Possible, Edition 2")
  });
});