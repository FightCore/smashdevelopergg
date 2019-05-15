import { Game } from "./game";

export class Project {
  id?: number;
  name?: string;
  owner?: string;
  description?: string;

  /**
   * A link to the source code of the project.
   */
  sourceLink?: string;

  /**
   * A link to the release page of the project or the website.
   */
  releaseLink?: string;

  imageUrl?: string;
  banner?: string;

  // TODO Convert to enum
  type?: string;

  game?: Game;
}
