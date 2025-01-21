import { CardWrapper } from "./styled";
function PreviewCard({ content }) {
  const handleDragStart = (e, data) => {
    console.log("handleDragStart");
    e.dataTransfer.setData("text/plain", data);
  };

  return (
    <div>
      <CardWrapper draggable onDragStart={(e) => handleDragStart(e, content)}>
        <h1>{content ?? "A"} </h1>
      </CardWrapper>
    </div>
  );
}

export default PreviewCard;
