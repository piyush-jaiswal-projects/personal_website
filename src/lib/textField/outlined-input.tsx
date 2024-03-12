"use client";

type InputProps = {
  label: string;
  type: string;
  value: string | undefined;
  setValue: (val: string) => void;
};

export default function OutlinedTextfield(props: InputProps) {
  return (
    <input
      className="w-[100%] p-2 rounded-lg h-[60px] my-4 custom-input"
      placeholder={props.label}
      type={props.type}
      value={props.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value);
      }}
    />
  );
}
