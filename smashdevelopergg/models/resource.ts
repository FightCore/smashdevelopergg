import { Game } from "./game";

export class Resource {
    title?: string;
    owner?: string;
    description?: string;
    websiteUrl?: string;
    documentationUrl?: string;
    game: Game = Game.All;
}