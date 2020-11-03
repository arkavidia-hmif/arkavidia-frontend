import * as React from "react";
import { useState } from "react";
import FilledButton from "../../../FilledButton";
import Popup from "./Popup";

const ModalProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [currentEducation, setCurrentEducation] = useState("");
  const [institution, setInstitution] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // const handleSubmit = () => {

  // };

  return (
    <div className="my-3">
      <div className="main">
        <FilledButton
          text="Edit Profile"
          padding="0.75rem 3rem"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <div className="container">
                <h1>Edit Profile</h1>
                <form
                  className="row container-fluid"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    // handleSubmit();
                  }}
                >
                  <label className="field col-6 mt-3">
                    <p>Nama</p>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Nama"
                      value={name}
                      onChange={(evt) => setName(evt.target.value)}
                      required
                    />
                  </label>
                  <label className="field col-6 mt-3">
                    <p>Nomor Telepon</p>
                    <input
                      type="text"
                      name="telepon"
                      placeholder="Nomor Telepon"
                      value={phoneNumber}
                      onChange={(evt) => setPhoneNumber(evt.target.value)}
                      required
                    />
                  </label>
                  <label className="field col-6 mt-3">
                    <p>Tanggal Lahir</p>
                    <input
                      type="text"
                      name="ttl"
                      placeholder="Tanggal Lahir"
                      value={birthDate}
                      onChange={(evt) => setBirthDate(evt.target.value)}
                      required
                    />
                  </label>
                  <label className="field col-6 mt-3">
                    <p>Alamat</p>
                    <input
                      type="text"
                      name="alamat"
                      placeholder="Alamat"
                      value={address}
                      onChange={(evt) => setAddress(evt.target.value)}
                      required
                    />
                  </label>
                  <label className="field col-6 mt-3">
                    <p>Status</p>
                    <input
                      type="text"
                      name="status"
                      placeholder="Status"
                      value={currentEducation}
                      onChange={(evt) => setCurrentEducation(evt.target.value)}
                      required
                    />
                  </label>
                  <label className="field col-6 mt-3">
                    <p>Universitas</p>
                    <input
                      type="text"
                      name="universitas"
                      placeholder="Universitas"
                      value={institution}
                      onChange={(evt) => setInstitution(evt.target.value)}
                      required
                    />
                  </label>
                  <div className="field col-12 mt-3 mb-3">
                    <FilledButton text="EDIT" padding="0.75rem 4rem" />
                  </div>
                </form>
              </div>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
      <style jsx>{`
        h1 {
          color: #623fa2;
        }

        label {
          display: flex;
          flex-direction: column;
          font-style: normal;
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1.1rem;
          color: #000000;
          margin-top: 0.8rem;
        }

        input {
          width: 100%;
          border: none;
          padding: 0.5rem 0 0.5rem 0;
          border-bottom: 0.15rem solid #000000;
          box-sizing: border-box;
          background: none;
          margin: 0.5rem 0 1rem 0;
        }

        input:focus {
          outline: none;
        }

        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default ModalProfile;
