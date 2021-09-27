import {Icon, IconButton, VStack} from '@chakra-ui/react';
import {useContext} from 'react';
import {Square} from 'react-feather';
import {atom, useSetRecoilState} from 'recoil';

export const elementsState = atom<number[]>({
  key: 'elements',
  default: [],
});

export const Toolbar = () => {
  // const {addElement} = useContext(ElementsContext);
  // const [elements, setElements] = useRecoilState(elementsState);
  const setElements = useSetRecoilState(elementsState);
  // console.log(elements, elements.length);
  return (
    <VStack
      position="absolute"
      top="20px"
      left="20px"
      backgroundColor="white"
      padding={2}
      boxShadow="md"
      borderRadius="md"
      spacing={2}
    >
      <IconButton
        // onClick={addElement}
        onClick={() => {
          setElements((elements) => [...elements, elements.length]);
        }}
        aria-label="Add rectangle"
        icon={<Icon style={{width: 24, height: 24}} as={Square} />}
      />
    </VStack>
  );
};
