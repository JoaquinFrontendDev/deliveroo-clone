import { Keyboard } from "react-native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useUpdateUser } from "./useUpdateUser";
import { showToast } from "../components/Toaster/showToast";

// useUpdateProfile.js
export const useUpdateProfile = (initialValues) => {
  const auth = FIREBASE_AUTH;
  const { updateUser } = useUpdateUser()

  const firebaseFieldsMap = {
    firstName: "displayName",
    lastName: "displayName",
    userEmail: "email",
  };

  const handleSubmit = async (values) => {
    Keyboard.dismiss()
    let updateObject = {};
    let displayNameChanged = false;

    for (let field in initialValues) {
      if (initialValues[field] !== values[field]) {
        const firebaseField = firebaseFieldsMap[field] || field;
        if (firebaseField === "displayName") {
          displayNameChanged = true;
        } else {
          updateObject[firebaseField] = values[field];
        }
      }
    }

    if (displayNameChanged) {
      updateObject["displayName"] = `${ values.firstName } ${ values.lastName }`;
    }

    await updateProfile(auth.currentUser, updateObject)
      .then(() => {
        showToast('success', 'userUpload')
      })
      .catch((error) => {
        showToast('error', 'userUpload')
      });

    updateUser();
  };

  return handleSubmit;
};
