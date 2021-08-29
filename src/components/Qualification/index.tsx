import {
  QualificationBriefcaseIcon,
  QualificationGraduationCapIcon,
  QualificationSection
} from "./Qualification.elements";
import { SectionSubtitle, SectionTitle } from "styles";
import QualificationTab from "./QualificationTabs/QualificationTab";
import QualificationTabs from "./QualificationTabs";

const Qualification = () => {
  return (
    <QualificationSection id={"qualification"}>
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubtitle>My personal journey</SectionSubtitle>

      <QualificationTabs>
        <QualificationTab buttonIcon={<QualificationGraduationCapIcon />} buttonName={"Education"} />
        <QualificationTab buttonIcon={<QualificationBriefcaseIcon />} buttonName={"Work"} />
      </QualificationTabs>
    </QualificationSection>
  );
};

export default Qualification;
