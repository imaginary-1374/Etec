export default function getImagePath(
  folder,
  fileName,
  baseFolder = "All products",
) {
  return `/${baseFolder}/${folder}/${fileName}`;
}
