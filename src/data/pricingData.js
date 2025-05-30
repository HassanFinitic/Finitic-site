import Enterprise from "../../public/assets/icons/Enterprise";
import Permium from "../../public/assets/icons/Permium";
import Starter from "../../public/assets/icons/Starter";

export const pricingData = [
    {
      icon: <Starter/>,
      title: "Starter",
      features: [
        "Live Clients/Leads: 1—2,000",
        "CRM Users: 5 users",
        "IB Portal: Max 5 levels",
        "PSP Integration: 2 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
    {
      icon: <Permium/>,
      title: "Premium",
      features: [
        "Live Clients/Leads: Unlimited",
        "CRM Users: Unlimited",
        "IB Portal: Unlimited levels",
        "PSP Integration: 5 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
    {
      icon: <Enterprise/>,
      title: "Enterprise",
      features: [
        "Live Clients/Leads: 3,000",
        "CRM Users: 15 users",
        "IB Portal: Max 10 levels",
        "PSP Integration: 3 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
  
  ];