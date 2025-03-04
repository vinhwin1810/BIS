"use client";

import {
  Star,
  RefreshCcw,
  List,
  ShoppingCart,
  DollarSign,
  FileText,
  Factory,
  BarChart2,
  Users,
  Shield,
} from "lucide-react";

// Define types for the item list
interface Item {
  label: string;
  href?: string;
  active?: boolean;
}
// Define the StarButton props
interface StarButtonProps {
  isFilled: boolean;
}

export function StarButton({ isFilled }: StarButtonProps) {
  return <Star className="h-5 w-5" fill={isFilled ? "black" : "none"} />;
}

export const menuData = [
  { title: "All Favorites", icon: <Star size={20} /> },
  {
    title: "Inventory Management",
    icon: <List size={20} />,
    submenus: [
      {
        title: "Maintenance",
        items: ["Physical Inventory", "Transaction Processing", "Reports"],
        nextMenu: {
          title: "Item Maintenance",
          items: [
            "Reason Codes",
            "Transaction Types",
            "Warehouses",
            "Item Images",
            "Department Code Maintenance",
            "Inventory Price/Vendor Cost Loading",
            "Classes",
            "UOM Maintenance",
            "Cross References",
            "Unit References",
            "Unit Conversion Factors",
            "Item Images Query",
            "Pricing Level Maintenance",
          ],
        },
      },
    ],
  },
  { title: "Order Processing", icon: <ShoppingCart size={20} /> },
  { title: "Purchasing/Receiving", icon: <FileText size={20} /> },
  { title: "Accounts Receivable", icon: <DollarSign size={20} /> },
  { title: "Accounts Payable", icon: <Users size={20} /> },
  { title: "Manufacturing", icon: <Factory size={20} /> },
  { title: "Sales Analysis", icon: <BarChart2 size={20} /> },
  { title: "Customer Service", icon: <Shield size={20} /> },
  { title: "Admin Maintenance", icon: <Star size={20} /> },
  { title: "Security", icon: <RefreshCcw size={20} /> },
];

export const itemList: Item[] = [
  { label: "Order Processing", href: "/dashboard" },
  {
    label: "Inventory Management",
    href: "/dashboard/item-maintenance",
    active: true,
  },
  { label: "Purchasing/Receiving", href: "/dashboard" },
  { label: "Accounts Receivable", href: "/dashboard" },
  { label: "Accounts Payable", href: "/dashboard" },
  { label: "Manufacturing", href: "/dashboard" },
  { label: "Sales Analysis", href: "/dashboard" },
  { label: "Customer Service", href: "/dashboard" },
  { label: "Admin Maintenance", href: "/dashboard" },
  { label: "Security", href: "/dashboard" },
  { label: "Maintenance" },
  { label: "Physical Inventory" },
  { label: "Transaction Processing" },
  { label: "Reports" },
  { label: "Item Maintenance" },
  { label: "Reason Codes" },
  { label: "Transaction Types" },
  { label: "Warehouses" },
  { label: "Item Images" },
  { label: "Department Code Maintenance" },
  { label: "Inventory Price/Vendor Cost Loading" },
  { label: "Classes" },
  { label: "UOM Maintenance" },
  { label: "Cross References" },
  { label: "Unit References" },
  { label: "Unit Conversion Factors" },
  { label: "Item Images Query" },
  { label: "Pricing Level Maintenance" },
];

export const TwoLineHamburger = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);