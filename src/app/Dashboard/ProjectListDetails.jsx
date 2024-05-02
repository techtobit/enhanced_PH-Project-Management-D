import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button, Tooltip, Select,Avatar, Space, Skeleton,Divider, List } from 'antd';
const { Meta } = Card;
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import TaskDetails from './TaskDetails'
const ProjectListDetails = ({ setViewDetails, projectDetails }) => {

  const [text, setText] = useState()
  const [isOpenTask, setIsOpenTask] = useState(false)
  const [task , setTask] = useState()

  console.log('projectDetails', projectDetails)
  const getTeamOptions = () => {
    if (!projectDetails.team) return [];
    const team = projectDetails.team.map((team) => ({
      label: team.team,
      value: team.team
    }))
    return team;
  }
  const getTeamMemberOptions = () => {
    if (!projectDetails.assing) return [];
    const team_member = projectDetails.assing.map((team_member) => (
    {
      label: team_member.member,
      value: team_member.member,
      isAssinged : team_member.isAssinged
    }
    ))

    console.log("team_member",team_member)
    return team_member;
  }
  const getCurrentStatusOptions = () => {
    if (!projectDetails.currentStatus) return [];
    const currentStatus = projectDetails.currentStatus.map((currentStatus) => ({
      label: currentStatus.status,
      value: currentStatus.status
    }))
    return currentStatus;
  }




  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // const handleSave = () => {
  //   console.log('save clickeds')
  //   setViewDetails(false)
  // }

  const handleSave = ({ name, value }) => {
    const updateText = { ...text }
    updateText[name] = value;
    setText(updateText)
  };

 const handelOpenTask = (task) =>{
  setTask(task)
  setIsOpenTask(true)
 }

 console.log(task)

  return (
    <>
      <Card className='flex pl-0 lg:pl-[20%]'
        style={{
          width: '100%',
          marginTop: 16,
        }}
      >
      {
        !(isOpenTask) ? 
      <>

        <div className='flex gap-5 pb-5'>
          <Button type='primary' onClick={() => setViewDetails(false)} >Save</Button>
          <Button onClick={() => setViewDetails(false)} >Cancel</Button>
        </div>

        <EditText className='font-semibold w-[120px] h-[60px] truncate lg:text-xl text-[10px] focus:outline-none focus:border-none'
          name='project_title'
          onChange={(e) => hanleChange(e, setText)}
          onSave={handleSave}
          defaultValue={projectDetails.project_title} />

        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <p className=' font-nomarl' >Assinged Memeber</p>
          <Select className='lg:w-[220px]  w-[190px] '
            name=''
            onChange={handleChange}
            options={getTeamMemberOptions()}
          />
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <p className=' font-nomarl' >Status</p>
          <Select className='lg:w-[220px]  w-[190px] '
            name=''
            onChange={handleChange}
            options={getCurrentStatusOptions()}
          />
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <p className=' font-nomarl' >Assinged Team</p>
          <Select className='lg:w-[220px]  w-[190px] '
            onChange={handleChange}
            options={getTeamOptions()}
          />
        </div>

        <p className=' font-nomarl ' >Task List</p>
        <Divider />
      <List
      
      className="demo-loadmore-list w-[230px] lg:w-full hover:bg-gray-200 bg-gray-100 p-[2px]"
      itemLayout="horizontal"
      dataSource={projectDetails.tasks}
      renderItem={(item, index) => (
        <List.Item
        onClick={()=> handelOpenTask(item)}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}

            />
            <div>
            <h4 className='text-md font-medium'>{item?.title}</h4>
            <div>
            <p type='primary'>Assing To : {item?.teamName}</p>
            </div>
            <h6 className='text-sx text-gray-500'>{item?.discription}</h6>
            </div>
          </Skeleton>
        </List.Item>
      )}
    />
    </>
    :
    <TaskDetails task={task} setIsOpenTask={setIsOpenTask}/>
    }
      </Card>
    </>
  );
};
export default ProjectListDetails;