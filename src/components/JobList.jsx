import { JobPosition } from "./JobPosition";
import { connect } from "react-redux";
import { selectorVisiblePosition } from "store/position/position-selector";
import { addFilter } from "store/filters/filter-action";

const _JobList = ({ position, addFilter }) => {
  // const dispatch = useDispatch();
  // const currentFilters = useSelector(selectFiler);
  // const position = useSelector((state) =>
  //   selectorVisiblePosition(state, currentFilters)
  // );

  const handleAddFiler = (filer) => {
    addFilter(filer);
  };

  return (
    <div className="job-list">
      {position.map((item) => (
        <JobPosition key={item.id} {...item} handleAddFiler={handleAddFiler} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  position: selectorVisiblePosition(state, state.filters),
});

const JobList = connect(mapStateToProps, { addFilter })(_JobList);

export { JobList };
