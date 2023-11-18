type TableRowStatusType = "Pending" | "Success" | "Failed";

interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: TableRowStatusType;
  image: string;
}

const TableRowItem: TableRowProps[] = [
  {
    title: "Mobile Legends: The New Battle 2021",
    category: "Desktop",
    item: 200,
    price: 290000,
    status: "Pending",
    image: "overview-1"
  },
  {
    title: " Call of Duty:Modern",
    category: "Desktop",
    item: 550,
    price: 740000,
    status: "Success",
    image: "overview-2"
  },
  {
    title: "Clash of Clans",
    category: "Mobile",
    item: 100,
    price: 120000,
    status: "Failed",
    image: "overview-3"
  },
  {
    title: "The Royal Game",
    category: "Mobile",
    item: 225,
    price: 200000,
    status: "Pending",
    image: "overview-4"
  }
];

export default TableRowItem;
