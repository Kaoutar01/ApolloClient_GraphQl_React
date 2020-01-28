import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_USERS } from "../queries/user_queries";
/* the query returns all users: email, name , username and posts only in one query */

export default () => {
  return (
    <div>
      <Query query={GET_ALL_USERS}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <img
                src="http://www.fatihoglu.com/_frontend/ux/images/header/loader.gif"
                width="50px"
              />
            );
          if (error) return <h3> `Error!: ${error}`</h3>;
          return (
            <div>
              {data.users.data.map((item, index) => (
                <div>
                  <h3>
                    {index + 1}. User Email : {item.email}
                    User name : {item.name}
                  </h3>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};
