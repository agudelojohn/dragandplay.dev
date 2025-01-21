import { useState } from "react";
import { Zone } from "./styled";
const ViewerZone = () => {
  const [storagedValue, setStoragedValue] = useState(null);

  const handleDragOver = (e) => {
    console.log("handleDragOver");
    e.preventDefault();
  };

  const handleDrop = (e) => {
    console.log("handleDrop");
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    console.log("handleDrop data", data);
    // actualizar datos
    setStoragedValue(data);
  };

  return (
    <Zone draggable onDrop={handleDrop} onDragOver={handleDragOver}>
      {storagedValue}
    </Zone>
  );
};

export default ViewerZone;
