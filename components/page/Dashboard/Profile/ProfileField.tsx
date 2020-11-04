import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { editProfile, getProfile, PROFILE_URL } from "../../../../api/profile";
import { ApiContext } from "../../../../utils/context/api";
import useFormInput from "../../../../utils/hooks/useFormInput";
import profileAttributes, {
  currentEducationList,
} from "../../../../utils/constants/profile-attributes";
import { checkTruth } from "../../../../utils/transformer/profile";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import FilledButton from "../../../FilledButton";
import { Theme } from "../../../../styles/theme";
import Success from "../../../Success";
import { UserData } from "../../../../interfaces/auth";
import InputField from "./InputField";

const ProfileField: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const [isEdit, setIsEdit] = useState(false);
  const fullName = useFormInput("");
  const email = useFormInput("");
  const phoneNumber = useFormInput("");
  const birthDate = useFormInput("");
  const address = useFormInput("");
  const currentEducation = useFormInput("");
  const institution = useFormInput("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    isEdit ? setSuccess(false) : setError("");
  }, [setError, setSuccess, isEdit]);

  const { data: profile, error: errorProfile, mutate } = useSWR(
    PROFILE_URL,
    () => getProfile(apiContext.axios)
  );

  if (errorProfile) return <Alert error="Masalah koneksi" />;
  if (!profile) return <Spinner height="200px" />;

  const handleSubmit = async () => {
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
        setSuccess(true);
        setIsEdit(false);
        setError(null);
      }
    } catch (e) {
      setSuccess(false);
      setError(e.message);
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
                ) : (
                  <InputField
                    shouldRef={index === 0}
                    type={data.key === "birthDate" ? "date" : "text"}
                    value={
                      String(data.state.value) !== "" ? data.state.value : value
                    }
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
          ) : (
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

export default ProfileField;

// import { useContext, useState } from "react";
// import useSWR from "swr";
// import { editProfile, getProfile, PROFILE_URL } from "../../../../api/profile";
// import { ApiContext } from "../../../../utils/context/api";
// import useFormInput from "../../../../utils/hooks/useFormInput";
// import profileAttributes from "../../../../utils/constants/profile-attributes";
// import Alert from "../../../Alert";
// import Spinner from "../../../Spinner";
// import FilledButton from "../../../FilledButton";
// import { Theme } from "../../../../styles/theme";
// import InputField from "./InputField";
// // import { getLabelByProfileAttribute } from '../../../../utils/transformer/profile'

// const ProfileField: React.FC = () => {
//   const apiContext = useContext(ApiContext);

//   const [isEdit, setIsEdit] = useState(false);
//   const fullName = useFormInput("");
//   const email = useFormInput("");
//   const phoneNumber = useFormInput("");
//   const birthDate = useFormInput("");
//   const address = useFormInput("");
//   const currentEducation = useFormInput("");
//   const institution = useFormInput("");

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const { data: profile, error: errorProfile, mutate } = useSWR(
//     PROFILE_URL,
//     () => getProfile(apiContext.axios)
//   );

//   if (errorProfile) return <Alert error="Masalah koneksi" />;
//   if (!profile) return <Spinner height="200px" />;

//   const handleSubmit = async () => {
//     try {
//       const res = await editProfile(
//         apiContext.axios,
//         fullName.value,
//         currentEducation.value,
//         institution.value,
//         phoneNumber.value,
//         birthDate.value,
//         address.value
//       );
//       console.log(res);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   console.log(profile);

//   return (
//     <div className="mb-3">
//       <div className="row">
//         {
//           <input
//             value={profile?.fullName}
//             onChange={async (e) =>
//               mutate({ ...profile, fullName: e.target.value })
//             }
//           />
//         }
//         {/* {Object.entries(profile)?.map(([key, value], index) => {
//           const label = profileAttributes[key];

//           return (
//             <div key={label} className="field col-md-6 col-sm-12 mt-3">
//               <div className="title">
//                 <h1>{label}</h1>
//               </div>
//               <div className="content">
//                 {!(isEdit && key !== "email") ? (
//                   <div className="value">{value ?? "-"}</div>
//                 ) : (
//                   <InputField
//                     shouldRef={index === 0}
//                     placeholder=""
//                     type={label === "birthDate" ? "date" : "text"}
//                     value={value}
//                     // setValue={}
//                   />
//                 )}
//               </div>
//             </div>
//           );
//         })} */}
//       </div>
//       <div className="my-3">
//         {isEdit ? (
//           <div className="row">
//             <div className="col-md-6 col-sm-12">
//               <FilledButton
//                 color={Theme.buttonColors.purpleButton}
//                 text="Submit"
//                 padding="0.75rem 3rem"
//                 onClick={handleSubmit}
//               />
//             </div>
//             <div className="col-md-6 col-sm-12 button-below">
//               <FilledButton
//                 color={Theme.buttonColors.blueButton}
//                 text="Cancel"
//                 padding="0.75em 1.5em"
//                 onClick={() => setIsEdit(false)}
//               />
//             </div>
//           </div>
//         ) : (
//           <FilledButton
//             text="Edit Profile"
//             color={Theme.buttonColors.purpleButton}
//             padding="0.75rem 3rem"
//             onClick={() => setIsEdit(true)}
//           />
//         )}
//       </div>

//       <style jsx>{`
//         .title h1 {
//           font-family: Roboto;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: #646464;
//         }
//         .value {
//           width: 100%;
//           border: none;
//           padding: 0.5rem 0 0.5rem 0;
//           border-bottom: 0.15rem solid transparent;
//           box-sizing: border-box;
//           background: none;
//           margin: 1rem 0;
//           font-size: 1.2rem;
//           font-style: normal;
//         }
//         .content {
//           font-family: Roboto;
//           font-size: 1.125rem;

//           color: #646464;
//         }

//         #update {
//           display: block;
//         }
//         form {
//           display: block;
//         }
//         @media only screen and (max-width: 767px) {
//           .button-below {
//             margin-top: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProfileField;
