type CtaButtonProps = {
  text: string;
  onClick: () => void;
};

const CtaButton = (props: CtaButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-gray-700 w-[100%] p-2 h-[60px] rounded-lg my-4"
    >
      {props.text}
    </button>
  );
};

export default CtaButton;
