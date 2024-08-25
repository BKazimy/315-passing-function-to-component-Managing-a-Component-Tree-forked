import React, { useState } from "react";

function ListComp(props) {
  //   const [finished, setFinished] = useState(false);

  //   function clicked() {
  //     setFinished((prev) => {
  //       console.log(!finished);
  //       return !prev;
  //     });
  //   }

  return (
    <div
      onClick={() => {
        props.onEvent(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );

  //   return (
  //     <div onClick={clicked}>
  //       <li style={{ textDecoration: finished ? "line-through" : "none" }}>
  //         {props.item}
  //       </li>
  //     </div>
  //   );
}

export default ListComp;
