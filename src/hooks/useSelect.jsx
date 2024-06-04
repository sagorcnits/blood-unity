import { useEffect, useState } from "react";

const useSelect = () => {
  const [district, setDistrict] = useState([]);
  const [upzella, setUpzella] = useState([]);

  useEffect(() => {
    fetch("../../../public/distric.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("../../../public/upzella.json")
      .then((res) => res.json())
      .then((data) => setUpzella(data));
  }, []);

  return [district, upzella];
};

export default useSelect;