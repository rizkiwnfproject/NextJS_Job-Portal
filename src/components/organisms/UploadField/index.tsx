import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React, { ChangeEvent, FC, useRef, useState } from "react";

interface UploadFieldProps {
  form: any;
}

const UploadField: FC<UploadFieldProps> = ({ form }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameFile, setNameFile] = useState<string>("Attach Resume / CV");

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNameFile(e.target.files[0].name);
      form.setValue("resume", e.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="font-semibold">Attach Resume / CV</div>
        <div>
          <div>
            <div
              onClick={handleSelectFile}
              className="text-xs text-primary font-semibold p-3 cursor-pointer border-primary border-dashed border-2 text-center"
            >
              {nameFile}
            </div>
          </div>
          <FormField
            name="resume"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormMessage className="mt-2" />
              </FormItem>
            )}
          />
          <input
          ref={inputRef}
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
};

export default UploadField;
