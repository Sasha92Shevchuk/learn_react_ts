declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

//Цей файл потрібно для того, щоб TypeScript правильно обробляв файли з розширеннями .svg та .png.
//Без цього імпорти виду import logo from "./logo.svg"; викликатимуть помилку.
