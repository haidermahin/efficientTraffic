'use client';

import React from 'react';

import { Input, ConfigProvider, Space } from 'antd';
import { FaSearch } from 'react-icons/fa';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 4,
        colorBorder: '#000',
        colorTextPlaceholder: '#000',
      },
    }}
  >
    <Space>
      <Input
        placeholder='Type & hit Enter'
        className='md:w-72'
        prefix={<FaSearch className='site-form-item-icon text-gray-600' />}
        // style={{ width: '100%' }}
      />
    </Space>
  </ConfigProvider>
);

export default App;
