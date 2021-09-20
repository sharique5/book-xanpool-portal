import { render } from "@testing-library/react";
import BookItem from "../Components/BookItem";

test("render book component", () => {
    const mockState: BookApiDataType = {
        message: "",
        status: -1,
        book: {
            title: "Spider-Man: Anti-Venom",
            year: 2010,
            _id: "6145f6e47b2d246567c876bd",
            description: "Spider-Man Description"
        }
    };
    
    const { queryByTestId } = render(
      <BookItem book = {mockState.book}/>
    );
    expect(queryByTestId(/book-item/i)).toBeTruthy();
});

test("verify book title", () => {
    const mockState: BookApiDataType = {
        message: "",
        status: -1,
        book: {
            title: "Spider-Man: Anti-Venom",
            year: 2010,
            _id: "6145f6e47b2d246567c876bd",
            description: "Spider-Man Description"
        }
    };
    
    const result = render(
      <BookItem book = {mockState.book}/>
    );

    const title = (result.container.querySelector('[data-testid="title"]') || {}).innerHTML || ""
    expect(title).toEqual("Spider-Man: Anti-Venom");
});

test("verify book year", () => {
    const mockState: BookApiDataType = {
        message: "",
        status: -1,
        book: {
            title: "Spider-Man: Anti-Venom",
            year: 2010,
            _id: "6145f6e47b2d246567c876bd",
            description: "Spider-Man Description"
        }
    };
    
    const result = render(
      <BookItem book = {mockState.book}/>
    );

    const year = (result.container.querySelector('[data-testid="year"]') || {}).innerHTML || -1
    expect(year).toEqual("2010");
});

test("verify book description", () => {
    const mockState: BookApiDataType = {
        message: "",
        status: -1,
        book: {
            title: "Spider-Man: Anti-Venom",
            year: 2010,
            _id: "6145f6e47b2d246567c876bd",
            description: "Spider-Man Description"
        }
    };
    
    const result = render(
      <BookItem book = {mockState.book}/>
    );

    const desc = (result.container.querySelector('[data-testid="description"]') || {}).innerHTML || ""
    expect(desc).toEqual("Spider-Man Description");
});