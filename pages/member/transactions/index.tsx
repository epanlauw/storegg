import SideBar from "@/components/organisms/SideBar";
import TransactionContent from "@/components/organisms/TransactionContent";
import React from "react";

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="Transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transactions;
