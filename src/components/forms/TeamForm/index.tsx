import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import DialogAddForm from "./DialogAddForm";
import { CompanyTeam } from "@prisma/client";
import Link from "next/link";

interface TeamFormProps {
  detail: CompanyTeam[] | undefined;
}

const TeamForm: FC<TeamFormProps> = async ({ detail }) => {
  return (
    <>
      <FieldInput
        title="Basic Information"
        subtitle="Add team members of your company"
      >
        <div className="mb-5">
          <div className="flex flex-row justify-between items-center">
            <div className="text-lg font-semibold">
              {detail?.length} Members
            </div>
            <div>
              <DialogAddForm />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6 w-full">
            {detail?.map((item: CompanyTeam) => (
              <div className="p-3 shadow rounded-lg text-center" key={item.id}>
                <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
                <div className="mt-4 font-semibold">{item.name}</div>
                <div className="text-gray-500 text-sm">{item.position}</div>
                <div className="mt-5 w-full inline-flex gap-3 justify-center">
                  <Link href={item.instagram}>
                    <InstagramIcon className="w-4 h-4" />
                  </Link>
                  <Link href={item.linkedin}>
                    <LinkedinIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FieldInput>
    </>
  );
};

export default TeamForm;
