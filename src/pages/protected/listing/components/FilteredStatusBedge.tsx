import {
  BadgeBlue,
  BadgePurple,
  BadgeYellow,
} from '../../../../components/Badges';
import { FilteredStatus } from '../../../../enums/filteredStatus';

export const FilteredStatusBedge = ({
  status,
}: {
  status?: FilteredStatus | string;
}) => {
  switch (status) {
    case FilteredStatus.FURNISHED:
      return <BadgeYellow value="Furnished" />;
    case FilteredStatus.EMPTY:
      return <BadgeBlue value="Empty" />;
    case FilteredStatus.NO_DATA:
      return <BadgePurple value="No data" />;
    default:
      return status;
  }
};
