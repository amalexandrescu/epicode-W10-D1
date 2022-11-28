import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Welcome from "./components/WarningSigns";
import WarningSigns from "./components/WarningSigns";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import { Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to my amazing Book Store</h1>
        {/* <WarningSigns variant="danger" stringContent="This is my Alert" />
        <MyBadge color="warning" content="My First Badge" /> */}
        <BookList />
      </div>
    );
  }
}

export default App;
