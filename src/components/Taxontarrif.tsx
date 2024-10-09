import { Button, InputNumber, Table, Checkbox, Input, Form } from "antd";
import React, { useState } from "react";
import { TaxSlab } from "../types";

const Taxontarrif: React.FC = () => {
  const initialData: TaxSlab[] = [
    {
      key: "1",
      name: "CGST",
      slabTaxFrom: null,
      slabTaxTo: null,
      fixedTaxFrom: null,
      fixedTaxTo: null,
      aftDisc: false,
      isSlabTax: true,
    },
  ];

  const [dataSource, setDataSource] = useState<TaxSlab[]>(initialData);

  const handleTaxTypeChange = (key: string, isSlabTax: boolean) => {
    setDataSource((prev) =>
      prev.map((item) =>
        item.key === key
          ? { ...item, isSlabTax }
          : { ...item, isSlabTax: false }
      )
    );
  };

  const handleSlabValueChange = (
    key: string,
    field: "slabTaxFrom" | "slabTaxTo",
    value: number | null
  ) => {
    setDataSource((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, [field]: value } : item
      )
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Select Slab Tax or Fixed Tax for Room",
      dataIndex: "taxType",
      render: (_: any, record: TaxSlab) => (
        <div>
          <Button
            style={{
              backgroundColor: record.isSlabTax ? "#4E5D8D" : "white",
              color: record.isSlabTax ? "#fff" : "black",
            }}
            onClick={() => handleTaxTypeChange(record.key, true)}
          >
            Slab Tax
          </Button>
          <Button
            style={{
              backgroundColor: !record.isSlabTax ? "#4E5D8D" : "white",
              color: !record.isSlabTax ? "#fff" : "black",
            }}
            onClick={() => handleTaxTypeChange(record.key, false)}
          >
            Fixed Tax
          </Button>
          {record.isSlabTax && (
            <div className="mt-3 flex flex-col">
              <Form layout="inline">
                <Form.Item label="From">
                  <InputNumber
                    min={0}
                    value={record.slabTaxFrom ?? null}
                    onChange={(value) =>
                      handleSlabValueChange(record.key, "slabTaxFrom", value)
                    }
                  />
                </Form.Item>
                <Form.Item label="To">
                  <InputNumber
                    min={0}
                    value={record.slabTaxTo ?? null}
                    onChange={(value) =>
                      handleSlabValueChange(record.key, "slabTaxTo", value)
                    }
                  />
                </Form.Item>
              </Form>
            </div>
          )}
          <div className="mt-3">
            {record.isSlabTax && (
              <div className="mt-3 flex flex-col">
                <Form layout="inline">
                  <Form.Item label="From">
                    <InputNumber
                      min={0}
                      value={record.slabTaxFrom ?? null}
                      onChange={(value) =>
                        handleSlabValueChange(record.key, "slabTaxFrom", value)
                      }
                    />
                  </Form.Item>
                  <Form.Item label="To">
                    <InputNumber
                      min={0}
                      value={record.slabTaxTo ?? null}
                      onChange={(value) =>
                        handleSlabValueChange(record.key, "slabTaxTo", value)
                      }
                    />
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Select Slab Tax or Fixed Tax for Extra Bed",
      dataIndex: "slabTax",
      render: (_: any, record: TaxSlab) => (
        <div>
          <Button
            style={{
              backgroundColor: record.isSlabTax ? "#4E5D8D" : "white",
              color: record.isSlabTax ? "#fff" : "black",
            }}
            onClick={() => handleTaxTypeChange(record.key, true)}
          >
            Slab Tax
          </Button>
          <Button
            style={{
              backgroundColor: !record.isSlabTax ? "#4E5D8D" : "white",
              color: !record.isSlabTax ? "#fff" : "black",
            }}
            onClick={() => handleTaxTypeChange(record.key, false)}
          >
            Fixed Tax
          </Button>
          <Form layout="vertical" className="mt-2">
            <Form.Item label="Tax Rate">
              <Input value={6.6} className="w-20" />
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Aft Disc",
      dataIndex: "aftDisc",
      render: (text: boolean, record: TaxSlab) => (
        <Checkbox
          checked={record.aftDisc}
          onChange={(e) => {
            setDataSource((prev) =>
              prev.map((item) =>
                item.key === record.key
                  ? { ...item, aftDisc: e.target.checked }
                  : item
              )
            );
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col p-4 flex-wrap">
      <h3 className="text-black mt-3 text-[16px] font-bold">Tax on Tariff</h3>
      <div className="border border-gray-200 rounded-md shadow-md">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="key"
        />
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div>
          <Checkbox checked={false}>
            Active
          </Checkbox>
        </div>
        <div className="flex gap-3">
            <img src="/assets/delete.png" alt="delete" className="w-8 bg-red-500 p-2" />
            <img src="/assets/edit.png" alt="delete" className="w-8 bg-green-500 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Taxontarrif;
