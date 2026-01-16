import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import React from 'react';
import defaultSettings from '../config/defaultSettings';
import '@ant-design/v5-patch-for-react-19';

/**
 * @see https://umijs.org/docs/api/runtime-config#getinitialstate
 * */
export async function getInitialState() {
  return {
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    ...defaultSettings,
    title: 'Infra Server',
    // 去掉语言选择
    actionsRender: () => [],
    // 只显示头像和昵称，去掉下拉菜单
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      title: 'Asher.Z',
    },
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  baseURL: '/api',
};
