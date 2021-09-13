import { FC, PropsWithChildren, ReactNode } from "react";

import { FaCalendarAlt } from "react-icons/all";
import {
  QualificationCalendar,
  QualificationContent,
  QualificationData,
  QualificationLine,
  QualificationRounder,
  QualificationSubtitle,
  QualificationTitle
} from "./QualificationTab.elements";

interface QualificationTabProps {
  buttonIcon: ReactNode;
  buttonName: string;
  qualifications: {
    title: string;
    subtitle: string;
    date: string;
  }[];
}

const QualificationTab: FC<PropsWithChildren<QualificationTabProps>> = ({ qualifications }) => {
  return (
    <QualificationContent data-content>
      {qualifications.map((qualification, index) => {
        const emptyTag = <div />;
        const qualificationData = (
          <div>
            <QualificationTitle>{qualification.title}</QualificationTitle>
            <QualificationSubtitle>{qualification.subtitle}</QualificationSubtitle>
            <QualificationCalendar>
              <FaCalendarAlt />
              {qualification.date}
            </QualificationCalendar>
          </div>
        );

        const isEven: boolean = !!(index % 2);

        return (
          <QualificationData key={index}>
            {isEven ? emptyTag : qualificationData}
            <div>
              <QualificationRounder />
              <QualificationLine />
            </div>
            {!isEven ? emptyTag : qualificationData}
          </QualificationData>
        );
      })}
    </QualificationContent>
  );
};

export default QualificationTab;
