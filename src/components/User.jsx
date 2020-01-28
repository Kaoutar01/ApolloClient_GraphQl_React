import React, { useState } from "react";
import { Query } from "react-apollo";
import { GET_USER_EMAIL } from "../queries/user_queries";
/* the query returns  users: email, username. by userId  */

export default () => {
  const [userId, setUserId] = useState(1);
  return (
    <div>
      <input
        type="text"
        onChange={e => setUserId(e.target.value)}
        value={userId}
      />
      <Query query={GET_USER_EMAIL} variables={{ id: userId }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              // loader 
              <p>Loading...</p>
            );
          if (error) return <h3> `Error!: ${error}`</h3>;
          return (
            <div>
              {data && data.user && <h3>User Email : {data.user.email}</h3>}
            </div>
          );
        }}
      </Query>
    </div>
  );
};
