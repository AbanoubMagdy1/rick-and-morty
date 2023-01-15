export interface MiniCharacter {
    name: string;
    id: string;
    image: string;
}

export interface Character extends MiniCharacter {
    status: string;
    species: string;
    type: string;
    gender: string;
}
