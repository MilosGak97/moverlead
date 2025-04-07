import {
  BadgeGreen,
  BadgePurple,
  BadgeOrange,
} from '../../../../components/Badges';
import { PropertyStatus } from '../../../../enums/propertyStatus';

export const PropertyStatusBedge = ({
  status,
}: {
  status: PropertyStatus | string;
}) => {
  switch (status) {
    case PropertyStatus.FOR_SALE:
      return <BadgeGreen value="For sale" />;
    case PropertyStatus.PENDING:
      return <BadgeOrange value="Pending" />;
    case PropertyStatus.COMING_SOON:
      return <BadgePurple value="Coming soon" />;
    default:
      return status;
  }
};
