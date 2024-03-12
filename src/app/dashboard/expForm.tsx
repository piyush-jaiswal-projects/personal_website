"use client";

import { CtaButton } from "@/lib/button";
import { OutlinedTextInput } from "@/lib/textField";
import { ExperienceCardProps } from "@/types/experience";
import { req, sendHttpRequest } from "@/utils";
import { useState } from "react";

const ExpForm = () => {
  const [exp, setExp] = useState<ExperienceCardProps>({
    startDate: "",
    endDate: "",
    company: "",
    profile: "",
    description: "",
    refUrl: "",
  });

  const [result, setResult] = useState<any>();

  const handleFormSubmit = async () => {
    const result = await sendHttpRequest("experiences", req.post, exp);
    setResult(result);
  };

  return (
    <div className="w-[50%}">
      <h1>Add Experience</h1>
      <OutlinedTextInput
        label="Start Date (yyyy-mm-dd)"
        type="text"
        value={exp.startDate.toString()}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              startDate: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="End Date (yyyy-mm-dd)"
        type="text"
        value={exp.endDate.toString()}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              endDate: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Company"
        type="text"
        value={exp.company.toString()}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              company: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Job Profile"
        type="text"
        value={exp.profile}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              profile: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Description"
        type="text"
        value={exp.description}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              description: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Ref Url"
        type="text"
        value={exp.refUrl}
        setValue={(val: string) => {
          setExp((exp: ExperienceCardProps) => {
            return {
              ...exp,
              refUrl: val,
            };
          });
        }}
      />

      <CtaButton text="Create Experience" onClick={handleFormSubmit} />
      {JSON.stringify(result)}
    </div>
  );
};

export default ExpForm;
