import 'axios';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    page?: number;
  }
}
