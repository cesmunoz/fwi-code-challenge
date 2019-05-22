import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Country from "../common/Country";

const PlayersList = ({ countries, players, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Position</th>
        <th>Player</th>
        <th>Winnings</th>
        <th>Native Of</th>
        <th />
      </tr>
    </thead>
    <tbody data-testid="playersElements">
      {players.map((player, index) => {
        return (
          <tr key={player._id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/player/${player._id}`}>
                {player.firstname} {player.lastname}
              </Link>
            </td>
            <td>{player.winnings} M</td>
            <td>
              <Country countries={countries} countryid={player.country} />
            </td>
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
  countries: PropTypes.array.isRequired,
  players: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default PlayersList;
