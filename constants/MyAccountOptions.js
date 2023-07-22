import { ReceiptPercentIcon, HeartIcon, UserIcon, MapPinIcon } from 'react-native-heroicons/solid'

const MyAccountOptions = [
  {
    icon: ReceiptPercentIcon,
    label: 'My Orders',
  },
  {
    icon: HeartIcon,
    label: 'Favourites',
    footerText: 'Manage your favourite food',
  },
  {
    icon: UserIcon,
    label: 'My Details',
    footerText: 'Check your account details',
  },
  {
    icon: MapPinIcon,
    label: 'Saved addresses',
    footerText: 'Add new addresses to receive your orders',
  },
  {
    label: 'FAQs',
  },
]

export default MyAccountOptions
