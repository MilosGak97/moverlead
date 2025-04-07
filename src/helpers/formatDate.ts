import { format, parseISO } from 'date-fns';

export const formatDateToUSDate = (date: string) => {
  return format(parseISO(date), 'MM/dd/yyyy');
};
