import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest"
        );

        setRatesData({
          state: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getRates, 2000);
  }, []);

  return ratesData;
};

export default useRatesData;
