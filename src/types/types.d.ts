interface ChildrenType {
    children: React.ReactNode
    className?: string
}

interface SidebarOption {
    id: number;
    name: string;
    href: string;
    icon: IconType;
    badge?: number | string //Generic property for additional information
};