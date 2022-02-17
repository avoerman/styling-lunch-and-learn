import { Row1ImportCss } from "./Row1ImportCss";
import { Row2UtilityCss } from "./Row2UtilityCss";
import { Row3CssInJs } from "./Row3CssInJs";
import { Row4CssModules } from "./Row4CssModules";
import { Row5StyledJsx } from "./Row5StyledJsx";

export const Game = () => {
  return (
    <div className="game">
      <Row1ImportCss />
      <Row2UtilityCss />
      <Row3CssInJs />
      <Row4CssModules />
      <Row5StyledJsx />
    </div>
  );
};
