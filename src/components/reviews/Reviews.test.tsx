import { render } from "@testing-library/react";
import { Reviews } from "./Reviews";
import { ReviewModel } from "../../models/ReviewModel";

let mockReturnValue: Array<any> = [true, undefined];
jest.mock("../../hooks/useReviews", () => ({
  useReviews: () => mockReturnValue,
}));

describe("User component unit tests", () => {
  const userId: number = 1;
  const testReviews: ReviewModel[] = [
    {
      id: 1,
      createDate: new Date("1/1/2022"),
      authorId: 1,
      rating: 3,
      userId: 2,
      text: "Test review",
    },
    {
      id: 2,
      createDate: new Date("3/1/2022"),
      authorId: 1,
      rating: 3,
      userId: 2,
      text: "Test review 2",
    },
  ];

  it("renders a loading message before the data has returned", () => {
    const { getByText } = render(<Reviews userId={userId} />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the data once some has been received", () => {
    mockReturnValue = [false, testReviews];

    const { getByText, queryAllByTestId } = render(<Reviews userId={userId} />);

    expect(queryAllByTestId("user-review")).toHaveLength(2);
    expect(getByText("Test review")).toBeInTheDocument();
    expect(getByText("Sat Jan 01 2022")).toBeInTheDocument();
  });
});
