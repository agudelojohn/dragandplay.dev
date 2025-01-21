import PreviewCard from "../previewCard";
import ViewerZone from "../viewerZone";
import { Vertical, Horizontal, FullSize } from "./styled";
import { useState } from "react";

function VerticalList() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <Horizontal>
      <Vertical>
        {items.map((item, i) => (
          <PreviewCard key={i} content={i} />
        ))}
      </Vertical>
      <FullSize>
        <ViewerZone/>
      </FullSize>
    </Horizontal>
  );
}

export default VerticalList;
