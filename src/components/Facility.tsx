import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { useState } from "react";
import { Facilities } from "../types";

const Facility = () => {
  const facility: Facilities = {
    minibar: true,
    bathtub: true,
  };

  const [minibar, setMinibar] = useState(facility.minibar);
  const [bathtub, setbathTub] = useState(facility.bathtub);

  const onChangeMinibar = (e: CheckboxChangeEvent) => {
    setMinibar(e.target.checked);
  };
  const onChangeBathtub = (e: CheckboxChangeEvent) => {
    setbathTub(e.target.checked);
  };
  return (
    <div className="border bg-shadowviolet rounded-b-lg p-2">
      Facility
      <div className="p-5 flex flex-row gap-5">
        <div>
          <Checkbox checked={minibar} onChange={onChangeMinibar}>
            Minibar
          </Checkbox>
        </div>
        <div>
          <Checkbox checked={bathtub} onChange={onChangeBathtub}>
            Bath Tub
          </Checkbox>
        </div>
        <div>
          <Checkbox checked={false} disabled>
            Cubical Bathroom
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Facility;
