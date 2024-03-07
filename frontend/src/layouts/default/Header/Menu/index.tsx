'use client';

import { ConfigProvider } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MenuProps {
  items: {
    key: string;
    href?: string;
    label: React.ReactNode;
  }[];
}

const originalItems: MenuProps['items'] = [
  {
    key: 'item-1',
    href: '/',
    label: <Link href='/'>Home</Link>,
  },
  {
    key: 'item-2',
    href: '/control-plan',
    label: <Link href='/control-plan'>Traffic management plans (TMP)</Link>,
  },
  {
    key: 'item-3',
    href: '/traffic-signals',
    label: <Link href='/traffic-signals'>Traffic Signals</Link>,
  },
  {
    key: 'item-4',
    href: '/traffic-control',
    label: <Link href='/traffic-control'>Traffic packages (TTMP)</Link>,
  },
  {
    key: 'item-5',
    href: '/flagging',
    label: <Link href='/flagging'>AFAD/Traffic Personnel</Link>,
  },
];

const MenuApp: React.FC = () => {
  const pathname = usePathname();
  const [current, setCurrent] = useState('item-7');

  useEffect(() => {
    const item = originalItems.find((item) => item.href === pathname);
    setCurrent(item?.key ?? 'item-7');
  }, [pathname]);

  return (
    <div className='bg-white shadow-xl'>
      <div className='container'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#db831d',
            },
            components: {
              Menu: {
                horizontalItemHoverBg: '#db831d',
                itemHoverColor: '#fff',
                horizontalItemSelectedBg: '#db831d',
                horizontalItemSelectedColor: '#fff',
                activeBarHeight: 0,
              },
            },
          }}
        >
          <Menu
            selectedKeys={[current.toString()]}
            mode='horizontal'
            items={originalItems}
            className='flex justify-left font-medium'
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default MenuApp;
