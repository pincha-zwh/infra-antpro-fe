import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Powered by infra-server-service"
      links={[
        {
          key: 'infra-server-service',
          title: 'infra-server-service',
          href: '/',
          blankTarget: false,
        },
      ]}
    />
  );
};

export default Footer;
