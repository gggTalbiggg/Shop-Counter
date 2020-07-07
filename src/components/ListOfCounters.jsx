import React from "react";
import Counter from "./Counter";

const ListOfCounters = (props) => {
  const display = "badge badge-pill badge-";
  let displayCustom = "";
  return props.CountData.map((item) =>
    item.value === 0 ? (
      <Counter
        key={item.id}
        Value={item.value}
        displayStyle={(displayCustom = display + "warning")}
        Increment={props.Increment}
        id={item.id}
        delete={props.Delete}
        decrement={props.Decrement}
        badgeDisplay={"Zero"}
      />
    ) : (
      <Counter
        key={item.id}
        Value={item.value}
        displayStyle={(displayCustom = display + "primary")}
        id={item.id}
        Increment={props.Increment}
        delete={props.Delete}
        decrement={props.Decrement}
        badgeDisplay={item.value}
      />
    )
  );
};

export default ListOfCounters;
