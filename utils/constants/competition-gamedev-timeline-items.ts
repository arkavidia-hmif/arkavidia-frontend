type Props = {
    date: string;
    content: string;
    css: { background: string }
  }
const items: Props[] = [
  {
    date: '5 November 2020',
    content: 'Pembukaan Pendaftaran',
    css: {background: 'linear-gradient(90deg, #623FA2 0.11%, #4D82C2 100%)'}
  },
  {
    date: '18 Desember 2021',
    content: 'Penutupan Pendaftaran',
    css: {background: 'linear-gradient(90deg, #587ABB 1.82%, #00B6F1 100%)'}
  },
  {
    date: '23 Desember 2021',
    content: 'Batas Pembayaran Biaya Pendaftaran',
    css: {background: 'linear-gradient(90deg, #13AAE6 13.33%, #08DFF6 100%)'}
  },
  {
    date: '13-14 Februari 2021',
    content: 'Pelaksanaan Lomba',
    css: {background: 'linear-gradient(90deg, #08DDF5 1.82%, #00FFFF 100%)'}
  },
  {
    date: '28 Februari 2021',
    content: 'Awarding Night',
    css: {background: 'linear-gradient(90deg, #6472BA 1.82%, #6342A4 100%)'}
  },
];
export default items;