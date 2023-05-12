"use client";

import { ICategory, IColumnItem, IRecord } from "@/app/interfaces/interfaces";
import Table from "@/app/components/Table";
import InputCurrency from "@/app/components/InputCurrency";

const records: IRecord[] = [
  {
    id: 1,
    description: 'Chequing',
    amount: 500.00,
    currency: 'CAD',
    currencySymbol: '$',
    categoryId: 1,
    monthlyPayment: 0,
  },
  {
    id: 2,
    description: 'Savings',
    amount: 500.00,
    currency: 'CAD',
    currencySymbol: '$',
    categoryId: 1,
    monthlyPayment: 0,
  },
  {
    id: 3,
    description: 'Investment',
    amount: 500.00,
    currency: 'CAD',
    currencySymbol: '$',
    categoryId: 1,
    monthlyPayment: 0,
  }
];

const data: ICategory[] = [
  {
    id: 1,
    name: 'Cash And Investments',
    records: records,
  },
  {
    id: 2,
    name: 'Long Term Assets',
    records: records,
  }
];

const liabilitiesData: ICategory[] = [
  {
    id: 1,
    name: 'Short Term Liabilities',
    records: records,
  },
  {
    id: 2,
    name: 'Long Term Debt',
    records: records,
  },
];

const columns: IColumnItem[] = [
  {
    key: 'description',
    label: 'Description',
    template: (data: IRecord) => {
      return <div>{data.description}</div>
    }
  },
  {
    key: 'amount',
    label: 'Amount',
    template: (data: IRecord) => {
      return <div className="w-full text-right">
        <InputCurrency symbol={data.currencySymbol} value={data.amount} onUpdate={(value) => console.log(value)} />
      </div>
    }
  }
];

const liabilitiesColumns: IColumnItem[] = [
  {
    key: 'description',
    label: 'Description',
    template: (data: IRecord) => {
      return <div>{data.description}</div>
    }
  },
  {
    key: 'monthlyPayment',
    label: 'Monthly Payment',
    template: (data: IRecord) => {
      return <div className="w-full text-right">
        <InputCurrency symbol={data.currencySymbol} value={data.monthlyPayment} onUpdate={(value) => console.log(value)}
        />
      </div>
    }
  },
  {
    key: 'amount',
    label: 'Amount',
    template: (data: IRecord) => {
      return <div className="w-full text-right">
        <InputCurrency symbol={data.currencySymbol} value={data.amount} onUpdate={(value) => console.log(value)}
        />
      </div>
    }
  },
];



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Tracking your Networth</h1>
      <Table data={data} columns={columns} title="Assets" />
      <Table data={liabilitiesData} columns={liabilitiesColumns} title="Liabilities" />
    </main>
  )
}
