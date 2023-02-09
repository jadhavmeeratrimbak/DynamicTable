import React from "react";
function Name() {
  const message = "hello guys";

  return <Com message={message} />;
}
function Com(Props) {
  return (
    <div>
      <h3>message:{Props.message}</h3>
      <Mop msg="little" />
    </div>
  );
}
function Mop(Prop) {
  return (
    <div>
      <h1>{Prop.msg}</h1>
    </div>
  );
}
export default Name;
