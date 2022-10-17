import React from "react";
import { render } from "@testing-library/react";
import { User } from "./User";
import { UserModel } from "../../models/UserModel";
import { NullLiteral } from "typescript";
import axios from "axios";
import { requirePropFactory } from "@mui/material";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("User component unit tests", () => {
  const userId: number = 1;
  const testUser: UserModel = {
    id: 1,
    firstName: "Test",
    lastName: "User",
    emailAddress: "test@test.com",
    username: "testUser",
  };

  it("fetches user data and displays the results", () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve(testUser));
    const { getByText } = render(<User id={1} />);

    expect(getByText("Test User")).toBeInTheDocument();
  });
});
