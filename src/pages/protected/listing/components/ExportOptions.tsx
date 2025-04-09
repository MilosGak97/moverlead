import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../api/api';
import { useToast } from '../../../../hooks/useToast';
import { Toast } from '../../../../components/Toast';
import { downloadFile } from '../../../../helpers/downloadFile';
import { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';
import { Button } from '../../../../components/Button';

type ExportOptionsProps = {
  selectedListings: string[];
};

enum ExportOption {
  EXPORT_DETAILED = 'EXPORT_DETAILED',
  EXPORT_USPS = 'EXPORT_USPS',
}

const documentNames = new Map([
  [ExportOption.EXPORT_DETAILED, 'Detailed'],
  [ExportOption.EXPORT_USPS, 'USPS'],
  [null, ''],
]);

const currentDate = format(new Date(), 'MM-dd-yyyy');

export const ExportOptions = ({ selectedListings }: ExportOptionsProps) => {
  const [downloadExportOption, setDownloadExportOption] =
    useState<ExportOption | null>(null);
  const [isDownloadExportModalOpen, setIsDownloadExportModalOpen] =
    useState(false);
  const { toastText, addToast } = useToast();
  const { toastText: successExportToastText, addToast: addSuccessExportToast } =
    useToast();
  const { toastText: successOwnerText, addToast: addSuccessOwnerToast } =
    useToast();
  const isListingsEmpty = selectedListings.length === 0;

  const handleDownloadMutationProps = (fileName: string) => ({
    onSuccess: async (res: string) => {
      await downloadFile(res, `${fileName}.csv`);
      addSuccessExportToast('Properties have been successfully exported!');
      setIsDownloadExportModalOpen(false);
    },

    onError: () => addToast(),
  });

  const { mutate: exportDetailed, isPending: isPendingExportDetailed } =
    useMutation({
      mutationFn: () =>
        api.properties.propertiesControllerListingsExportDetailed({
          requestBody: { ids: selectedListings },
        }),
      ...handleDownloadMutationProps(
        `moverlead_detailed_listings_${currentDate}.csv`
      ),
    });

  const { mutate: exportUsps, isPending: isPendingExportUsps } = useMutation({
    mutationFn: () =>
      api.properties.propertiesControllerListingsExportUsps({
        requestBody: { ids: selectedListings },
      }),
    ...handleDownloadMutationProps(
      `moverlead_usps_listings_${currentDate}5.csv`
    ),
  });

  const { mutate: getOwnersInfo, isPending: isPendingGetOwnersInfo } =
    useMutation({
      mutationFn: () =>
        api.properties.propertiesControllerGetHomeowners({
          requestBody: { ids: selectedListings },
        }),
      onSuccess: () => {
        addSuccessOwnerToast(
          'Your home owners information are successfully updated!'
        );
      },
      onError: () => addToast(),
    });

  const isPendingMutation =
    isPendingExportDetailed || isPendingExportUsps || isPendingGetOwnersInfo;
  const isPendingExportMutation =
    isPendingExportDetailed || isPendingExportUsps;

  const handleDialogClose = () => {
    if (isPendingExportMutation) return;

    setIsDownloadExportModalOpen(false);
  };

  const handleExportOptionClick = (exportOption: ExportOption) => {
    setIsDownloadExportModalOpen(true);
    setDownloadExportOption(exportOption);
  };

  const areButtonsDisabled = isPendingMutation || isListingsEmpty;

  return (
    <>
      <div className="mt-4 flex items-center gap-3 bg-white">
        <Button
          color={'success'}
          disabled={areButtonsDisabled}
          onClick={() => handleExportOptionClick(ExportOption.EXPORT_DETAILED)}
        >
          Export Detailed
        </Button>
        <Button
          disabled={areButtonsDisabled}
          onClick={() => handleExportOptionClick(ExportOption.EXPORT_USPS)}
        >
          Export USPS
        </Button>
        <Button disabled={areButtonsDisabled} onClick={() => getOwnersInfo()}>
          Get Owners Info
        </Button>
      </div>
      <Modal
        title={`Export ${documentNames.get(downloadExportOption)}`}
        description={`Are you sure you want to export data for ${
          selectedListings.length
        } ${selectedListings.length === 1 ? 'property' : 'properties'}?`}
        isDialogOpen={isDownloadExportModalOpen}
        onClose={handleDialogClose}
        onConfirmButtonClick={
          downloadExportOption === ExportOption.EXPORT_DETAILED
            ? exportDetailed
            : exportUsps
        }
        icon={<ArrowDownTrayIcon />}
        isConfirmButtonLoading={isPendingExportMutation}
        isConfirmButtonDisabled={isPendingExportMutation}
        isCancelButtonDisabled={isPendingExportMutation}
      />
      {toastText && <Toast text={toastText} />}
      {successExportToastText && (
        <Toast text={successExportToastText} type={'success'} />
      )}
      {successOwnerText && <Toast text={successOwnerText} type={'success'} />}
    </>
  );
};
