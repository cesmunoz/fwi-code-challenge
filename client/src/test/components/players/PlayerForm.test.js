import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import PlayerForm from "../../../components/players/PlayerForm";

afterEach(cleanup);

function renderPlayerForm(args) {
  let defaultProps = {
    player: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<PlayerForm {...props} />);
}

it("should render Add Player Header", () => {
  const { getByText } = renderPlayerForm();
  getByText("Add Player");
});

it("should render Edit Player Header", () => {
  const { getByText } = renderPlayerForm({
    player: {
      _id: "1"
    }
  });
  getByText("Edit Player");
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderPlayerForm();
  getByText("Save");
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderPlayerForm({ saving: true });
  getByText("Saving...");
});
