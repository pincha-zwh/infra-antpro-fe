import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Table } from 'antd';
import React from 'react';

const UserList: React.FC = () => {
  // 模拟用户数据
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      email: 'john@example.com',
      role: '管理员',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      email: 'jim@example.com',
      role: '普通用户',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      email: 'joe@example.com',
      role: '普通用户',
    },
  ];

  // 列配置
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="small">
          <Button type="link">编辑</Button>
          <Button type="link" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer title="用户列表">
      <Card>
        <Table size="small" dataSource={dataSource} columns={columns} />
      </Card>
    </PageContainer>
  );
};

export default UserList;
