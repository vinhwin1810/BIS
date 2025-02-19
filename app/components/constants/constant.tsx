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
