import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobFormSchema } from "@/lib/form-schema";
import { PlusIcon, X } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import z from "zod";

interface InputSkillsProps {
  form: any;
  name: string;
  label: string;
}

const InputSkills: FC<InputSkillsProps> = ({ form, name, label }) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;
    if (value === "") {
      return;
    }
    const newValue: any = [...values, value];
    setValues(newValue);

    form.setValue(name, newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);
    setValues(skills);
    form.setValue(name, skills);
  };

  useEffect(() => {
    const val = form.getValues(name);
    if (val && val.length > 0) {
      setValues(val);
    }
  }, [form, name]);

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="block">{label}</FormLabel>
            <FormControl>
              <>
                <Button
                  type="button"
                  variant={"outline"}
                  className="mb-2 w-45 text-blue-600"
                  onClick={() => setHide(!isHide)}
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  {label}
                </Button>
                {isHide && (
                  <div className="my-4 flex flex-row gap-4">
                    <Input ref={inputRef} className="w-[246px]" />
                    <Button
                      type="button"
                      className="bg-blue-600"
                      onClick={handleSaveValue}
                    >
                      Save
                    </Button>
                  </div>
                )}
                <div className="space-x-3">
                  {values.map((item: string, key: number) => (
                    <Badge
                      variant={"outline"}
                      key={key}
                      className="pt-2 pb-1"
                      onClick={() => handleDeleteValue(item)}
                    >
                      {item}
                      <X />
                    </Badge>
                  ))}
                </div>
              </>
            </FormControl>
          </FormItem>
        )}
      ></FormField>
    </>
  );
};

export default InputSkills;
