import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayersList = ({ players, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Player</th>
        <th>Winnings</th>
        <th>Native Of</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {players.map(player => {
        return (
          <tr key={player.id}>
            <td>
              <Link to={`players/${player.id}`}>
                {player.firstname} {player.lastname}
              </Link>
            </td>
            <td>{player.winnings}</td>
            <td>{player.country}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(player)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default PlayersList;
