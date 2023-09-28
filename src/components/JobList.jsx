import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectorVisiblePosition } from "store/position/position-selector";
import { addFilter } from "store/filters/filter-action";
import { selectFiler } from "store/filters/filter-selector";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFiler);
  const position = useSelector((state) =>
    selectorVisiblePosition(state, currentFilters)
  );

  const handleAddFiler = (filer) => {
    dispatch(addFilter(filer));
  };

  return (
    <div className="job-list">
      {position.map((item) => (
        <JobPosition key={item.id} {...item} handleAddFiler={handleAddFiler} />
      ))}
    </div>
  );
};

export { JobList };
