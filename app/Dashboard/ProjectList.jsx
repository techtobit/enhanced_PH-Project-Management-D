"use client"
import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Card, Skeleton, Flex, Spin } from 'antd';
const { Meta } = Card;
import axios from "axios";
import apiSDK from '../utils/apiSDK/apiSDK'
import { useQueries, useQuery, useMutation } from '@tanstack/react-query';
import DrawerComp from './DrawerComp'
import SideBar from '../Shared/SideBar'
import ProjectListDetails from './ProjectListDetails';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerData, setDrawerData] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);

  const url = `https://663114fbc92f351c03dc1f32.mockapi.io`
  // const url = `project.json`
  const { data, isLoading, isError } = useQuery({
    queryKey: ['Projects'],
    queryFn: async () => {
      const response = await fetch(`${url}projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch Project');
      }
      const limitedData = await response.json()
      setProjects(limitedData.slice(0, 12));
    },
  });



  const handleView = (project) => {
    setProjectDetails(project)
    setViewDetails(true)
  };

  const handleDrawer = (project) => {
    setDrawerData(project)
    setDrawerVisible(true);
  };
  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };



  const handleDelete = (id) => {
    //demo-delete method test
    axios.delete(`${url}/projects/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    console.log(id)
  }

  const onChange = (checked) => {
    setLoading(!checked);
  }

  return (
    <>
      {isLoading && <div className=' h-screen flex items-center justify-center'>
        <Spin className=' flex justify-center items-center' size="large" />
      </div>}
      {
        !(viewDetails) ?

          <div className='ProjectList  '>

            <Row gutter={16} className='w-full flex justify-center'>
              {
                projects.map((project, index) => (
                  <>
                    <Card className='ml-2' key={index}
                      style={{
                        width: 300,
                        marginTop: 16,
                      }}
                      actions={[
                        <EyeOutlined onClick={() => handleView(project)} />,
                        <EditOutlined onClick={() => handleDrawer(project)} key="edit" />,
                        <DeleteOutlined onClick={() => handleDelete(project.id)} key="delete" />,
                      ]}
                    >
                      <Skeleton key={index} loading={isLoading} active>
                        <Meta
                          title={project.project_title}
                        />
                        <p className=' overflow-hidden truncate'>{project.project_dis}</p>
                      </Skeleton>
                    </Card>

                  </>
                ))

              }
            </Row>
            {drawerVisible && <DrawerComp drawerData={drawerData} handleDrawerClose={handleDrawerClose} onClose={() => setDrawerVisible(false)} />}
          </div>
          :
          <ProjectListDetails setViewDetails={setViewDetails} projectDetails={projectDetails} isLoading={isLoading} />
      }
    </>
  )
};

export default ProjectList;