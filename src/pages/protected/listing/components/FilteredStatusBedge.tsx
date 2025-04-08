import { BadgeBlue, BadgeGray, BadgeRed } from '../../../../components/Badges';
import { FilteredStatus } from '../../../../enums/filteredStatus';

export const FilteredStatusBedge = ({
  status,
}: {
  status?: FilteredStatus | string;
}) => {
  switch (status) {
    case FilteredStatus.FURNISHED:
      return <BadgeBlue value="Furnished" />;
    case FilteredStatus.EMPTY:
      return <BadgeRed value="Empty" />;
    case FilteredStatus.NO_DATA:
      return <BadgeGray value="No data" />;
    default:
      return status;
  }
};
