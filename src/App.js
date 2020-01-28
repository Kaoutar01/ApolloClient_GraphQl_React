/*Inside App.js import the things you just installed*/

import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import QueryallUseres from "./components/Users";
import State, { Countstate } from "./components/Counter";
import User from "./components/User";
/*Now create a new client with ApolloClient that gives the location of your uri.*/

const client = new ApolloClient({
  // a fake graphql api
  uri: "https://graphqlzero.almansi.me/api",
  //optional
  clientState: {
    defaults: {
      counter: 0
    },
    resolvers: {}
  }
});

/*Wrap your app with the ApolloProvider, 
also pass your client down to the next component.*/
function App(props) {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My First Apollo app </h2>
        <QueryallUseres />
        {/* <State />
        <Countstate />
        <User /> */}
      </div>
    </ApolloProvider>
  );
}
export default App;
