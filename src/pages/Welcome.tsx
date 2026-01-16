import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer title="首页">
      <Card>
        <div style={{ padding: '10px 0' }}>
          <h2>欢迎使用基础项目</h2>
          <p>这是一个基于 Ant Design Pro 简化后的基础项目模板</p>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
