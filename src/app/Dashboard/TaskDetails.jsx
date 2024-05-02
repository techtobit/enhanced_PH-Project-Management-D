import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button, Tooltip, Select,Avatar, Space, Skeleton,Divider, List } from 'antd';
const { Meta } = Card;
import { EditText,  EditTextarea  } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const TaskDetails = ({task, setIsOpenTask}) => {
  const [text, setText] = useState()

  console.log('task',task.teamName)
  const getTeamOptions = () => {
    if (!task.team) return [];
    const team = task.team.map((team) => ({
      label: team.team,
      value: team.team
    }))
    return team;
  }

  const handleSave = ({ name, value }) => {
    const updateText = { ...text }
    updateText[name] = value;
    setText(updateText)
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return( 
  <>
  <div className='flex gap-5 pb-5'>
          <Button type='primary' onClick={() => setIsOpenTask(false)} >Save</Button>
          <Button onClick={() => setIsOpenTask(false)} >Cancel</Button>
    </div>
    <EditText className='font-semibold w-[120px] h-[60px] truncate lg:text-xl text-[10px] focus:outline-none focus:border-none'
          name='title'
          onChange={(e) => hanleChange(e, setText)}
          onSave={handleSave}
          defaultValue={task.title} />

        <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
          <p className=' font-nomarl' >Assinged Memeber</p>
          <EditText className='font-medium w-[120px] = truncate lg:text-[15px] text-[10px] focus:outline-none focus:border-none'
          name='project_title'
          onChange={(e) => hanleChange(e, setText)}
          onSave={handleSave}
          defaultValue={task.teamName} />
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
        <p className=' font-nomarl' >Discription</p>
        <EditTextarea
              name='discription'
              rows={7}
              value={task.discription}
              style={{ fontSize: '16px' }}
        />
        </div>
  </>
  )
}
export default TaskDetails