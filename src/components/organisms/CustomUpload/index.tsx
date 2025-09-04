"use client";

import { ImageUp } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface CustomUploadProps {
  form: any;
  name: string;
}
export default function CustomUpload({ form, name }: CustomUploadProps) {
  const [previewImg, setPreviewImg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      form.setValue(name, e.target.files[0]);
    }
  };
  const handleUploadFile = () => {
    inputRef.current?.click();
  };
  //   useEffect(() => {
  //     async function getImage() {
  //       const urlImg = await supabaseGetPublicUrl(
  //         form.getValues(name),
  //         "company"
  //       );
  //       setPreviewImg(urlImg);
  //     }
  //     if (form.getValues(name) !== "") {
  //       getImage();
  //     }
  //   });
  return (
    <>
      <div className="inline-flex items-center gap-8">
        <div className="">
          {previewImg !== "" && (
            <Image width={120} height={120} src={previewImg} alt={previewImg} />
          )}
        </div>
        <div
          className="py-6 px-10 border-2 cursor-pointer border-blue-600 border-dashed w-max rounded-sm"
          onClick={handleUploadFile}
        >
          <div className="text-center">
            <ImageUp className="w-full flex justify-center mb-2"/>
            <span className="text-blue-600 font-medium">
              Click to replace
            </span>{" "}
            <span className="text-gray-500">or drag and drop</span>
          </div>
          <div className="text-gray-600 text-sm">
            PNG, JPG, JPEG (max. 400 x 400px)
          </div>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/png, image/jpg, image/jpeg"
          />
        </div>
      </div>
    </>
  );
}
