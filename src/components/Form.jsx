export default function Form() {
  function addListItem(e) {
    console.log(e.target.previousElementSibling.value);
    
  }
  return (
    <form action="#">
      <input type="text" />
      <button type="submit" onClick={addListItem}>
        Add
      </button>
    </form>
  );
}
