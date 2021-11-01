import {useRecoilValue, useSetRecoilState} from 'recoil';
import {Rectangle} from './components/Rectangle/Rectangle';
import {EditProperties} from './EditProperties';
import {PageContainer} from './PageContainer';
import {elementsState, selectedElementState} from './store';
import {Toolbar} from './Toolbar';

export type SetElement = (indexToSet: number, newElement: Element) => void;

function Canvas() {
  // Khi elementsState tăng -> tạo ra 1 Rectangle
  const elements = useRecoilValue(elementsState);

  const setSelectedElement = useSetRecoilState(selectedElementState);

  return (
    <PageContainer
      onClick={() => {
        // Khi click ra ngoài thì set lại Element bằng null.
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      <EditProperties />

      {elements.map((id) => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
