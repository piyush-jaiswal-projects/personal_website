import ExpForm from "./expForm";
import ProjectForm from "./projectForm";

const AdminPanel = () => {
  return (
    <div>
      <h1 className="bg-gray-500 h-[50px] flex justify-center items-center text-[25px] font-bold">
        ADMIN PANEL
      </h1>
      <div className="flex justify-center items-start">
        <ProjectForm />
        <ExpForm />
      </div>
    </div>
  );
};

export default AdminPanel;
