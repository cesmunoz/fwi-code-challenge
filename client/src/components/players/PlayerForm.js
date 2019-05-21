import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const PlayerForm = ({
  player,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{player._id ? "Edit" : "Add"} Player</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="firstname"
        label="First Name"
        value={player.firstname}
        onChange={onChange}
        error={errors.firstname}
      />
      <TextInput
        name="lastname"
        label="Last Name"
        value={player.lastname}
        onChange={onChange}
        error={errors.lastname}
      />
      <TextInput
        name="hometown"
        label="Home town"
        value={player.hometown}
        onChange={onChange}
        error={errors.hometown}
      />
      <TextInput
        name="country"
        label="Country"
        value={player.country}
        onChange={onChange}
        error={errors.country}
      />
      <TextInput
        name="winnings"
        label="Winnings"
        value={player.winnings}
        onChange={onChange}
        error={errors.winnings}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

PlayerForm.propTypes = {
  player: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PlayerForm;
