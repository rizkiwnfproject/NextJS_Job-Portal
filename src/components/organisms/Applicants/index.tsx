import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from "@/constants";
import React, { FC } from "react";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}
const Applicants: FC<ApplicantsProps> = () => {
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
              {JOB_APPLICANTS_DATA.map((item: any, i: number) => (
                <TableRow key={item.name + i}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.appliedDate}</TableCell>
                  <TableCell>
                    <ButtonActionTable url={`/dashboard/job-detail/${1}`} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Applicants;
