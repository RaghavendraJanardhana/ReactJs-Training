import React from "react";
const Recent = () => {
  return <h4>Recent Products</h4>;
};
const Products = props => {
  console.log(props);
  const location = props.location;
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
