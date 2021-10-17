import "./styles.css";
import DisplayCards from "./cards.js";
import Dropdown from "./dropdown";
import RenderProduct from "./product.js";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [product, setProduct] = useState({ name: "" });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div style={{ margin: "auto", left: "2000px" }}>
            <Dropdown
              clickHandler={(e) => {
                setSelected(e.target.value);
              }}
            />
            <div to="/product">
              <DisplayCards
                renderProduct={(item) => {
                  setProduct(item);
                }}
                selected={selected}
              />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <RenderProduct
            name={product.name}
            price={product.price}
            description={product.description}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
