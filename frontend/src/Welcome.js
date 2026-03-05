import React from "react";

function Welcome() {

  const username = localStorage.getItem("username");

  return (

    <div className="container text-center mt-5">

      <div className="card p-5 shadow">

        <h2>Welcome, {username} 🎉</h2>

      </div>

    </div>

  );

}

export default Welcome;