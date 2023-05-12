import { FC, Fragment } from "react";
import Row from "@/app/components/Row";
import { ICategory, IColumnItem, IRecord } from "@/app/interfaces/interfaces";

interface TableProps {
  title: string,
  data: ICategory[],
  columns: IColumnItem[],
}

const Table: FC<TableProps> = ({ title,  data, columns }) => {
  return (
    <div className={`grid grid-cols-${columns.length} gap-2 border-gray-300 w-1/2`}>
      <div className="px-2 py-2 font-bold">
        {title}
      </div>
      {data.map((category, index) => (
        <Fragment key={`${index}_header_${category.id}`}>
          <div className={`col-span-${columns.length} border-y-2 px-2 py-2`}>
            {category.name}
          </div>
          {category.records.map((record, index) => (
            <Row data={record} columns={columns} key={`${index}_row`} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Table;
