import React from "react";
import QueryString from "query-string";
const Recent = () => {
  return <h4>Recent Products</h4>;
};
const Products = ({ match, location }) => {
  console.log(match);
  console.log(location);

  console.log(QueryString.parse(location.search));
  let recent = null;
  if (location.hash === "#recent") {
    recent = <Recent />;
  }
  return (
    <>
      <h3>Products functional component</h3>
      {recent}
    </>
  );
};
export default Products;
