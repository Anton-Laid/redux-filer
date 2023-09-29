import { connect } from "react-redux";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { selectFiler } from "store/filters/filter-selector";
import { removeFilter, clearFilter } from "store/filters/filter-action";

const _FilterPanel = ({ currentFilters, removeFilter, clearFilter }) => {
  // const currentFilters = useSelector(selectFiler);
  // const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((i) => (
            <Badge key={i} variant="clearable" onClear={() => removeFilter(i)}>
              {i}
            </Badge>
          ))}
        </Stack>

        <button onClick={clearFilter} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  currentFilters: state.filters,
});

const FilterPanel = connect(mapStateToProps, { removeFilter, clearFilter })(
  _FilterPanel
);

export { FilterPanel };
