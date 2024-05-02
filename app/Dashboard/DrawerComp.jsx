"use client"
import React, { useState, Component  } from 'react';
import axios from 'axios';
import { Button, Drawer, Space, Tooltip } from 'antd';
import { FullscreenOutlined,  DownloadOutlined  } from '@ant-design/icons';
import EasyEdit from 'react-easy-edit';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const DrawerComp = ({drawerData, handleDrawerClose}) => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState();


  // demo-updatet method checking
  const handleSaveUpdate=()=> {
    const url = `https://663114fbc92f351c03dc1f32.mockapi.io/projects/${drawerData.id}`
    console.log(url)
    axios.put(url, text, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res=> {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    });

  }

  const getTeamOptions = () => {
    if(!drawerData.team) return [];
    const team = drawerData.team.map((team)=> ({
      label : team.team,
      value: team.id
    }))
    return team;
  }

  const handleSave = ({ name, value }) => {
    const updateText = {...text}
    updateText[name] = value;
    setText(updateText)
  };

  const hanleChange = (event) => {
    setText({ ...text, currentStatus: event.target.value });
  }

  console.log(text)


  const onClose = () => {
    setOpen(false);
    setText(null);
    handleDrawerClose();
  };


  
  return (
    <>
      <Drawer
        title={`Update `}
        placement="right"
        size={736}
        onClose={onClose}
        open={open}
        extra={
          <Space>
          <Tooltip className='flex items-center' title="Full Screen">
            <Button type="dashed"  icon={<FullscreenOutlined/>} size={20} />
          </Tooltip>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={handleSaveUpdate}>
              Save
            </Button>
          </Space>
        }
      >
        
        <EditText  style={{padding: '10px', fontSize: '20px'}} className='font-semibold focus:outline-none focus:border-none' 
        name='project_title' 
        onChange={(e)=>hanleChange(e, setText)}
        onSave={handleSave}
        defaultValue={drawerData.project_title} />

        {/* <div className='w-full flex items-center gap-5'>
        <Tooltip className='flex items-center' title="Click to Edit">
        <span>Assinged :</span>
   
        <EditText  style={{padding: '5px',  width: '100%', fontSize: '15px', }} className='font-nomarl ' 
        name='assing' 
        onChange={(e)=>hanleChange(e, setText)}
        onSave={handleSave}
        defaultValue={drawerData.assing} />
        </Tooltip>
        </div>

        <div className='w-full flex items-center gap-5'>
        <Tooltip className='flex items-center' title="Input must be Bolean">
        <span>Status :</span>
        <EditText  style={{padding: '5px',  width: '100%', fontSize: '15px', }} className='font-nomarl ' 
        name='currentStatus' 
        onChange={(e)=>hanleChange(e, setText)}
        onSave={handleSave}
        defaultValue={(drawerData.currentStatus)==true ? 'Complete' : "Prograssing"} />
        </Tooltip>
        </div> */}

        

      </Drawer>
    </>
  );
};
export default DrawerComp;