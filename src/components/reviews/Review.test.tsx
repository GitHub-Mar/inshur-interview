import React from "react";
import { render } from "@testing-library/react";
import { Review } from "./Review";
import { ReviewModel } from "../../models/ReviewModel";

describe("Review unit tests", () => {
  it("displays the review properties", () => {
    const testData: ReviewModel = {
      id: 1,
      createDate: new Date("1/1/2022"),
      authorId: 1,
      rating: 3,
      userId: 2,
      text: "Test review",
    };

    const { getByText } = render(<Review review={testData} />);
    expect(getByText("Test review")).toBeInTheDocument();
    expect(getByText("Sat Jan 01 2022")).toBeInTheDocument();
  });
});
