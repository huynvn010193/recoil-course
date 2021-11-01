import { atom, atomFamily } from "recoil";

// Lưu lại số lượng id của element.
export const elementsState = atom<number[]>({
  key: 'elements',
  default: [],
});

// xử lý khi chọn element -> khi chọn element -> set id của element vô state
export const selectedElementState = atom<number | null>({
  key: 'selectedElement',
  default: null,
})

// Các xửa lý về style của element
export type ElementStyle = {
  position: {top: number; left: number};
  size: {width: number; height: number};
};

export const defaultElement = {
  style: {
    position: {top: 0, left: 0},
    size: {width: 50, height: 50},
  },
};

// State Lưu lại trang thái position and style của element:
export type Element = {style: ElementStyle; image?: {id: number; name: string}};
export const elementState = atomFamily<Element, number>({
  key: 'element',
  default: defaultElement,
});