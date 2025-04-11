import { normalizeScreamingSnakeText } from '../../../../helpers/normalizeScreamingSnakeText';
import { PropertyOwnerNameStatus } from '../enum/propertyOwnerNameStatus';

export type OwnerNameVariant = string | PropertyOwnerNameStatus;

export const OwnerNameText = ({
  statusOrName,
}: {
  statusOrName: OwnerNameVariant;
}) => {
  if (statusOrName === PropertyOwnerNameStatus.NOT_CHECKED) {
    return (
      <span className="text-primary opacity-40 flex gap-2 items-center">
        {statusOrName}
        <div className="w-2 h-2 rounded-full bg-primary" />
      </span>
    );
  }

  if (statusOrName === PropertyOwnerNameStatus.NO_DATA_FOUND) {
    return <span className="text-gray-400">{statusOrName} </span>;
  }

  return (
    <span className={'capitalize text-slate-900'}>
      {normalizeScreamingSnakeText(statusOrName)}{' '}
    </span>
  );
};
