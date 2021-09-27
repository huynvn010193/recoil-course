import {createContext, useState} from 'react';
import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {Element, Rectangle, selectedElementState} from './components/Rectangle/Rectangle';
import {EditProperties} from './EditProperties';
import {PageContainer} from './PageContainer';
import {elementsState, Toolbar} from './Toolbar';

// type ElementsContextType = {
//   elements: Element[];
//   addElement: () => void;
//   setElement: SetElement;
// };

// export const ElementsContext = createContext<ElementsContextType>({
//   elements: [],
//   addElement: () => {},
//   setElement: () => {},
// });

// type SelectedElementContextType = {
//   selectedElement: number | null;
//   setSelectedElement: (index: number) => void;
// };

// export const SelectedElementContext = createContext<SelectedElementContextType>({
//   selectedElement: null,
//   setSelectedElement: () => {},
// });

// export const selectedElementState = atom<number | null>({
//   key: 'selectedElement',
//   default: null,
// });

// export const elementsState = atom<number[]>({
//   key: 'elements',
//   default: [],
// });

export type SetElement = (indexToSet: number, newElement: Element) => void;

function Canvas() {
  //const [elements, setElements] = useState<Element[]>([]);
  const elements = useRecoilValue(elementsState);

  const setSelectedElement = useSetRecoilState(selectedElementState);

  // const [selectedElement, setSelectedElement] = useState<number | null>(null);

  // const setElement: SetElement = (indexToSet, newElement) => {
  //   setElements(
  //     elements.map((element, index) => {
  //       if (indexToSet === index) return newElement;
  //       return element;
  //     }),
  //   );
  // };

  // const addElement = () => {
  //   setElements((elements) => {
  //     return [
  //       ...elements,
  //       {
  //         style: {
  //           position: {top: 100 + elements.length * 30, left: 100 + elements.length * 30},
  //           size: {width: 100, height: 100},
  //         },
  //       },
  //     ];
  //   });
  // };

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      <EditProperties />
      {/* {elements.map((element, index) => (
        <Rectangle key={index} element={element} index={index} />
      ))} */}

      {elements.map((id) => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
