import {
  ChevronDown,
  Home,
  Briefcase,
  Settings,
  User,
  Code,
  Phone,
  Laptop,
  Smartphone,
  Brain,
  Info,
  Users,
  Building2 as Hostel,
  GraduationCap as Scholarship,
  Users as Clubs,
  ShieldAlert as Notice,
  CreditCard as Fee,
  Landmark as Bank,
  Library,
  HeartPulse as Hospital,
  Dumbbell as Sports,
  ShieldCheck as Women,
  BadgeCheck as SCST,
  Activity as Sac,
  Rocket as Fest,
  Handshake as NSS,
  Lightbulb as Ecell,
  Globe as Bharat,
  Network as Chankaya,
  Monitor as ComputerCentre,
  Microscope as Labs,
  Train as EMU,
  Atom as ESU,
  UserCheck,
  UserCircle,
  Shield,
  FileText,
  Calendar,
  Landmark,
  BookOpen,
  Building,
  Scroll,
  FilePlus,
  Newspaper,
  Atom,
  FlaskConical,
  HardHat,
  Zap,
  Radio,
  Globe,
  Sigma,
  Cpu,
  Network,
  Server,
  CalendarDays,
  ClipboardList,
  DollarSign,
  File,
  Bell,
  Award,
  PackageSearch,
  ShieldCheck,
  BarChart3,
  Gavel,
  ListChecks,
  BarChart,
} from "lucide-react";

const getNavItems = (dept) => {
  return [
    { name: "Home", url: "/", icon: <Home size={20} /> },
    {
      name: "About",
      icon: <Landmark size={18} />,
      url: `#`,

      dropdown: [
        {
          name: "About Your Deptartment",
          url: `${dept}/About`,
          icon: <Scroll size={18} />,
        },
        {
          name: "Vision",
          url: `${dept}/Vision`,
          icon: <FileText size={18} />,
        },
        {
          name: "Mission",
          url: `${dept}/Mission`,
          icon: <Building size={18} />,
        },
        {
          name: "PO & PEO",
          url: `${dept}/PO`,
          icon: <BookOpen size={18} />,
        },
        {
          name: "UG & PG",
          url: `${dept}/UGPG`,
          icon: <BookOpen size={18} />,
        },
      ],
    },
    {
      name: "People",
      icon: <Landmark size={18} />,
      url: `#`,

      dropdown: [
        {
          name: "Faculty",
          url: `${dept}/Faculty`,
          icon: <Scroll size={18} />,
        },
        {
          name: "Staff",
          url: `${dept}/Staff`,
          icon: <FileText size={18} />,
        },
        {
          name: "Research Students",
          url: `${dept}/ResearchStudents`,
          icon: <Building size={18} />,
        },
      ],
    },
    {
      name: "Research",
      icon: <Landmark size={18} />,
      url: "#",

      dropdown: [
        {
          name: "Journel",
          url: `${dept}/Journel`,
          icon: <Scroll size={18} />,
        },
        {
          name: "Conference",
          url: `${dept}/Conference`,
          icon: <FileText size={18} />,
        },
        {
          name: "Patents",
          url: `${dept}/Patents`,
          icon: <Building size={18} />,
        },
        {
          name: "Projects",
          url: `${dept}/Projects`,
          icon: <Building size={18} />,
        },
        {
          name: "Research Group",
          url: `${dept}/ResearchGroup`,
          icon: <Building size={18} />,
        },
      ],
    },
    {
      name: "Academics",
      icon: <Landmark size={18} />,
      url: "#",

      dropdown: [
        {
          name: "B.Tech",
          url: `${dept}/B.Tech`,
          icon: <Scroll size={18} />,
        },
        {
          name: "M.Tech",
          url: `${dept}/M.Tech`,
          icon: <FileText size={18} />,
        },
        {
          name: "Dual Degree",
          url: `${dept}/DualDegree`,
          icon: <Building size={18} />,
        },
        {
          name: "Ph.D.",
          url: `${dept}/Ph.D.`,
          icon: <Building size={18} />,
        },
      ],
    },
    {
      name: "All Departments",
      icon: <Landmark size={18} />,
      url: "#",

      dropdown: [
        {
          name: "Applied Physics and Materials Engineering",
          url: "/Department/Phy",
          icon: <Scroll size={18} />,
        },
        {
          name: "Architecture & Planning",
          url: "/Department/Archi",
          icon: <FileText size={18} />,
        },
        {
          name: "Chemical Science and Technology",
          url: "/Department/Chem",
          icon: <Building size={18} />,
        },
        {
          name: "Civil Engineering",
          url: "/Department/CE",
          icon: <Building size={18} />,
        },
        {
          name: "Computer Science And Engineering",
          url: "/Department/CSE",
          icon: <Building size={18} />,
        },
        {
          name: "Electrical Engineering",
          url: "/Department/EE",
          icon: <Building size={18} />,
        },
        {
          name: "Electronics And Communication Engineering",
          url: "/Department/ECE",
          icon: <Building size={18} />,
        },
        {
          name: "Humanities And Social Science",
          url: "/Department/Humanities",
          icon: <Building size={18} />,
        },
        {
          name: "Mathematics And Communication Technology",
          url: "/Department/Math",
          icon: <Building size={18} />,
        },
        {
          name: "Mechanical Engineering",
          url: "/Department/ME",
          icon: <Building size={18} />,
        },
        {
          name: "Mechatronics And Automation Engineering",
          url: "/Department/Mechatronics",
          icon: <Building size={18} />,
        },
      ],
    },
  ];
};


export default getNavItems;