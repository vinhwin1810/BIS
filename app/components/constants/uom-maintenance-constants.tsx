"use client";

import {
  Columns3,
  Filter,
  Grid2x2Check,
  Wrench,
  ChartNoAxesColumnIncreasing,
  Group,
  Redo,
  Flag,
  ArrowDownToLine,
  CircleHelp,
  ArrowUpDown,
  Sigma,
  BrainCircuit,
  RotateCcw,
  LayoutList,
  Highlighter,
  FileDown,
  Settings2,
  Download,
  Save,
  RefreshCcw,
  Rows3,
} from "lucide-react";

export const ActionsOptions = [
  { title: "Columns", icon: <Columns3 size={15} /> },
  { title: "Filter", icon: <Filter size={15} /> },
  {
    title: "Data",
    icon: <Grid2x2Check size={15} />,
    items: [
      { title: "Sort", icon: <ArrowUpDown size={15} /> },
      { title: "Aggregate", icon: <Sigma size={15} /> },
      { title: "Compute", icon: <BrainCircuit size={15} /> },
      { title: "Flashback", icon: <RotateCcw size={15} /> },
    ],
  },
  {
    title: "Format",
    icon: <Wrench size={15} />,
    items: [
      { title: "Control Break", icon: <LayoutList size={15} /> },
      { title: "Highlight", icon: <Highlighter size={15} /> },
      {
        title: "Rows Per Page", icon: <Rows3 size={15} />,
        items: ["1", "5", "10", "15", "20", "25", "50", "100", "1000", "All"],
      },
    ],
    submenus: [
    ],
  },
  { title: "Chart", icon: <ChartNoAxesColumnIncreasing size={15} /> },
  { title: "Group By", icon: <Group size={15} /> },
  { title: "Pivot", icon: <Redo size={15} /> },
  {
    title: "Report",
    icon: <Flag size={15} />,
    items: [
      { title: "Save Report", icon: <Save size={15} /> },
      { title: "Reset", icon: <RefreshCcw size={15} /> },
    ],
  },
  { title: "Download", icon: <ArrowDownToLine size={15} /> },
  { title: "Help", icon: <CircleHelp size={15} /> },
];
