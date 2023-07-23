import { ReceiptPercentIcon, HeartIcon, UserIcon, MapPinIcon } from 'react-native-heroicons/solid'

const MyAccountOptions = [
  {
    icon: ReceiptPercentIcon,
    label: 'My Orders',
    redirectionUrl: 'MyOrders'
  },
  {
    icon: HeartIcon,
    label: 'Favourites',
    footerText: 'Manage your favourite food',
    redirectionUrl: ''
  },
  {
    icon: UserIcon,
    label: 'My Details',
    footerText: 'Check your account details',
    redirectionUrl: 'UserDetails'
  },
  {
    icon: MapPinIcon,
    label: 'Saved addresses',
    footerText: 'Add new addresses to receive your orders',
    redirectionUrl: ''
  },
  {
    label: 'FAQs',
    redirectionUrl: ''
  },
]

export default MyAccountOptions
