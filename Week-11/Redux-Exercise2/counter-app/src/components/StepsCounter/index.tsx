import { addAStep, resetSteps } from "redux/stepCounter/stepCounterSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { selectCount } from "redux/stepCounter/stepCounterSelectors";

const StepsCounter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="row">
        <h3>You've walked {count} steps today!</h3>
        <br />
        <button className="button" onClick={() => dispatch(addAStep())}>
          Add a Step
        </button>
        <br />
        <button className="button" onClick={() => dispatch(resetSteps())}>
          Reset Steps
        </button>
      </div>
    </div>
  );
};

export default StepsCounter;
