import { render } from "@testing-library/react";
import BookList from "../Components/BookList";

test("render boklist component", () => {
    const mockState: ApiDataType = {
        message: "",
        status: -1,
        books: [{
            title: "The Witcher #1",
            year: 2014,
            _id: "6145f6e47b2d246567c876bc",
            description: "The Witcher Description"
          },
          {
            title: "Spider-Man: Anti-Venom",
            year: 2010,
            _id: "6145f6e47b2d246567c876bd",
            description: "Spider-Man Description"
          },
          {
            title: "Battle Sight Zero",
            year: 2019,
            _id: "6145f6e47b2d246567c876be",
            description: "Battle Sight Description"
          }]
    };
    const { queryByTestId } = render(
      <BookList books = {mockState.books}/>
    );
    expect(queryByTestId(/book-list/i)).toBeTruthy();
});