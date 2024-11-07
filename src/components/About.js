import { Component } from "react";
import { UserContext } from "../utils/globalContext";
import User from "./User";
import { checkAuth } from "./auth/checkAuth";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <div className="about">
        <UserContext.Consumer>
          {({ loggedUser }) => {
            return (
              <h1 className="p-1 text-xs m-2">About/{loggedUser?.displayName}</h1>
            );
          }}
        </UserContext.Consumer>
        <User />
      </div>
    );
  }
}

export default checkAuth(About);