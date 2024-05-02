"use client";
import Link from 'next/link';
// import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import ProjectList from '../Dashboard/ProjectList'
import { ProductOutlined, UserOutlined, PicLeftOutlined, AudioOutlined, FullscreenOutlined,BoxPlotOutlined  } from '@ant-design/icons';
import { Layout, Menu, theme, Input, Space } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const SideBar=()=> {
  const [activeKey, setActiveKey] = useState(null)
  
  const items = [
    // {
    //   key: 'dasboard', 
    //   icon: <ProductOutlined />,
    //   label: 'Home',
    // },
    {
      key: 'projects',
      icon: <PicLeftOutlined />,
      label: 'Projects',
    },
    {
      key: 'board',
      icon: <BoxPlotOutlined />,
      label: 'Board',
    },
  ];
  
  
  function handleMenu (key){
    setActiveKey(key);
  }

  console.log(activeKey)

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return(
    <Layout className='h-screen'>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['projects                                                                                          ']} items={items} onClick={(event) => handleMenu(event.key)} />
    </Sider>
    <Layout>
      <Header
      className='flex justify-end items-center'
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Search className='mx-2' placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      </Header>
      <Content className="overflow-y-scroll"
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        {/* {activeKey === 'dasboard' && <ProjectList/>} */}
        {activeKey === 'projects' && <ProjectList/>}
        
        
        </div>
      </Content>
    </Layout>
  </Layout>

  )

}
export default SideBar;