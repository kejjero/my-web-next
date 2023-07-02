declare module '*.module.sass' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const content: string;
  export = content;
}

declare module '*.png' {
  const content: string;
  export = content;
}

declare module '*.ico' {
  const content: string;
  export = content;
}

interface Window {
  setPVZData: (id: number) => void;
  grecaptcha: any;
}
