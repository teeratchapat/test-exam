const React = require("react");

class Index extends React.Component {
  state = {
    message: "",
    savedMessage: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: this.state.message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleShowResults = () => {
    fetch("/get-message")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          savedMessage: data.message,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Input something..."
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.handleShowResults}>Refresh</button>
        <p>{this.state.savedMessage}</p>
      </div>
    );
  }
}

module.exports = Index;
