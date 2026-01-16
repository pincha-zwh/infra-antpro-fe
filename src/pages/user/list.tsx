import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, message, Table } from 'antd';
import { useRequest } from '@umijs/max';
import React from 'react';

/**
 * 用户信息类型定义
 */
export interface UserInfo {
  id: number;
  name: string;
  age: number;
  email: string;
  role: string;
}

/**
 * API响应类型定义
 */
export interface GetUsersResponse {
  users: UserInfo[];
}

/**
 * 用户列表组件
 */
const UserList: React.FC = () => {
  /**
   * 获取用户列表数据
   */
  const {
    data: usersData,
    loading,
    error,
    refresh,
  } = useRequest<GetUsersResponse>({
    url: '/users',
  });

  /**
   * 处理请求错误
   */
  React.useEffect(() => {
    if (error) {
      console.error('获取用户列表失败:', error);
      message.error('获取用户列表失败，请稍后重试');
    }
  }, [error]);

  /**
   * 处理用户数据，添加key字段
   */
  const processedData = React.useMemo(() => {
    // 使用类型断言确保数据类型正确
    const response = usersData as GetUsersResponse;
    return response?.users?.map((user) => ({
      ...user,
      key: user.id,
    })) || [];
  }, [usersData]);

  /**
   * 处理编辑操作
   */
  const handleEdit = (record: UserInfo) => {
    // TODO: 实现编辑逻辑
    console.log('编辑用户:', record);
    message.info(`编辑用户: ${record.name}`);
  };

  /**
   * 处理删除操作
   */
  const handleDelete = (record: UserInfo) => {
    // TODO: 实现删除逻辑
    console.log('删除用户:', record);
    message.info(`删除用户: ${record.name}`);
  };

  /**
   * ProTable列配置
   */
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      sorter: true,
      ellipsis: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      sorter: true,
      ellipsis: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 80,
      sorter: true,
      ellipsis: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      width: 100,
      sorter: true,
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right' as const,
      render: (_: unknown, record: UserInfo) => (
        <>
          <Button 
            type="link" 
            onClick={() => handleEdit(record)}
            size="small"
            style={{ marginRight: 8 }}
          >
            编辑
          </Button>
          <Button 
            type="link" 
            danger 
            onClick={() => handleDelete(record)}
            size="small"
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  /**
   * 渲染空状态
   */
  const renderEmpty = () => {
    return (
      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <p>暂无用户数据</p>
      </div>
    );
  };

  return (
    <PageContainer 
      title="用户列表" 
      extra={[
        <Button 
          key="refresh" 
          onClick={() => refresh()} 
          loading={loading}
        >
          刷新
        </Button>,
      ]}
    >
      <Card 
        bordered={false} 
        style={{ marginBottom: 24 }}
        bodyStyle={{ padding: 20 }}
      >
        <Table
          // Table基本配置
          columns={columns}
          dataSource={processedData}
          rowKey="id"
          loading={loading}
          bordered
          size="small"
          // 分页配置
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`,
          }}
          // 表格滚动配置
          scroll={{
            x: 800,
          }}
          // 空状态配置
          locale={{
            emptyText: renderEmpty,
          }}
          // 行配置
          rowClassName={(record) => {
            return record.role === 'admin' ? 'admin-row' : '';
          }}
        />
      </Card>
    </PageContainer>
  );
};

export default UserList;