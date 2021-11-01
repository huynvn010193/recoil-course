import {useRecoilState} from 'recoil';
import {elementState, selectedElementState} from '../../store';

import {Drag} from '../Drag';
import {Resize} from '../Resize';
import {RectangleContainer} from './RectangleContainer';
import {RectangleInner} from './RectangleInner';

export const Rectangle = ({id}: {id: number}) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  const [element, setElement] = useRecoilState(elementState(id));

  const selected = id === selectedElement;

  return (
    <RectangleContainer
      position={element.style.position}
      size={element.style.size}
      onSelect={() => {
        // khi chọn element thì set id của element vào state.
        setSelectedElement(id);
      }}
    >
      <Resize
        selected={selected}
        position={element.style.position}
        size={element.style.size}
        onResize={(style: any) => {
          // Khi resize thì set style cho state elementState
          setElement({
            ...element,
            style,
          });
        }}
      >
        <Drag
          position={element.style.position}
          onDrag={(position) => {
            // khi kéo thả thì set lại vị trí element vào elementState
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
