type Props = {
  date: string;
  content: string;
  css: { background: string };
};
const items: Props[] = [
  {
    date: "5 November 2020",
    content: "Pembukaan Pendaftaran",
    css: { background: "linear-gradient(90deg, #623FA2 0.11%, #4D82C2 100%)" },
  },
  {
    date: "18 Desember 2021",
    content: "Penutupan Pendaftaran",
    css: { background: "linear-gradient(90deg, #587ABB 1.82%, #00B6F1 100%)" },
  },
  {
    date: "23 Desember 2021",
    content: "Batas Pembayaran Biaya Pendaftaran",
    css: { background: "linear-gradient(90deg, #13AAE6 13.33%, #08DFF6 100%)" },
  },
  {
    date: "25 Januari 2021",
    content: "Hari Pertama Babak Penyisihan",
    css: { background: "linear-gradient(90deg, #08DDF5 1.82%, #00FFFF 100%)" },
  },
  {
    date: "1 Februari 2021",
    content: "Hari Terakhir Babak Penyisihan",
    css: { background: "linear-gradient(90deg, #01FCFE 1.82%, #13ABE7 100%)" },
  },
  {
    date: "15 Februari 2021",
    content: "Pengumuman Finalis",
    css: { background: "linear-gradient(90deg, #13AAE6 1.82%, #5080C1 100%)" },
  },
  {
    date: "27-28 Februari 2021",
    content: "Babak Final",
    css: { background: "linear-gradient(90deg, #4886C7 1.82%, #4C6EB9 100%)" },
  },
  {
    date: "28 Februari 2021",
    content: "Awarding Night",
    css: { background: "linear-gradient(90deg, #6472BA 1.82%, #6342A4 100%)" },
  },
];
export default items;
