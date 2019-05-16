import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PlayersList from "./PlayersList";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import * as playerActions from "../../redux/actions/playersActions";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

function PlayersPage({ ...props }) {
  const [redirectToAddPlayerPage, setRedirectToAddPlayerPage] = useState(false);

  useEffect(() => {
    const { players, actions } = props;

    if (players.length === 0) {
      actions.loadPlayers().catch(error => {
        alert(`Loading players fails: ${error}`);
      });
    }
  }, []);

  function handleDeleteCourse(event) {
    toast.success("Player deleted");
    event.preventDefault();
  }

  return (
    <>
      {redirectToAddPlayerPage && <Redirect to="/player" />}
      <h2>Players</h2>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddPlayerPage(true)}
          >
            Add Player
          </button>
          <PlayersList
            onDeleteClick={handleDeleteCourse}
            players={props.players}
          />
        </>
      )}
    </>
  );
}

PlayersPage.propTypes = {
  players: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.apiCallsInProgress > 0,
    players: state.players.length === 0 ? [] : state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPlayers: bindActionCreators(playerActions.loadPlayers, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersPage);
