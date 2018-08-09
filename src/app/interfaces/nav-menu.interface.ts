
export interface NavMenu {
    navName: string;
    navId: number;
    navItems?: NavMenuItem[];
    hidden?: boolean;
    isMegaMenu?:boolean;
}

export interface NavMenuItem {
    href: string;
    text: string;
    navItemId: number;
    navParams?: any;
    childMenu?: NavMenu[];
    hidden?: boolean;
}