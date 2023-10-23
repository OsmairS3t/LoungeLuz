export interface IBalance {
    id: string;
    idcategory: number;
    name: string;
    type: string;
    price: number;
    datebalance: string;
    file: string;
}

export interface ICategory {
    id: number;
    name: string;
    icon: string;
    color: string;
}