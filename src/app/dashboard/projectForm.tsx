"use client";

import { CtaButton } from "@/lib/button";
import { OutlinedTextInput } from "@/lib/textField";
import { ProjectCardProps } from "@/types";
import { req, sendHttpRequest } from "@/utils";
import { useState } from "react";

const ProjectForm = () => {
  const [project, setProject] = useState<ProjectCardProps>({
    title: "",
    description: "",
    githubUrl: "",
    liveUrl: "",
    coverImage: "",
  });
  const [result, setResult] = useState<any>();

  const handleFormSubmit = async () => {
    const result = await sendHttpRequest("projects", req.post, project);
    console.log(result);
    setResult(result);
  };

  return (
    <div className="w-[50%]">
      <h1>Add Project</h1>
      <OutlinedTextInput
        label="Project name"
        type="text"
        value={project.title}
        setValue={(val: string) => {
          setProject((project) => {
            return {
              ...project,
              title: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Description"
        type="text"
        value={project.description}
        setValue={(val: string) => {
          setProject((project) => {
            return {
              ...project,
              description: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Live url"
        type="text"
        value={project.liveUrl}
        setValue={(val: string) => {
          setProject((project) => {
            return {
              ...project,
              liveUrl: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Github Url"
        type="text"
        value={project.githubUrl}
        setValue={(val: string) => {
          setProject((project) => {
            return {
              ...project,
              githubUrl: val,
            };
          });
        }}
      />

      <OutlinedTextInput
        label="Cover Image Url"
        type="text"
        value={project.coverImage}
        setValue={(val: string) => {
          setProject((project) => {
            return {
              ...project,
              coverImage: val,
            };
          });
        }}
      />

      <CtaButton text="Create Project" onClick={handleFormSubmit} />
      {JSON.stringify(result)}
    </div>
  );
};

export default ProjectForm;
