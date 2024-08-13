import { useState } from "react";

export type AccordionHookType = {
  handleSelect: (index: number) => void;
  getDatas: () => { selectIndex: number; subSelecetIndex: number };
};

export function useAccordion(): AccordionHookType {
  const [accordion, setAccordion] = useState({
    selectIndex: -1,
    subSelecetIndex: -1,
  });
  const handleSelect = (index: number) => {
    if (accordion.selectIndex === index) {
      setAccordion({
        selectIndex: -1,
        subSelecetIndex: -1,
      });
      return;
    }
    setAccordion({
      selectIndex: index,
      subSelecetIndex: -1,
    });
  };
  const getDatas = () => {
    return accordion;
  };
  return {
    handleSelect,
    getDatas,
  };
}
