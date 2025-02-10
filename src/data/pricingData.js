import Enterprise from "../../public/assets/icons/Enterprise";
import Permium from "../../public/assets/icons/Permium";
import Starter from "../../public/assets/icons/Starter";

export const pricingData = [
    {
      icon: <Starter/>,
      title: "Starter",
      features: [
        "Live Clients/Leads: 1—1,000",
        "CRM Users: 5 users (+$20 per user)",
        "IB Portal: Max 3 levels (+$50 per level)",
        "PSP Integration: 2 integrations (+$500 setup)",
        "Copier/PAMM/MAM (MT5): $1 per million (Min. $1,000/month)",
      ],
    },
    {
      icon: <Permium/>,
      title: "Premium",
      features: [
        "Live Clients/Leads: Unlimited",
        "CRM Users: 25 users (+$20 per user)",
        "IB Portal: Unlimited levels (+$50 per level)",
        "PSP Integration: 5 integrations (+$500 setup)",
        "Copier/PAMM/MAM (MT5): $1 per million (Min. $1,000/month)",
      ],
    },
    {
      icon: <Enterprise/>,
      title: "Enterprise",
      features: [
        "Live Clients/Leads: 5,000",
        "CRM Users: 10 users (+$20 per user)",
        "IB Portal: Max 5 levels (+$50 per level)",
        "PSP Integration: 3 integrations (+$500 setup)",
        "Copier/PAMM/MAM (MT5): $1 per million (Min. $1,000/month)",
      ],
    },
  
  ];