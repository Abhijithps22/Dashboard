import React from 'react';
import { Form, Input } from 'antd';
import { RoomType } from '../types';

interface RoomTariffProps {
  data: RoomType;
}

const Roomtariif = ({ data }: RoomTariffProps) => {
  return (
    <div className='border border-gray-200 rounded-sm w-full p-3 bg-shadowviolet'>
      <h2 className='text-black'>Room Tariff</h2>
      <Form layout="vertical" className='flex flex-row flex-wrap gap-5'>
        <Form.Item label="Single">
        <Input value={`₹ ${data.tariffs.single}`}  />
        </Form.Item>
        <Form.Item label="Double">
          <Input value={`₹ ${data.tariffs.double}`}/>
        </Form.Item>
        <Form.Item label="Triple">
          <Input value={`₹ ${data.tariffs.triple}`}/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Roomtariif;
