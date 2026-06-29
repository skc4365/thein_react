import React from "react";
// map(키:값)
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function Section2(props) {
  const listItems = products.map(
    (prod) => (
        <li key={prod.id}>{prod.title}</li>
    )
);

  return (
    <div>
      <hr />
      <ul>{listItems}</ul>

      <hr />
    </div>
  );
}

export default Section2;
