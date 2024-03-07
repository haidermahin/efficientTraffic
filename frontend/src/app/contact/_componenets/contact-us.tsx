'use client';
import { Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const ContactUs: React.FC = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (formValues: any) => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/form/', formValues, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response data:', response.data);

      if (response.status === 200 || response.status === 201) {
        setError(false);
        setSuccessMessage('Form submitted successfully!');
        console.log('Form submission result:', response.data);
      } else {
        throw new Error(`Network response was not ok (${response.status})`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    } finally {
      setLoading(false);
      onReset();
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        name='contact-form'
        onFinish={handleSubmit}
        layout='vertical'
        className='mt-4 w-full'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input size='large' type='text' />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input size='large' type='email' />
        </Form.Item>
        <Form.Item
          label='Mobile'
          name='mobile'
          rules={[{ required: true, message: 'Please input your Mobile!' }]}
        >
          <Input size='large' type='text' />
        </Form.Item>

        <Form.Item
          label='Message'
          name='message'
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <button
            className='focus:shadow-outline duration focus:shadow-outline rounded border  bg-primary px-3 py-1 font-bold text-white transition hover:border-primary hover:bg-white hover:text-primary focus:outline-none'
            type='submit'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </Form.Item>
      </Form>

      {error && (
        <p className='my-4 text-red-500'>
          There was an error submitting your form. Please try again.
        </p>
      )}
      {successMessage && (
        <p className='my-4 text-green-500'>{successMessage}</p>
      )}
    </>
  );
};

export default ContactUs;
