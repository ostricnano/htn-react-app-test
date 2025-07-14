import StandardButton from "@components/common/buttons/stantad-button";
import InputComponent from "@components/inputs/input-component";
import styles from "./profile-account-form.module.css";

const ProfileAccountForm = () => {
  return (
<form className={styles.formGrid}>
  {/* Fila 1: 2 columnas iguales */}
  <div className={styles.twoColumns}>
    <InputComponent label="First name" type="text" />
    <InputComponent label="Last name" type="text" />
  </div>

  {/* Fila 2: 3 columnas personalizada */}
  <div className={styles.customThreeColumns}>
    <InputComponent label="Email" type="text" />
    <InputComponent label="Password" type="text" />
    <StandardButton type="primary" label="Change" />
  </div>

  {/* Fila 3: 2 columnas iguales */}
  <div className={styles.twoColumns}>
    <InputComponent label="Address line 1" type="text" />
    <InputComponent label="City" type="text" />
  </div>

  {/* Fila 4: 3 columnas iguales */}
  <div className={styles.threeColumns}>
    <InputComponent label="Country" type="text" />
    <InputComponent label="Province/State" type="text" />
    <InputComponent label="Postal/ZIP code" type="text" />
  </div>
  <div className={styles.actionContainer}>
    <StandardButton type="secondary" label="Cancel" />
    <StandardButton type="secondary" label="Save changes" fill="fill" />
  </div>
</form>

  );
};

export default ProfileAccountForm;
