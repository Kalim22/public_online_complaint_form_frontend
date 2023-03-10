import { toast } from "react-toastify";

export function getStatus(status, duration, successMsg) {
  if (status === "success") {
    const resolveStatus = new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
    toast.promise(resolveStatus, {
      pending: "wait!  we are processing your request...",
      success: successMsg,
      error: "Your request couldn't fullfill right now!",
    });
  } else {
    toast.warning("Please try again after refreshing the page!");
  }

  // if (status === "failed") {
  //   const resolveStatus = new Promise((resolve, reject) => {
  //     setTimeout(resolve, duration);
  //   });
  //   toast.promise(resolveStatus, {
  //     pending: "wait!  we are processing your request...",
  //     success: successMsg,
  //     error: "Your request couldn't fullfill right now!",
  //   });
  // } 
}
