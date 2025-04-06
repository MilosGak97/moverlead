import {
  BadgeBlue,
  BadgePurple,
  BadgeYellow,
} from '../../../../components/Badges';
import { PropertyStatus } from '../../../../enums/propertyStatus';

export const PropertyStatusBedge = ({
  status,
}: {
  status: PropertyStatus | string;
}) => {
  switch (status) {
    case PropertyStatus.FOR_SALE:
      return <BadgeYellow value="For sale" />;
    case PropertyStatus.PENDING:
      return <BadgeBlue value="Pending" />;
    case PropertyStatus.COMING_SOON:
      return <BadgePurple value="Coming soon" />;
    default:
      return status;
  }
};
