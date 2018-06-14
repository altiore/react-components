declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.scss'

declare module "@storybook/addon-actions" {
  export function action(name: string, ...params: any[]): any;
}
