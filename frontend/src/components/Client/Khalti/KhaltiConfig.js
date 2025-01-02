import React, { useEffect, useRef } from "react";

import KhaltiCheckout from "khalti-checkout-web";

const KhaltiConfig = (total) => {
  const btnRef = useRef(null); // Create a reference for the button

  useEffect(() => {
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
        checkout.show({ amount: total });
      };
    }
  }, []);

  return (
    <div>
      <button ref={btnRef} id="payment-button">
        Pay with Khalti
      </button>
    </div>
  );
};

export default KhaltiConfig;
