import React from "react";
import { render } from "@testing-library/react";
import { User } from "./User";
import { UserModel } from "../../models/UserModel";
import { useUser } from "../../hooks/useUser";

jest.mock("../../hooks/useUser");
// const mockedUseUser = useUser as jest.Mocked<>;

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

  it("fetches user data and displays the results", () => {
    const { getByText } = render(<User id={userId} />);

    expect(getByText("Test User")).toBeInTheDocument();
  });
});
