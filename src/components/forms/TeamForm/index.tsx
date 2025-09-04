import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import DialogAddForm from "./DialogAddForm";

interface TeamFormProps {}

const TeamForm = () => {
  return (
    <>
      <FieldInput
        title="Basic Information"
        subtitle="Add team members of your company"
      >
        <div className="mb-5">
          <div className="flex flex-row justify-between items-center">
            <div className="text-lg font-semibold">2 Members</div>
            <div>
              <DialogAddForm />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6 w-full">
            {[0, 1, 2].map((item: number) => (
              <div className="p-3 shadow rounded-lg text-center" key={item}>
                <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto" />
                <div className="mt-4 font-semibold">Rizki Wahyu</div>
                <div className="text-gray-500 text-sm">CEO</div>
                <div className="mt-5 w-full inline-flex gap-3 justify-center">
                  <InstagramIcon className="w-4 h-4" />
                  <LinkedinIcon className="w-4 h-4" />
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
