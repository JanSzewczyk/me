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
}

const QualificationTab: FC<PropsWithChildren<QualificationTabProps>> = () => {
  return (
    <QualificationContent data-content>
      <QualificationData>
        <div>
          <QualificationTitle>Computer Science</QualificationTitle>
          <QualificationSubtitle>Poland - Cracow RP</QualificationSubtitle>
          <QualificationCalendar>
            <FaCalendarAlt />
            2000 - 2500
          </QualificationCalendar>
        </div>
        <div>
          <QualificationRounder />
          <QualificationLine />
        </div>
      </QualificationData>

      <QualificationData>
        <div />
        <div>
          <QualificationRounder />
          <QualificationLine />
        </div>
        <div>
          <QualificationTitle>Computer Science 2</QualificationTitle>
          <QualificationSubtitle>Poland - Cracow RP</QualificationSubtitle>
          <QualificationCalendar>
            <FaCalendarAlt />
            2000 - 2500
          </QualificationCalendar>
        </div>
      </QualificationData>

      <QualificationData>
        <div>
          <QualificationTitle>Computer Science 3</QualificationTitle>
          <QualificationSubtitle>Poland - Cracow RP</QualificationSubtitle>
          <QualificationCalendar>
            <FaCalendarAlt />
            2000 - 2500
          </QualificationCalendar>
        </div>
        <div>
          <QualificationRounder />
          <QualificationLine />
        </div>
      </QualificationData>
    </QualificationContent>
  );
};

export default QualificationTab;
