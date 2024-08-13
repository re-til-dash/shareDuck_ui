import { HTMLAttributes } from "react";
import { AccordionHookType } from "../../../hooks/useAccordion";
import React from "react";
import ListButton, {
  typeListButtonProps,
} from "../../molecules/ListButton/ListButton";

interface typeAccordionProps extends HTMLAttributes<HTMLElement> {
  controller?: AccordionHookType;
}

function Accordion({ children, controller }: typeAccordionProps): JSX.Element {
  console.log(React.Children.count(children));
  const buttons = !controller
    ? children
    : React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        if (child.type !== ListButton) {
          return child;
        }
        console.log(child.props.children);
        return React.cloneElement(child, {
          isSelected: !child.props.isSelected
            ? controller.getDatas().selectIndex === index
            : child.props.isSelected,
          onClick: () => controller.handleSelect(index),
          options: child.props.options,
          // children: subButtons,
        } as typeListButtonProps);
      });
  return <div>{buttons}</div>;
}

export default Accordion;
