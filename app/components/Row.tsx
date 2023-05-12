import { FC } from "react";
import { IColumnItem, IRecord } from "@/app/interfaces/interfaces";

interface RowProps {
  data: IRecord,
  columns: IColumnItem[],

}

const Row: FC<RowProps> = ({ data, columns }) => {
  return (
    <>
      {columns.map((record, index) => (
        <div key={`${index}_${data.id}`} className="px-2 py-2">
          {record.template && typeof record.template === 'function' ? record.template(data) : data[record.key] }
        </div>
      ))}
    </>
  )
}


export default Row;
