import { useSelector } from "react-redux";

function EditPage() {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <div className="edit-page">
      {loggedIn ? (
        <>
          <div className="edit-page__action-selector">
            <button className="edit-page__action-add">ADD NEW ITEM</button>
            <button className="edit-page__action-remove">REMOVE ITEM</button>
            <button className="edit-page__action-edit">EDIT ITEM</button>
          </div>
          <div className="edit-page__action-form"></div>
        </>
      ) : (
        <div className="edit-page__acess-denied-msg">
          Access denied, please log in
        </div>
      )}
    </div>
  );
}

export default EditPage;
