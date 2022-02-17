import styled from "styled-components";

const exactTxt = "#6aaa64";
const inWordTxt = "#c9b458";

const Row = styled.div`
  margin: 0 0 0.5rem 0;
  display: flex;
`;

const Tile = styled.div`
  flex: 1;
  background: ${({ hint }) => colorFromHint(hint)};
  color: white;
  padding: 1rem;
  font-size: 1.875rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const colorFromHint = (hint) => {
  return hint === "exact" ? exactTxt : hint === "in-word" ? inWordTxt : "grey";
};

export const Row3CssInJs = () => {
  return (
    <Row>
      <Tile hint={""}>C</Tile>
      <Tile hint={""}>S</Tile>
      <Tile hint={""}>S</Tile>
      <Tile hint={"in-word"}>J</Tile>
      <Tile hint={"exact"}>S</Tile>
    </Row>
  );
};
