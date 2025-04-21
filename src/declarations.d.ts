declare module '*.webm' {
    const src: string;
    export default src;
  }
declare module '*.svg' {
    const src: string;
    export default src;
  }
  
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
  