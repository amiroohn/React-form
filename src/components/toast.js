import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "succes") {
    toast.success(text);
  } else if (type === "error") {
    toast.error(text);
  }
};
