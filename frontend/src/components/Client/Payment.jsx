import React, { useRef, useState } from "react";

import KhaltiCheckout from "khalti-checkout-web";
import KhaltiConfig from "./Khalti/KhaltiConfig";
import axios from "axios";
import { jsPDF } from "jspdf";
import { useEffect } from "react";

const Payment = () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const userName = localStorage.getItem("CLIENT");
  const table_number = localStorage.getItem("TABLE_NUMBER");
  const userNumber = localStorage.getItem("PHONE");
  const hotelName = "Hotel California";
  const paymentDate = new Date().toLocaleDateString();
  const [foodItems, set_foodItems] = useState([]);
  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrders = async () => {
    // Iterate over each food item and delete it
    try {
      for (let item of foodItems) {
        await axios.delete(
          `http://127.0.0.1:8000/api/client/order/delete/${item.id}`
        );
      }

      set_foodItems([]);
      localStorage.removeItem("CLIENT");
      localStorage.removeItem("PHONE");
      localStorage.removeItem("TABLE_NUMBER");
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting records:", error);
      alert("Error deleting records. Please try again.");
    }
  };

  //pay via khalti
  const btnRef = useRef(null);

  const handlePay = () => {
    // Check if the button is available

    if (btnRef.current) {
      const config = {
        publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
        productIdentity: "1234567890",
        productName: "Drogon",
        productUrl: "http://gameofthrones.com/buy/Dragons",
        eventHandler: {
          onSuccess(payload) {
            // hit merchant api for initiating verification
            console.log(payload);
          },
          onError(error) {
            // handle errors
            console.log(error);
          },
          onClose() {
            console.log("widget is closing");
          },
        },
        paymentPreference: [
          "KHALTI",
          "EBANKING",
          "MOBILE_BANKING",
          "CONNECT_IPS",
          "SCT",
        ],
      };

      const checkout = new KhaltiCheckout(config);

      // Set up the click event once the button is available
      btnRef.current.onclick = function () {
        // minimum transaction amount must be 10, i.e 1000 in paisa.
        checkout.show({ amount: calculateTotal() * 100 });
      };
    }
  };

  const fetchOrders = async () => {
    const number = localStorage.getItem("PHONE");

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/client/fetch_order",
        {
          params: { number },
        }
      );
      console.log(response.data);
      set_foodItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateTotal = () => {
    const total = foodItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(3));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Summary", 10, 10);

    doc.setFontSize(12);
    doc.text(`User: ${userName}`, 20, 20);
    doc.text(`Number: ${userNumber}`, 20, 30);
    doc.text(`Restaurent: ${hotelName}`, 20, 40);
    doc.text(`Date: ${paymentDate}`, 20, 50);
    doc.text(`Table no. : ${table_number}`, 20, 60);

    doc.text("Food", 20, 70);
    doc.text("Price", 80, 70);
    doc.text("Quantity", 120, 70);
    doc.text("Total", 160, 70);

    let y = 80;
    foodItems.forEach((item) => {
      doc.text(item.name, 20, y);
      doc.text(`$${item.price}`, 80, y);
      doc.text(`${item.quantity}`, 120, y);
      doc.text(`$${item.price * item.quantity}`, 160, y);
      y += 10;
    });

    doc.text("Total Amount:", 120, y + 10);
    doc.text(`$${calculateTotal()}`, 160, y + 10);
    doc.save("payment_summary.pdf");
  };

  //after payment
  const uploadPDF = async (pdfBlob) => {
    const formData = new FormData();
    formData.append("file", pdfBlob);
    formData.append("user_name", userName);
    formData.append("table_number", table_number);
    formData.append("user_number", userNumber);
    formData.append("payment_date", paymentDate);
    formData.append("total_amount", calculateTotal());

    try {
      const response = await axios.post(
        `${baseUrl}/api/client/history/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Failed to upload PDF.");
    }
  };

  const saveHistory = () => {
    // Confirm the action
    const confirmDelete = window.confirm(
      "Are you sure you want to finish all orders?"
    );
    if (!confirmDelete) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Summary", 10, 10);

    doc.setFontSize(12);
    doc.text(`User: ${userName}`, 20, 20);
    doc.text(`Number: ${userNumber}`, 20, 30);
    doc.text(`Restaurant: ${hotelName}`, 20, 40);
    doc.text(`Date: ${paymentDate}`, 20, 50);
    doc.text(`Table no.: ${table_number}`, 20, 60);

    doc.text("Food", 20, 70);
    doc.text("Price", 80, 70);
    doc.text("Quantity", 120, 70);
    doc.text("Total", 160, 70);

    let y = 80;
    foodItems.forEach((item) => {
      doc.text(item.name, 20, y);
      doc.text(`$${item.price}`, 80, y);
      doc.text(`${item.quantity}`, 120, y);
      doc.text(`$${item.price * item.quantity}`, 160, y);
      y += 10;
    });

    doc.text("Total Amount:", 120, y + 10);
    doc.text(`$${calculateTotal()}`, 160, y + 10);

    // Convert PDF to Blob
    const pdfBlob = doc.output("blob");
    uploadPDF(pdfBlob);
    deleteOrders();
  };

  return (
    <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Payment Summary
      </h2>

      <div>
        <div>NAME : {userName}</div>

        <div>TABLE NO.: {table_number}</div>
        <div>PHONE: {userNumber}</div>
        <div>Restaurent: Hotel California</div>
        <div>Date: {paymentDate} </div>
      </div>
      <div className="mt-4">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-700">Food</th>
              <th className="px-4 py-2 text-gray-700">Price</th>
              <th className="px-4 py-2 text-gray-700">Quantity</th>
              <th className="px-4 py-2 text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {foodItems &&
              foodItems?.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 text-gray-600">{item.name}</td>
                  <td className="px-4 py-2 text-gray-600">${item.price}</td>
                  <td className="px-4 py-2 text-gray-600">{item.quantity}</td>
                  <td className="px-4 py-2 text-gray-600">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {foodItems && (
          <div className="flex items-center justify-between mt-4 text-lg font-semibold">
            <span>Total Amount:</span>
            <span className="text-green-600">${calculateTotal()}</span>
          </div>
        )}
      </div>
      <div className="mt-6">
        <button
          ref={btnRef}
          onClick={handlePay}
          className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Pay via Khalti
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={() => {
            saveHistory();
          }}
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Finish Order
        </button>
      </div>
      <div className="mt-6">
        <button
          onClick={downloadPDF}
          className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Download bill
        </button>
      </div>
    </div>
  );
};

export default Payment;
