import React, { Fragment } from "react";

import { fetchUser } from "../api";

const DetailView = ({ detailResults }) => {
  if (detailResults.length == 0) {
    return (
      <main id="detail">
        <h2>Click on a Contributor for more details</h2>
      </main>
    );
  }

  const { login, name, avatar_url, location, bio, followers, following } =
    detailResults;

  return (
    <main id="detail">
      <div className="contributor-info">
        <header>
          <h3>{login}</h3>
        </header>
        <section className="contributor-details">
          <React.Fragment>
            <span className="title">Name</span>
            <span className="content">{name}</span>
          </React.Fragment>
          <React.Fragment>
            <span className="title">Location</span>
            <span className="content">{location}</span>
          </React.Fragment>
          <React.Fragment>
            <span className="title">Bio</span>
            <span className="content">{bio}</span>
          </React.Fragment>
          <React.Fragment>
            <span className="title">Followers Count</span>
            <span className="content">{followers}</span>
          </React.Fragment>
          <React.Fragment>
            <span className="title">Following Count</span>
            <span className="content">{following}</span>
          </React.Fragment>
        </section>
        <section className="avatar">
          <img src={avatar_url} />
        </section>
      </div>
    </main>
  );
};

export default DetailView;
