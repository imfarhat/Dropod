import { createRef } from "react";
function Form() {
  const fileInput = createRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("file", fileInput.current.files[0]);
    try {
      const response = await fetch("/profile", {
        method: "POST",
        body: formData,
      });

      //const pasedResponse = await response.json();
      if (response.ok) alert("File Uploaded");
      else console.log("Something went wrong");
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <input type="file" name="file" id="file" ref={fileInput} required />
        <button type="submit" className="py-1.5 px-4 border-2 rounded">
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
