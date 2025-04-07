import { FileType } from '../enums/fileType';

export const downloadFile = (
  data: string | BlobPart,
  filename: string,
  type: FileType = FileType.CSV
): Promise<void> => {
  return new Promise((resolve) => {
    const blob = new Blob([data], { type });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      resolve();
    }, 100);
  });
};
