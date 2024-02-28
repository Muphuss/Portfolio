import React from "react";
import "./style.css";
import {
  FaTree,
  FaYoutube,
  FaTwitch,
  FaSpotify,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.Spotify && (
          <li>
            <a href={socialprofils.Spotify}>
              <FaSpotify />
            </a>
          </li>
        )}
        {socialprofils.Twitch && (
          <li>
            <a href={socialprofils.Twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
        {socialprofils.Youtube && (
          <li>
            <a href={socialprofils.Youtube}>
              <FaYoutube />
            </a>
          </li>
        )}

{socialprofils.Tree && (
          <li>
            <a href={socialprofils.Tree}>
              <FaTree />
            </a>
          </li>
        )}

      </ul>
      <p>Follow Me</p>
    </div>
  );
};
