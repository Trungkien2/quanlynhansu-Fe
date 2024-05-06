import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// Employee
const EmployeeList = React.lazy(() => import('./views/pages/employee/EmployeeList'))
const CrudE = React.lazy(() => import('./views/pages/employee/CrudEmployee'))

// Salary
const SalaryList = React.lazy(() => import('./views/pages/salary/SalaryList'))
const CRUDSalary = React.lazy(() => import('./views/pages/salary/CrudSalary'))
const SalaryDetail = React.lazy(() => import('./views/pages/salary/salaryDetail'))

// department
const DepartmentList = React.lazy(() => import('./views/pages/department/DepartmentList'))
const DepartmenEmployeetList = React.lazy(
  () => import('./views/pages/department/DeparmentEmployeeList'),
)
const CrudD = React.lazy(() => import('./views/pages/department/CrudDepartment'))

// time keeping
const TimeKeepingUser = React.lazy(() => import('./views/pages/timeKeeping/TimeKeepingUser'))
const TimeKeepingAdmin = React.lazy(() => import('./views/pages/timeKeeping/TImeKeepingAdmin'))

// news
const newist = React.lazy(() => import('./views/pages/news/NewList'))
const CrudN = React.lazy(() => import('./views/pages/news/CrudNew'))
// league
const LeagueList = React.lazy(() => import('./views/pages/leauge/NewList'))
const LeagueTeamList = React.lazy(() => import('./views/pages/leauge/LeaugeTeamList'))
const CrudL = React.lazy(() => import('./views/pages/leauge/CrudNew'))

// team
const TeamList = React.lazy(() => import('./views/pages/team/NewList'))
const Crudteam = React.lazy(() => import('./views/pages/team/CrudNew'))

// football match
const FootballMatchList = React.lazy(() => import('./views/pages/footbal_match/NewList'))
const CrudFootballMatch = React.lazy(() => import('./views/pages/footbal_match/CrudNew'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/employee', name: 'EmployeeList', element: EmployeeList },
  { path: '/employee/create', name: 'EmployeeList', element: CrudE },
  { path: '/employee/:id', name: 'EmployeeList', element: CrudE },

  { path: '/salary', name: 'SalaryList', element: SalaryList },
  { path: '/salary/create', name: 'Salary', element: CRUDSalary },
  { path: '/salary/:id', name: 'Salary', element: CRUDSalary },
  { path: '/salary/user/:id', name: 'salary detail', element: SalaryDetail },
  { path: '/department', name: 'DepartmentList', element: DepartmentList },
  {
    path: '/department/list_employee/:department_id',
    name: 'DepartmentList',
    element: DepartmenEmployeetList,
  },
  { path: '/department/create', name: 'departmentList', element: CrudD },
  { path: '/department/:id', name: 'departmentList', element: CrudD },

  { path: '/timeKeeping_user', name: 'timeKeeping user', element: TimeKeepingUser },
  { path: '/timeKeeping_admin', name: 'timeKeeping admin', element: TimeKeepingAdmin },

  { path: '/new', name: 'newList', element: newist },
  { path: '/new/create', name: 'newList', element: CrudN },
  { path: '/new/:id', name: 'newList', element: CrudN },

  { path: '/league', name: 'leagueList', element: LeagueList },
  { path: '/league/team/:id', name: 'leagueList', element: LeagueTeamList },
  { path: '/league/create', name: 'leagueList', element: CrudL },
  { path: '/league/:id', name: 'leagueList', element: CrudL },

  { path: '/team', name: 'teamList', element: TeamList },
  { path: '/team/create', name: 'teamList', element: Crudteam },
  { path: '/team/:id', name: 'teamList', element: Crudteam },

  { path: '/fooball_match', name: 'teamList', element: FootballMatchList },
  { path: '/fooball_match/create', name: 'teamList', element: CrudFootballMatch },
  { path: '/fooball_match/:id', name: 'teamList', element: CrudFootballMatch },
]

export default routes
