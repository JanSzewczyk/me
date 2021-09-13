import {
  QualificationBriefcaseIcon,
  QualificationGraduationCapIcon,
  QualificationSection
} from "./Qualification.elements";
import { SectionSubtitle, SectionTitle } from "styles";
import QualificationTab from "./QualificationTabs/QualificationTab";
import QualificationTabs from "./QualificationTabs";
import { useTranslation } from "react-i18next";

const Qualification = () => {
  const { t } = useTranslation("qualification");

  const education = t("educationTab", { returnObjects: true });
  const work = t("workTab", { returnObjects: true });

  return (
    <QualificationSection id={"qualification"}>
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      <SectionSubtitle>{t("sectionSubtitle")}</SectionSubtitle>

      <QualificationTabs>
        <QualificationTab
          buttonIcon={<QualificationGraduationCapIcon />}
          buttonName={education.title}
          qualifications={education.qualifications}
        />
        <QualificationTab
          buttonIcon={<QualificationBriefcaseIcon />}
          buttonName={work.title}
          qualifications={work.qualifications}
        />
      </QualificationTabs>
    </QualificationSection>
  );
};

export default Qualification;
