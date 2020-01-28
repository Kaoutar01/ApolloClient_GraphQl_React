import React, { Fragment } from "react";
import { useQuery, useApolloClient } from "react-apollo";
import { COUNTER_QUERY } from "../queries/counter_queries";

export default () => {
  const { data } = useQuery(COUNTER_QUERY);
  const client = useApolloClient();

  const changeState = value =>
    // write state counter in you cache
    client.writeData({
      data: { counter: value }
    });

  return (
    <Fragment>
      <button onClick={() => changeState(data.counter + 1)}>
        increment counter
      </button>
      <br />
      <button onClick={() => changeState(data.counter - 1)}>
        decrement counter
      </button>
      <br />
      {data && <p>{data.counter} </p>}
    </Fragment>
  );
};
export const Countstate = () => {
  const { data } = useQuery(COUNTER_QUERY);
  return <div>{data && <p> count state : {data.counter} </p>}</div>;
};
