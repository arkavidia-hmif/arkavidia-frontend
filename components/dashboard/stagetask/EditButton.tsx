import FilledButton from "components/FilledButton";
import { Theme } from "styles/theme";

interface Props {
  editable: boolean;
  isEdit: boolean;
  loading: boolean;
  handleSubmit: () => void;
  setIsEdit: (newValue: boolean) => void;
}

const EditButton: React.FC<Props> = ({
  editable,
  isEdit,
  loading,
  handleSubmit,
  setIsEdit
}) => {
  if (!editable) return null;
  if (isEdit) {
    return (
      <FilledButton
        loading={loading}
        text="Simpan"
        color={Theme.buttonColors.purpleButton}
        padding="0.5rem 2rem"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    );
  } else {
    return (
      <FilledButton
        text="Ubah"
        color={Theme.buttonColors.pinkButton}
        padding="0.5rem 2rem"
        onClick={() => setIsEdit(true)}
      />
    );
  }
};

export default EditButton;