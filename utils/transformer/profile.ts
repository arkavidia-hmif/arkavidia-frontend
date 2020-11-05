import { ProfileData, UserData } from "../../interfaces/auth";
import { isValidDate, isValidString, isEmpty, isValidPhone } from "../validator";

export const checkTruth = async (
  fullName: string,
  currentEducation: string | null,
  institution: string | null,
  phoneNumber: string | null,
  birthDate: string | null,
  address: string | null,
  profile: UserData
): Promise<ProfileData> => {
  const data: ProfileData = {
    fullName: "",
    currentEducation: "",
    institution: "",
    phoneNumber: "",
    birthDate: "",
    address: "",
  };
  if (!profile) {
    throw new Error("Masalah koneksi");
  }
  if (isEmpty(fullName)) {
    if (isValidString(profile?.fullName, 75)) data.fullName = profile?.fullName;
    else throw new Error("Nama tidak valid");
  } else if (isValidString(fullName, 75)) {
    data.fullName = fullName;
  } else throw new Error("Nama tidak valid");

  if (isEmpty(institution)) {
    if (isValidString(profile?.institution, 75)) {
      data.institution = profile?.institution;
    } else throw new Error("Asal sekolah/universitas tidak valid");
  } else if (isValidString(institution, 75)) {
    data.institution = institution;
  } else throw new Error("Asal sekolah/universitas tidak valid");

  if (isEmpty(currentEducation)) {
    if (isValidString(profile?.currentEducation, 30)) {
      data.currentEducation = profile?.currentEducation;
    } else throw new Error("Status pendidikan tidak valid");
  } else if (isValidString(currentEducation, 30)) {
    data.currentEducation = currentEducation;
  } else throw new Error("Status pendidikan tidak valid");

  if (isEmpty(phoneNumber)) {
    if (isValidPhone(profile?.phoneNumber)) {
      data.phoneNumber = profile?.phoneNumber;
    } else throw new Error("Nomor telepon tidak valid");
  } else if (isValidPhone(phoneNumber)) {
    data.phoneNumber = phoneNumber;
  } else throw new Error("Nomor telepon tidak valid");

  if (isEmpty(address)) {
    if (isValidString(profile?.address, 75)) data.address = profile?.address;
    else throw new Error("Alamat tidak valid");
  } else if (isValidString(address, 75)) {
    data.address = address;
  } else throw new Error("Alamat tidak valid");
  if (isEmpty(birthDate)) {
    if (isValidDate(profile?.birthDate)) data.birthDate = profile?.birthDate;
    else throw new Error("Tanggal lahir tidak valid");
  } else if (isValidDate(birthDate)) {
    data.birthDate = birthDate;
  } else throw new Error("Tanggal lahir tidak valid");

  return data;
};
