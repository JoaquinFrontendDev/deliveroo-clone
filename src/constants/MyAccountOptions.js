import { ReceiptPercentIcon, HeartIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'

const MyAccountOptions = [
  {
    icon: ReceiptPercentIcon,
    label: 'My Orders',
    footerText: 'Take a look to what you have ordered',
    redirectionUrl: 'MyOrders'
  },
  {
    icon: HeartIcon,
    label: 'Favorites',
    footerText: 'Manage your favorite restaurants',
    redirectionUrl: 'MyFavorites'
  },
  {
    icon: QuestionMarkCircleIcon,
    label: 'FAQs',
    redirectionUrl: 'FAQs'
  },
]

export default MyAccountOptions
