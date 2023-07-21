import Toast from 'react-native-toast-message';
import { messages } from './toastData';

export function showToast (type, variant) {
  if (messages[type] && messages[type][variant]) {
    Toast.show({
      type: type,
      text1: messages[type][variant],
      position: 'top',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 50,
    });
  }
}
