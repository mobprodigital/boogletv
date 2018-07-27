
export interface NavMenu {
    NavName: string;
    NavId: number;
    NavItems?: NavMenuItem[];
}

export interface NavMenuItem {
    Href: string;
    Text: string;
    NavItemId: number;
    NavParams?: any;
    ChildMenu?: NavMenu[];
    Hidden?: boolean;
}