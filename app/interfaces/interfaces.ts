import React from "react";
export interface ICategory {
  id: number;
  name: string;
  records: IRecord[];
}
export interface IRecord {
  id: number;
  description: string;
  categoryId: number;
  amount: number;
  monthlyPayment: number;
  currency: string;
  currencySymbol: string;
}

export interface IColumnItem {
    label: string;
    key: keyof IRecord;
    template?: (record: IRecord) => React.ReactNode;
}
