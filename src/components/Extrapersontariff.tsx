import React from 'react'
import { Tariff } from '../types';
import { Form, Input } from 'antd';


const Extrapersontariff = () => {
    const extraTariiff: Tariff = {
        exPerson: 5000,
        exChild: 3000,
        exInfant: 4000,
        extraPersonLimit: 2000
      };
  return (
    <div className='border border-gray-200 rounded-sm w-full p-3 bg-shadowviolet'>
    <h2 className='text-black'>Extra Person Tariff</h2>
    <Form layout="vertical" className='flex flex-row flex-wrap gap-5'>
      <Form.Item label="Ex.Person">
      <Input value={`₹ ${extraTariiff.exPerson}`} />
      </Form.Item>
      <Form.Item label="Ex.Child">
        <Input value={`₹ ${extraTariiff.exChild}`}/>
      </Form.Item>
      <Form.Item label="Ex.Infant">
        <Input value={`₹ ${extraTariiff.exInfant}`}/>
      </Form.Item>
    </Form>
  </div>
  )
}

export default Extrapersontariff