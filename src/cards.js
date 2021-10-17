import react from "react";
import RenderCard from "./card.js";
import { Link } from "react-router-dom";
import axios from "axios";

class DisplayCards extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://aveosoft-react-assignment.herokuapp.com/products`)
      .then((res) => {
        const data = res.data;
        this.setState({ response: data });
      });
  }
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.response.map((products) => (
          <Link to="/product" href="/product" key={products.id}>
            <RenderCard
              name={products.name}
              model={products.model}
              price={products.price}
              display={
                this.props.selected == products.categoryId ? "block" : "none"
              }
              onclick={() => {
                this.props.renderProduct(products);
              }}
            />
          </Link>
        ))}
      </div>
    );
  }
}
export default DisplayCards;
