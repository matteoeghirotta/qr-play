import QRCode from "qrcode";

const url =
  "https://www.quimmo.it/annunci-immobili/complessi-commerciali-cantu-como-22873?utm_source=PDF+immobile&utm_medium=Offline&utm_campaign=QMM";

const generateQR = async (text) => {
  try {
    console.log(await QRCode.toDataURL(text));
    console.log(await QRCode.toString(text));
    await QRCode.toFile("./a.svg", text, {
      color: {
        dark: "#000", // black dots
        light: "#0000", // transparent background
      },
    });
  } catch (err) {
    console.error(err);
  }
};

generateQR(url);
