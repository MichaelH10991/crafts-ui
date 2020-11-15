import React from "react";

export default function Card(props) {
  const { data } = props;
  return <div>{JSON.stringify(data)}</div>;
}
