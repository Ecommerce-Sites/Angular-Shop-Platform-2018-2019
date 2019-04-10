export interface Roles {
    buyer?: boolean;
    seller?: boolean;
    admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    phoneNumber: string | null;
    city: string | null;
    address: string | null;
    firstName: string | null;
    lastName: string | null;
    company: string | null;
    postalCode: string | null;
    roles: Roles;
}

//todo move everything into seller class

interface Coordinates {
    lat: number;
    lon: number;
}

export interface Seller extends User {
    coordinates: Coordinates;
    address: string;
}
