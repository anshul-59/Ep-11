import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        id: "",
        photo: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anshul-59");
    const json = await data.json();

    this.setState({
      userInfo: {
        name: json.login,
        id: json.id,
        photo: json.avatar_url,
      },
    });
  }
  render() {
    const { name, id, photo } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>ID : {id}</h2>
        <img src={photo}></img>
      </div>
    );
  }
}

export default UserClass;
