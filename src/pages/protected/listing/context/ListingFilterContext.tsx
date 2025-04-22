import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { FilteredStatus } from '../../../../enums/filteredStatus';
import { PropertyStatus } from '../../../../enums/propertyStatus';

type DateRange = { from: string; to: string };
type ValueRange = { from: number | null; to: number | null };
export type StateOption = { abbreviation: string; name: string };

type ListingFilterContextType = {
  states: StateOption[] | null;
  setStates: Dispatch<SetStateAction<StateOption[]>>;
  selectedStatesList: string[];
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
  propertyValue: ValueRange;
  setPropertyValue: Dispatch<SetStateAction<ValueRange>>;
  filteredStatus: FilteredStatus[];
  setFilteredStatus: Dispatch<SetStateAction<FilteredStatus[]>>;
  propertyStatus: PropertyStatus[];
  setPropertyStatus: Dispatch<SetStateAction<PropertyStatus[]>>;
  clearAll: () => void;
  hasActiveFilters: boolean;
};

type ListingFilterProviderProps = { children: ReactNode };

const ListingFilterContext = createContext<ListingFilterContextType>(
  {} as ListingFilterContextType
);

// eslint-disable-next-line react-refresh/only-export-components
export const useListingFilterContext = () => {
  const context = useContext(ListingFilterContext);
  if (!context) {
    throw new Error(
      'useListingFilter must be used within a ListingFilterProvider'
    );
  }
  return context;
};

export const ListingFilterProvider = ({
  children,
}: ListingFilterProviderProps) => {
  const [states, setStates] = useState<StateOption[]>([]);
  const [date, setDate] = useState<DateRange>({ from: '', to: '' });
  const [propertyValue, setPropertyValue] = useState<ValueRange>({
    from: null,
    to: null,
  });
  const [filteredStatus, setFilteredStatus] = useState<FilteredStatus[]>([]);
  const [propertyStatus, setPropertyStatus] = useState<PropertyStatus[]>([]);

  const selectedStatesList = useMemo(
    () => states.map((state) => state.abbreviation),
    [states]
  );

  const hasActiveFilters = useMemo(() => {
    return (
      states.length > 0 ||
      date.from !== '' ||
      date.to !== '' ||
      propertyValue.from !== null ||
      propertyValue.to !== null ||
      filteredStatus.length > 0 ||
      propertyStatus.length > 0
    );
  }, [states, date, propertyValue, filteredStatus, propertyStatus]);

  const clearAll = () => {
    setStates([]);
    setDate({ from: '', to: '' });
    setPropertyValue({ from: null, to: null });
    setFilteredStatus([]);
    setPropertyStatus([]);
  };

  return (
    <ListingFilterContext.Provider
      value={{
        states,
        setStates,
        selectedStatesList,
        date,
        setDate,
        propertyValue,
        setPropertyValue,
        filteredStatus,
        setFilteredStatus,
        propertyStatus,
        setPropertyStatus,
        clearAll,
        hasActiveFilters,
      }}
    >
      {children}
    </ListingFilterContext.Provider>
  );
};
