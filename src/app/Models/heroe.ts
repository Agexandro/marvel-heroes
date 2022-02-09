export interface Heroe {
    id:number;
    name: string;
    description: string;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Result {
    results:Heroe[];
}

export interface Data {
    data: Result;
}