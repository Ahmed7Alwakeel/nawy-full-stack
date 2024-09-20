import React, { Dispatch, useContext, useState } from "react";
import Button from "./buttons/Button";
import { generalDelete } from "../API/api";
import { toast } from "react-toastify";
import { authContext } from "../store/context/authContext";

interface IProps {
  id: string | boolean
  setModal: Dispatch<React.SetStateAction<string | boolean>>
  setRefetchData: Dispatch<React.SetStateAction<string | boolean>>
  route: string
  successMsg: string
  warningMsg: string
}
const DeleteModal = ({ id, setModal, setRefetchData, route, successMsg, warningMsg }: IProps) => {
  const [loading, setLoading] = useState(false);
  const { catchError } = useContext(authContext)

  function handleDelete() {
    setLoading(true);
    generalDelete(`${route}/${id}`).then((res) => {
      setLoading(false);
      setRefetchData(`deleted_${Date.now()}`);
      setModal(false);
      toast.success(successMsg);
    }).catch(error => {
      catchError(error, setLoading)
    })
  }

  return (
    <div className="common-modal">
      <h4>{warningMsg}</h4>
      <div className="buttons">
        <Button
          loading={loading}
          onClick={handleDelete}
        >
          <span className="bold">Confirm</span>
        </Button>
        <Button type={"submit"} onClick={() => setModal(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default DeleteModal
