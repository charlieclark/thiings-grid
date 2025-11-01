import ThiingsGrid, { type ItemConfig } from "../../lib/ThiingsGrid";

const ThiingsIconCell = ({ gridIndex }: ItemConfig) => {
  const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div className="absolute inset-1 flex items-center justify-center">
      <img
        draggable={false}
        src={`/thiings/${images[gridIndex % images.length]}.png`}
      />

       <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = `/thiings/${images[gridIndex % images.length]}.png`; // or a remote URL like https://example.com/pic.jpg
          link.download = `${images[gridIndex % images.length]}.png`; // name to save as
          link.click();
        }}
        className="absolute shadow bottom-2 right-5 text-xs h-fit p-0 px-2 rounded bg-green-500 ">Get</button>

    </div>
  );
};

export const ThiingsIcons = () => (
  <ThiingsGrid
    gridSize={160}
    renderItem={ThiingsIconCell}
    initialPosition={{ x: 0, y: 0 }}
  />
);

export default ThiingsIcons;
