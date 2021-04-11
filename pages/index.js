import { Form, Select, InputNumber, Switch, Slider, Button, Input } from "antd";
import { useState } from "react";
import { storage } from "./../lib/localStorage";

const Option = Select.Option;
const { TextArea } = Input;

const content = {
  marginTop: "100px",
};

export default function Home() {
  const [form] = Form.useForm();

  const localFormData = storage.getItem("testLocStorage", {});
  console.log(localFormData);

  const onFinish = (values) => {
    console.log("Success:", values);
    storage.setItem("testLocStorage", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={content}>
      <div className="text-center mb-5">
        <h1>Local storage test</h1>
      </div>
      <div>
        <Form
          layout="horizontal"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          initialValues={{
            remember: true,
            ...localFormData,
          }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="user"
            label="User"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select
              size="large"
              style={{ width: 400 }}
              placeholder={"Please select"}
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            rules={[
              {
                required: true,
                message: "Please input your location!",
              },
            ]}
          >
            <Input
              size="large"
              style={{ width: 400 }}
              placeholder={"Enter location here"}
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <TextArea
              size="large"
              style={{ width: 400 }}
              placeholder={"Enter description here"}
            />
          </Form.Item>

          <Form.Item
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button size="large" type="primary" htmlType="submit">
              Save to LocalStorage
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
