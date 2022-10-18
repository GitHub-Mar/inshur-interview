import { render } from "@testing-library/react";
import { User } from "./User";
import { UserModel } from "../../models/UserModel";

let mockReturnValue: Array<any> = [true, undefined];
jest.mock("../../hooks/useUser", () => ({
  useUser: () => mockReturnValue,
}));

describe("User component unit tests", () => {
  const userId: number = 1;
  const testUser: UserModel = {
    id: 1,
    firstName: "Test",
    lastName: "User",
    emailAddress: "test@test.com",
    username: "testUser",
    favouriteFood: "Carrot",
    jobTitle: "test",
  };

  it("renders a loading message before the data has returned", () => {
    const { getByText } = render(<User id={userId} />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the data once some has been received", () => {
    mockReturnValue = [false, testUser];

    const { getByText } = render(<User id={userId} />);

    expect(getByText("Name: Test User")).toBeInTheDocument();
    expect(getByText("Title: test")).toBeInTheDocument();
    expect(getByText("Favourite food: Carrot")).toBeInTheDocument();
  });
});
