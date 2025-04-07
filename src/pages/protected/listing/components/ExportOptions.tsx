import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../api/api';
import { useToast } from '../../../../hooks/useToast';
import { Toast } from '../../../../components/Toast';
import { downloadFile } from '../../../../helpers/downloadFile';
import { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

type ExportOptionsProps = {
  selectedListings: string[];
};

enum ExportOption {
  EXPORT_DETAILED = 'EXPORT_DETAILED',
  EXPORT_USPS = 'EXPORT_USPS',
}

export const ExportOptions = ({ selectedListings }: ExportOptionsProps) => {
  const [downloadExportOption, setDownloadExportOption] =
    useState<ExportOption | null>(null);
  const { toastText, addToast } = useToast();
  const { toastText: successExportToastText, addToast: addSuccessExportToast } =
    useToast();
  const { toastText: successOwnerText, addToast: addSuccessOwnerToast } =
    useToast();
  const isListingsEmpty = selectedListings.length === 0;

  const handleDownloadMutationProps = (fileName: string) => ({
    onSuccess: async (res: string) => {
      await downloadFile(res, `${fileName}.csv`);
      setDownloadExportOption(null);
      addSuccessExportToast('Properties have been successfully exported!');
    },

    onError: () => addToast(),
  });

  const { mutate: exportDetailed, isPending: isPendingExportDetailed } =
    useMutation({
      mutationFn: () =>
        api.properties.propertiesControllerListingsExportDetailed({
          requestBody: { ids: selectedListings },
        }),
      ...handleDownloadMutationProps('detailed-listings'),
    });

  const { mutate: exportUsps, isPending: isPendingExportUsps } = useMutation({
    mutationFn: () =>
      api.properties.propertiesControllerListingsExportUsps({
        requestBody: { ids: selectedListings },
      }),
    ...handleDownloadMutationProps('usps-listings'),
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

    setDownloadExportOption(null);
  };

  return (
    <>
      <div className="mt-4 flex items-center gap-3 bg-white">
        <button
          type="button"
          className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2] disabled:border-gray-300 disabled:bg-gray-100"
          disabled={isPendingMutation || isListingsEmpty}
          onClick={() => setDownloadExportOption(ExportOption.EXPORT_DETAILED)}
        >
          Export Detailed
        </button>
        <button
          type="button"
          className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2] disabled:border-gray-300 disabled:bg-gray-100"
          disabled={isPendingMutation || isListingsEmpty}
          onClick={() => setDownloadExportOption(ExportOption.EXPORT_USPS)}
        >
          Export USPS
        </button>
        <button
          type="button"
          className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2] disabled:border-gray-300 disabled:bg-gray-100"
          disabled={isPendingMutation || isListingsEmpty}
          onClick={() => getOwnersInfo()}
        >
          Get Owners Info
        </button>
      </div>
      <Modal
        title={`Export ${
          downloadExportOption === ExportOption.EXPORT_DETAILED
            ? 'Detailed'
            : 'USPS'
        }`}
        description={`Are you sure you want to export data for ${
          selectedListings.length
        } ${selectedListings.length === 1 ? 'property' : 'properties'}?`}
        isDialogOpen={!!downloadExportOption}
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
