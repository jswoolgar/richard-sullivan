// TODO: Temporary stock photos from Unsplash (free to use, no attribution required).
// Replace with photos of Richard's own work as they come in.

export const unsplash = (id: string, w = 900, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

export const stock = {
  tools: '1606676539940-12768ce0e762',
  exteriorPainting: '1574359411659-15573a27fd0c',
  router: '1606904825846-647eb07f5be2',
  victorianPorch: '1787094673073-2f2c9a413469',
  historicHouse: '1789683386460-9e677a5cbcf1',
  oldBrick: '1460602692976-8eab38c11f9d',
  fence: '1769831190663-95fe8454d8c9',
  interiorPainting: '1688372199140-cade7ae820fe',
  clutteredGarage: '1635108198854-26645ffe6714',
  kitchenRemodel: '1618832515490-e181c4794a45',
};
