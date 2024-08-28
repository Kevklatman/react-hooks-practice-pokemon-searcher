import React from "react";
import { Link } from "react-router-dom";
import { Menu as SemanticMenu } from "semantic-ui-react";

function Menu() {
  return (
    <SemanticMenu inverted>
      <SemanticMenu.Item as={Link} to="/">
        Home
      </SemanticMenu.Item>
      <SemanticMenu.Item as={Link} to="/team">
        Team
      </SemanticMenu.Item>
    </SemanticMenu>
  );
}

export default Menu;