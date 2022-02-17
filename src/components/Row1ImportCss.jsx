import "./Row1ImportCss.css";

export const Row1ImportCss = () => {
  return (
    <Row>
      <Tile hint={""}>I</Tile>
      <Tile hint={""}>M</Tile>
      <Tile hint={""}>C</Tile>
      <Tile hint={"in-word"}>S</Tile>
      <Tile hint={"exact"}>S</Tile>
    </Row>
  );
};

const Row = ({ children }) => {
  return <div className="css-in-js-row">{children}</div>;
};

const Tile = ({ hint, children }) => {
  return <div className={`css-in-js-tile ${hint}`}>{children}</div>;
};
