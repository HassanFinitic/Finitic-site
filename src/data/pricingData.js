import Enterprise from "../../public/assets/icons/Enterprise";
import Permium from "../../public/assets/icons/Permium";
import Starter from "../../public/assets/icons/Starter";

export const pricingData = [
    {
      icon: <Starter/>,
      title: "Starter",
      features: [
        "Live Clients/Leads: 1—1,000",
        "CRM Users: 5 users",
        "IB Portal: Max 3 levels",
        "PSP Integration: 2 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
    {
      icon: <Permium/>,
      title: "Premium",
      features: [
        "Live Clients/Leads: Unlimited",
        "CRM Users: 25 users",
        "IB Portal: Unlimited levels",
        "PSP Integration: 5 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
    {
      icon: <Enterprise/>,
      title: "Enterprise",
      features: [
        "Live Clients/Leads: 5,000",
        "CRM Users: 10 users",
        "IB Portal: Max 5 levels",
        "PSP Integration: 3 integrations",
        "Copier/PAMM/MAM (MT5)",
      ],
    },
  
  ];