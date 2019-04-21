import React from "react";

const Register = () => (
  <div>
    <input
      type="text"
      onChange={this.handleChangeFor("username")}
      value={this.state.user.username}
    />
    <input
      type="email"
      onChange={this.handleChangeFor("email")}
      value={this.state.user.email}
    />
    <input
      type="password"
      onChange={this.handleChangeFor("password")}
      value={this.state.user.password}
    />

    <button onClick={this.handleSubmit}>submit</button>
  </div>
);

export default Register;
