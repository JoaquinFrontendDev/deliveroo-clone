import { ReceiptPercentIcon, HeartIcon, UserIcon } from 'react-native-heroicons/solid'

const MyAccountOptions = [
  {
    icon: ReceiptPercentIcon,
    label: 'My Orders',
    redirectionUrl: 'MyOrders'
  },
  {
    icon: HeartIcon,
    label: 'Favorites',
    footerText: 'Manage your favorite restaurants',
    redirectionUrl: 'MyFavorites'
  },
  {
    icon: UserIcon,
    label: 'My Details',
    footerText: 'Check your account details',
    redirectionUrl: 'UserDetails'
  },
  {
    label: 'FAQs',
    redirectionUrl: 'FAQs'
  },
]

export default MyAccountOptions
