const profileAttributes: { [slug: string]: string } = {
  fullName: "Nama",
  email: "Email",
  currentEducation: "Status Pendidikan",
  institution: "Asal Sekolah/Universitas",
  phoneNumber: "Nomor Telepon",
  birthDate: "Tanggal Lahir",
  address: "Alamat",
};

const SMA = "SMA";
const KULIAH = "Kuliah";

export const currentEducationList = [SMA, KULIAH];

export default profileAttributes;
