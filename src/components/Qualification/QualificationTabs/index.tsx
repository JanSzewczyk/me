import { Children, FC, PropsWithChildren, useState } from "react";
import {
  QualificationButton,
  QualificationButtons,
  QualificationContainer,
  QualificationSections
} from "./QualificationTabs.elements";

const QualificationTabs: FC<PropsWithChildren<{}>> = ({ children }) => {
  const childrenComponents = Children.toArray(children) as any[];

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <QualificationContainer>
      <QualificationButtons>
        {childrenComponents.map(({ props }, index) => (
          <QualificationButton key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            {props.buttonIcon}
            {props.buttonName}
          </QualificationButton>
        ))}
      </QualificationButtons>

      <QualificationSections>{childrenComponents[activeTab]}</QualificationSections>
    </QualificationContainer>
  );
};

export default QualificationTabs;
