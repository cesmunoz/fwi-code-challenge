import React from "react";
import {
  cleanup,
  render,
  fireEvent,
  queryByTestId,
  getByTestId
} from "react-testing-library";
import PlayerForm from "../../../components/players/PlayersList";

afterEach(cleanup);

function renderPlayerForm(args) {
  let defaultProps = {
    players: [],
    onDeleteClick: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<PlayerForm {...props} />);
}

it("should render without elements", () => {
  const { getByTestId } = renderPlayerForm();
  expect(getByTestId("playersElements").innerHTML).toBe("");
});

it("should render with elements", () => {
  const { getByTestId } = renderPlayerForm({
    players: [{ _id: 1, firstname: "Test" }]
  });
  expect(getByTestId("playersElements").innerHTML).toContain("<tr>");
});
