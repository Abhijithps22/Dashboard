import { Form, Input } from "antd";
import { RoomType } from "../types";
import Roomtariif from "./Roomtariif";
import Extrapersontariff from "./Extrapersontariff";
import Facility from "./Facility";
import ColorPicker from "./ColorPicker";

const Roomtype = () => {
  const roomData: RoomType = {
    name: "Deluxe Room",
    shortName: "Deluxe",
    tariffs: {
      single: 4000,
      double: 5000,
      triple: 6000,
    },
    activeCount: 8,
    pax: 3,
  };

  return (
    <div className="mt-5 border border-gray-100 rounded-2xl">
      <div className="bg-blue border-blue rounded-t-2xl flex items-center">
        <h2 className="text-[16px] text-white p-3">Room Type</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-between p-3 text-[12px] text-[#165F61] bg-shadowblue">
        <div>Created by: Amar Akber (13.10.2023 10:12)</div>
        <div>Last Modified by: Omar (20.10.2023 10:42)</div>
      </div>
      <div className="p-3">
        <h3>Active Room Count: {roomData.activeCount}</h3>
        <Form layout="vertical" className="flex flex-row gap-5 mt-3 flex-wrap">
          <div className="w-[500px]">
            <Form.Item label="Room Type Name" name="roomType">
              <Input value={roomData.name}/>{" "}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Short Name" name="shortName">
              <Input value={roomData.shortName}/>{" "}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Pax/Room" name="pax">
              <Input  value={roomData.pax}/>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="p-3">
        <Roomtariif data={roomData}/>
      </div>
      <div className="p-3">
       <ColorPicker/>
      </div>
      <div className="p-3">
        <Extrapersontariff/>
      </div>
      <div>
        <Facility/>
      </div>
    </div>
  );
};

export default Roomtype;
