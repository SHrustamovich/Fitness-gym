export interface Inventory {
    key: number;
    product: string;
    name: string;
    supplier: string;
    stocks: string;
    status: string;
}
export const inventory: Inventory[] = [
    {
        key: 1,
        product: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
    {
        key: 2,
        product: "Clothes",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
    {
        key: 3,
        product: "Drinks",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "0",
        status: "OUT OF STOCK",
    },
    {
        key: 4,
        product: "Clothes",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
    {
        key: 5,
        product: "Clothes",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
    {
        key: 6,
        product: "Supplements",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
    {
        key: 7,
        product: "Food",
        name: "Aquafina Bottled Water (0.5L)",
        supplier: "Aquafina",
        stocks: "8",
        status: "AVAILABLE",
    },
];
