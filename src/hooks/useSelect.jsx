import { useEffect, useState } from "react";

const useSelect = () => {
  const [districtSelect, setDistrict] = useState([]);
  const [upazilaSelect, setUpazila] = useState([]);

  useEffect(() => {
    fetch("/distric.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("/upzella.json")
      .then((res) => res.json())
      .then((data) => setUpazila(data));
  }, []);

  return [districtSelect, upazilaSelect];
};

export default useSelect;
