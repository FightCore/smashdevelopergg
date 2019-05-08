export class Project {
    id: number;
    name: String;
    owner: String;
    description: String;

    /**
     * A link to the source code of the project.
     */
    sourceLink?: String;

    /**
     * A link to the release page of the project or the website.
     */
    releaseLink?: String;

    imageUrl?: String;

    // TODO Convert to enum
    type: String;
}
