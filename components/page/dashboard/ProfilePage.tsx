import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { editProfile, getProfile, PROFILE_URL } from "api/profile";
import { ApiContext } from "utils/context/api";
import useFormInput from "utils/hooks/useFormInput";
import useStringFormInput from "utils/hooks/useStringFormInput";
import profileAttributes, {
  currentEducationList,
} from "utils/constants/profile-attributes";
import { checkTruth } from "utils/transformer/profile";
import Spinner from "components/Spinner";
import FilledButton from "components/FilledButton";
import Alert from "components/Alert";
import Success from "components/Success";
import { UserData } from "interfaces/auth";
import { AuthContext } from "utils/context/auth";
import InputField from "components/dashboard/profile/InputField";
import { Theme } from "styles/theme";

const ProfilePage: React.FC = () => {
  const apiContext = useContext(ApiContext);
  const { auth, setAuth } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const fullName = useStringFormInput("");
  const email = useFormInput("");
  const phoneNumber = useFormInput("");
  const birthDate = useFormInput("");
  const address = useFormInput("");
  const currentEducation = useFormInput(currentEducationList[0]);
  const institution = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: profile, error: errorProfile, mutate } = useSWR(
    PROFILE_URL,
    () => getProfile(apiContext.axios)
  );

  useEffect(() => {
    if (profile !== undefined) {
      if (profile.fullName && profile.fullName !== "") {
        fullName.setValue(profile.fullName);
      }
      if (profile.email && profile.email !== "") {
        email.setValue(profile.email);
      }
      if (profile.phoneNumber && profile.phoneNumber !== "") {
        phoneNumber.setValue(profile.phoneNumber || "");
      }
      if (profile.birthDate && profile.birthDate !== "") {
        birthDate.setValue(profile.birthDate || "");
      }
      if (profile.address && profile.address !== "") {
        address.setValue(profile.address || "");
      }
      if (profile.currentEducation && profile.currentEducation !== "") {
        currentEducation.setValue(profile.currentEducation || "");
      }
      if (profile.institution && profile.institution !== "") {
        institution.setValue(profile.institution);
      }
    }
  }, [
    profile,
    fullName.setValue,
    email.setValue,
    phoneNumber.setValue,
    birthDate.setValue,
    address.setValue,
    currentEducation.setValue,
    institution.setValue,
  ]);

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile) return <Spinner height="200px" />;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const truth = await checkTruth(
        fullName.value,
        currentEducation.value,
        institution.value,
        phoneNumber.value,
        birthDate.value,
        address.value,
        profile
      );
      const res = await editProfile(apiContext.axios, truth);
      mutate(res);
      if (res) {
        if (auth) {
          setAuth({ token: auth?.token, exp: auth?.exp, user: res });
        }
        setSuccess(true);
        setIsEdit(false);
        setError(null);
      }
    } catch (e) {
      setSuccess(false);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-3">
      <div className="row">
        {[
          { state: fullName, key: "fullName" },
          { state: email, key: "email" },
          { state: phoneNumber, key: "phoneNumber" },
          { state: birthDate, key: "birthDate" },
          { state: address, key: "address" },
          {
            state: currentEducation,
            key: "currentEducation",
            choices: currentEducationList,
          },
          { state: institution, key: "institution" },
        ].map((data, index) => {
          const label = profileAttributes[data.key];
          const value = profile[data.key as keyof UserData] || "";
          return (
            <div key={label} className="field col-md-6 col-sm-12 mt-3">
              <div className="title">{label}</div>
              <div className="content">
                {!(isEdit && data.key !== "email") ? (
                  <div className="value">{value ?? "-"}</div>
                )
                  : (
                    <InputField
                      shouldRef={index === 0}
                      type={data.key === "birthDate" ? "date" : "text"}
                      value={String(data.state.value)}
                      choices={data.choices ?? []}
                      setValue={data.state.setValue}
                    />
                  )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-3">
        {error && isEdit && <Alert error={error} />}
        {success && !isEdit && <Success message="Successfully update" />}
        <div className="my-3 mt-5">
          {isEdit ? (
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <FilledButton
                  color={Theme.buttonColors.purpleButton}
                  loading={loading}
                  text="Submit"
                  padding="0.75rem 3rem"
                  onClick={handleSubmit}
                />
              </div>
              <div className="col-md-6 col-sm-12 button-below">
                <FilledButton
                  color={Theme.buttonColors.blueButton}
                  text="Cancel"
                  padding="0.75em 1.5em"
                  onClick={() => setIsEdit(false)}
                />
              </div>
            </div>
          )
            : (
              <FilledButton
                text="Edit Profile"
                color={Theme.buttonColors.purpleButton}
                padding="0.75rem 3rem"
                onClick={() => setIsEdit(true)}
              />
            )}
        </div>
      </div>

      <style jsx>{`
        .title {
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;
          color: #646464;
        }
        .value {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid transparent;
          box-sizing: border-box;
          background: none;
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
          font-style: normal;
          word-wrap: break-word;
        }
        .content {
          font-family: Roboto;
          font-size: 1.125rem;
          color: #646464;
        }

        #update {
          display: block;
        }
        form {
          display: block;
        }
        @media only screen and (max-width: 767px) {
          .button-below {
            margin-top: 1rem;
          }
          .value {
            margin-bottom: 0.5rem;
            font-size: 1rem;
          }
          .title {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
