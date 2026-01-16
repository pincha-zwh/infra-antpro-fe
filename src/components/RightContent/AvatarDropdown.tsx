import React from 'react';
import { Avatar } from 'antd';

/**
 * 头像名称组件
 */
export const AvatarName = () => {
  return <span>管理员</span>;
};

/**
 * 简化的头像组件，移除了对currentUser的依赖
 */
export const AvatarDropdown: React.FC = () => {
  return (
    <Avatar 
      src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
      style={{ cursor: 'pointer' }}
      // Avatar组件不支持title属性，使用alt属性替代
      alt="管理员"
    >
      <AvatarName />
    </Avatar>
  );
};
