function Form() {
  <>
    <form className="p-4">
      <input type="file" name="file" id="file" required />
      <button type="submit" className="py-1.5 px-4 border-2 rounded">
        Submit
      </button>
    </form>
  </>;
}
export default Form;
