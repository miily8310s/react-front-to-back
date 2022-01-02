import AlertContext from "@/context/alert/AlertContext";
import { useContext } from "react";

export const Alert = () => {
  const { alert } = useContext(AlertContext);
  if (alert === null) {
    return <div>No Alert</div>;
  }
  return (
    <p>
      {alert.type === "error" && (
        <svg
          className="w-6 h-6 flex-none mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
          <path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" strokeWidth="2"></path>
        </svg>
      )}
      <p>
        <strong>{alert.msg}</strong>
      </p>
    </p>
    // )
  );
};
