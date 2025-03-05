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
    title: "Rows Per Page", icon: <Rows3 size={15} />,
    items: [{title: "1"}, {title: "5"}, {title: "10"}, {title: "15"}, {title: "20"}, {title: "25"}, {title: "50"}, {title: "100"}, {title: "1000"}, {title: "All"}],
  },
  {
    title: "Format",
    icon: <Wrench size={15} />,
    items: [
      { title: "Sort", icon: <ArrowUpDown size={15} /> },
      { title: "Control Break", icon: <LayoutList size={15} /> },
      { title: "Highlight", icon: <Highlighter size={15} /> },
      { title: "Compute", icon: <BrainCircuit size={15} /> },
      { title: "Aggregate", icon: <Sigma size={15} /> },
      { title: "Chart", icon: <ChartNoAxesColumnIncreasing size={15} /> },
      { title: "Group By", icon: <Group size={15} /> },
      { title: "Pivot", icon: <Redo size={15} /> },
    ],
  },
  { title: "Flashback", icon: <RotateCcw size={15} /> },
  { title: "Save Report", icon: <Save size={15} /> },
  { title: "Reset", icon: <RefreshCcw size={15} /> },
  { title: "Help", icon: <CircleHelp size={15} /> },
  { title: "Download", icon: <ArrowDownToLine size={15} /> },
];
