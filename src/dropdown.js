import react from "react";
import axios from "axios";
class Dropdown extends react.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    axios
      .get(`https://aveosoft-react-assignment.herokuapp.com/categories`)
      .then((res) => {
        const data = res.data;
        this.setState({ list: data });
      });
  }
  render() {
    return (
      <select className="selectList" onClick={this.props.clickHandler}>
        {this.state.list.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
    );
  }
}
export default Dropdown;
