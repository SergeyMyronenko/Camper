import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "../../components/MainContent/MainContent";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import css from "./MainPage.module.css";
import { useEffect, useState } from "react";
import { getAllCamp } from "../../redux/camper/operations";
import { selectAllCamper } from "../../redux/camper/selectors";

export const MainPage = () => {
  const [filteredCampers, setFilteredCampers] = useState([]);
  console.log(filteredCampers);

  const dispatch = useDispatch();
  const allCampers = useSelector(selectAllCamper);
  console.log(allCampers);

  const handleFilter = (filter) => {
    console.log(filter);

    const filterData = allCampers.filter((camper) => {
      const matchesLocation = filter.location
        ? camper.location.toLowerCase().includes(filter.location.toLowerCase())
        : true;

      const vehicleEquip = filter.selectedItem
        ? Object.keys(camper.details).includes(filter.selectedItem) ||
          camper.transmission === filter.selectedItem
        : true;
      console.log(vehicleEquip);

      const vehicleType = filter.selectedType
        ? camper.form === filter.selectedType
        : true;

      return matchesLocation && vehicleEquip && vehicleType;
    });

    setFilteredCampers(filterData);
  };

  useEffect(() => {
    dispatch(getAllCamp());
  }, [dispatch]);

  useEffect(() => {
    if (allCampers.length > 0) {
      setFilteredCampers(allCampers);
    }
  }, [allCampers]);

  return (
    <div className={css.main}>
      <Sidebar filter={handleFilter} />
      <MainContent content={filteredCampers} />
    </div>
  );
};
