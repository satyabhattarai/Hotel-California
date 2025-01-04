import React, { useState } from "react";

import axios from "axios";

const Fetch = () => {
  const [data, set_data] = useState();
  const fetch = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/fetch");
      set_data(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div onClick={fetch}>
      click here to fetch
      {/* {data && <div>
        {data.od}
        </div>} */}

    </div>
  );
};

export default Fetch;
