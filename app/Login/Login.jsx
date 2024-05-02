"use client"
import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      console.log('Singin successful!', values);
    } catch (error) {
      console.error('Singin failed!', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='h-screen w-full flex items-center justify-center' >
      <Form
      className=''
        name="basic"
        labelCol={{
          // span: 16,
        }}
        wrapperCol={{
          // span: 16,
        }}
        style={{
          maxWidth: 600
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >

<Form.Item className="w-[300px]"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username/email!',
          },
        ]}
      >
      <label>Email <span className='text-red-500'>*</span></label>
        <Input prefix={<UserOutlined className="site-form-item-icon w-[300px]" />} placeholder="Email" />
      </Form.Item>


        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
        <label>Password <span className='text-red-500'>*</span></label>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        </Form.Item>


        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
    
            span: 16,
          }}
        >
          <Button className="w-[300px]" type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
