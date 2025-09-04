import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANTS_COLUMNS } from "@/constants";
import React, { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {
  applicants: any;
}
const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  return (
    <>
      <div className="">
        <div className="mt-10">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
                  <TableHead key={item + i}>{item}</TableHead>
                ))}
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants && (
                <>
                  {applicants.map((item: any, i: number) => (
                    <TableRow key={item.id + i}>
                      <TableCell>{item.user.name}</TableCell>
                      <TableCell>
                        <ButtonActionTable url={`/dashboard/job-detail/${1}`} />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Applicants;
