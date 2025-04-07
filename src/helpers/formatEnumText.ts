export const formatEnumText = (text: string) => {
  const formattedText = text.replace(/_/g, ' ').toLowerCase();

  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
};
