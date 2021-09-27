import {useContext} from 'react';
import {useRecoilState, atomFamily, atom} from 'recoil';

import {Drag} from '../Drag';
import {Resize} from '../Resize';
import {RectangleContainer} from './RectangleContainer';
import {RectangleInner} from './RectangleInner';

export type ElementStyle = {
  position: {top: number; left: number};
  size: {width: number; height: number};
};

export type Element = {style: ElementStyle};

export const elementState = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: {top: 0, left: 0},
      size: {width: 50, height: 50},
    },
  },
});

export const selectedElementState = atom<number | null>({
  key: 'selectedElement',
  default: null,
});

export const Rectangle = ({id}: {id: number}) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  const [element, setElement] = useRecoilState(elementState(id));
  // console.log('Rectangle.tsx - element', element, id);

  // const {selectedElement, setSelectedElement} = useContext(SelectedElementContext);
  // const {setElement} = useContext(ElementsContext);

  const selected = id === selectedElement;

  return (
    <RectangleContainer
      position={element.style.position}
      size={element.style.size}
      onSelect={() => {
        setSelectedElement(id);
      }}
    >
      <Resize
        selected={selected}
        position={element.style.position}
        size={element.style.size}
        onResize={(style) => {
          console.log(style);
          setElement({
            ...element,
            style,
          });
        }}
      >
        <Drag
          position={element.style.position}
          onDrag={(position) => {
            setElement({
              style: {
                ...element.style,
                position,
              },
            });
          }}
        >
          <div>
            <RectangleInner selected={selected} />
          </div>
        </Drag>
      </Resize>
    </RectangleContainer>
  );
};
