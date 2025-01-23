import axios from "axios";

const AlertPopup = ({ alerts, onClose }) => {
  const handle_response = async (id, status) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/waiter/alerts/response/${id}`,
        { status }
      );
      if (response.status === 200) {
        alert("Alert accepted successfully.");
        window.location.reload();
      } else {
        alert("Failed to update the alert. Please try again.");
      }
    } catch (error) {
      console.error("Error accepting order:", error);
      alert(error.response?.data?.message || "An unexpected error occurred.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-xl font-bold text-red-600">⚠️ Alert</h2>

        {alerts && (

            <div  className="p-3 mb-3 bg-gray-100 rounded">
              {alerts[0].message && (
                <p className="text-gray-800">{alerts[0].message}</p>
              )}
              {alerts[0].table_number && (
                <p className="mt-2 text-sm text-gray-600">
                  Table: <strong>{alerts[0].table_number}</strong>
                </p>
              )}

            </div>


        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              handle_response(alerts[0].id, "COMPLETED");
            }}
            className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
          >
            Accept
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
