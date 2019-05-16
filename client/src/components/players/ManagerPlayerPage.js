import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPlayers, savePlayer } from "../../redux/actions/playersActions";
import PropTypes from "prop-types";
import PlayeForm from "./PlayerForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManagePlayerPage({
  players,
  loadPlayers,
  savePlayer,
  history,
  ...props
}) {
  const [player, setPlayer] = useState({ ...props.player });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (players.length === 0) {
      loadPlayers().catch(error => {
        alert(`Loading players failed ${error}`);
      });
    } else {
      setPlayer({ ...props.player });
    }
  }, [props.player]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [name]: name === "countryaaa" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { firstname, lastname, country, hometown } = player;
    const errors = {};

    if (!firstname) errors.firstname = "First name is required.";
    if (!lastname) errors.lastname = "Last name is required.";
    if (!country) errors.country = "Country is required";
    if (!hometown) errors.hometown = "Hometown is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) {
      return;
    }

    setSaving(true);

    savePlayer(player)
      .then(() => {
        toast.success("Player saved.");
        history.push("/players");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return players.length === 0 ? (
    <Spinner />
  ) : (
    <PlayeForm
      player={player}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManagePlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  loadPlayers: PropTypes.func.isRequired,
  savePlayer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPlayerById(players, id) {
  return players.find(player => player._id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const player =
    id && state.players.length > 0
      ? getPlayerById(state.players, id)
      : {
          _id: "",
          firstname: "",
          lastname: "",
          hometown: "",
          country: ""
        };

  return {
    player,
    players: state.players
  };
}

const mapDispatchToProps = {
  loadPlayers,
  savePlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePlayerPage);
