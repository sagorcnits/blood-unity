import { useEffect, useState } from "react";

const useSelect = () => {
  const [district, setDistrict] = useState([]);
  const [upazella, setUpazella] = useState([]);

  useEffect(() => {
    fetch("/distric.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("/upzella.json")
      .then((res) => res.json())
      .then((data) => setUpazella(data));
  }, []);

  return [district, upazella];
};

export default useSelect;
