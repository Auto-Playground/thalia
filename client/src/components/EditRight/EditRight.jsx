import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { editRight } from "../../Services/rightServices";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function EditRight({ setOpenModal, openModal, rightDetails }) {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });
  useEffect(() => {
    if (rightDetails) {
      setFormData({
        name: rightDetails?.name || "",
        content: rightDetails?.content || "",
      });
    }
  }, [rightDetails]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEdit = async () => {
    const response = await editRight(formData, rightDetails?._id);
    if (response.success === true) {
      toast.success(response.message);
      formData.name = "";
      formData.content = "";
      setOpenModal(false);
    }
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-gray-800">
          <h1 className="text-white font-bold">Add New Right</h1>
        </Modal.Header>
        <Modal.Body className="ring-1 bg-background rounded-b-md px-2 py-2">
          <div className="w-full">
            <label htmlFor="">
              <h1 className="text-white py-2">Name of the Right</h1>
              <input
                type="text"
                className="w-full rounded-md bg-gray-700 text-text"
                value={formData?.name}
                onChange={handleChange}
                name="name"
              />
            </label>
          </div>
          <div className="w-full mt-3">
            <label htmlFor="">
              <h1 className="text-text py-2">Provide the Right Description</h1>
              <textarea
                name="content"
                value={formData?.content}
                onChange={handleChange}
                id=""
                rows={8}
                className="w-full rounded-md bg-gray-700 text-white"
              ></textarea>
            </label>
          </div>
          <button
            className="text-primary border-2 px-5 py-1 hover:bg-primary hover:text-black rounded-md float-end"
            onClick={handleEdit}
          >
            Update
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EditRight;
