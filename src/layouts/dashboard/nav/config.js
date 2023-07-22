// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [

  {
    title: 'dashboard',
    path: 'app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'AddUser',
  //   path: 'add-user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'user',
    path: 'user',
    icon: icon('ic_user'),
  },
  
  // {
  //   title: 'Add Borrower/Applicant',
  //   path: 'add-borrower',
  //   icon: icon('ic_user'),
  // },
  
  
  {
    title: 'Applicants',
    path: 'browers',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'AddLoan',
  //   path: 'add-loan',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Loans',
    path: 'Loans',
    icon: icon('ic_user'),
  },
 
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Home',
    path: '/Home',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
