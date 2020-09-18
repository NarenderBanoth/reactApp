import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderingElements from "./RenderingElements";
import NameForm from "./NameForm";
import Comment from "./Comment";
import Comment2 from "./Comment";
import WelcomeDialog from "./WelcomeDialog";
import LifecycleHooks from "./LifecycleHooks";
import hooks from "./hooks";
function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RenderingElements></RenderingElements>
      <NameForm></NameForm>
      <WelcomeDialog></WelcomeDialog>
      <LifecycleHooks></LifecycleHooks>
      <hooks></hooks>

      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />

      {/* <Welcome name="Shital" />
      <Welcome name="Naren" />
      <Welcome name="Sara" /> */}
    </div>
  );
}

export default App;
