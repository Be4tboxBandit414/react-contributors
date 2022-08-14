import React, { useEffect, useState } from "react";

import {
  fetchContributors,
  CONTRIBUTOR_URL,
  fetchUser,
  fetchPage,
} from "../api";

const ListView = (props) => {
  const { listResults, setListResults, setDetailResults } = props;

  //   async function pagination(pageUrl) {
  //     try {
  //       const results = await fetchPage(pageUrl);
  //       setListResults(results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  const getDetailData = async (userUrl) => {
    let fetchedDetailData = await fetchUser(userUrl);
    await setDetailResults(fetchedDetailData);
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <aside id="listResult">
      {/* <header className="pagination">
            <button
                disabled={ !info.prev ? true : false }
                className="previous"
                onClick={() => fetchPage(CONTRIBUTOR_URL + )}
            >Previous</button>
        </header> */}
      <section className="list">
        {listResults.map((item) => {
          return (
            <div
              className="contributor"
              onClick={async (event) => {
                event.preventDefault();
                getDetailData(item.url);
              }}
            >
              <img src={item.avatar_url} />
              <h4>User: {item.login}</h4>
              <h4>Contributions: {item.contributions}</h4>
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default ListView;
