const provinces = [
    {
      value: "Alberta",
      label: "Alberta",
      latlng: [53.9333, -116.5765],
      region: "Western Canada",
    },
    {
      value: "British Columbia",
      label: "British Columbia",
      latlng: [53.7267, -127.6476],
      region: "Western Canada",
    },
    {
      value: "Manitoba",
      label: "Manitoba",
      latlng: [50.0, -97.0],
      region: "Prairies",
    },
    {
      value: "New Brunswick",
      label: "New Brunswick",
      latlng: [46.5653, -66.4619],
      region: "Atlantic Canada",
    },
    {
      value: "Newfoundland and Labrador",
      label: "Newfoundland and Labrador",
      latlng: [53.1355, -57.6604],
      region: "Atlantic Canada",
    },
    {
      value: "Nova Scotia",
      label: "Nova Scotia",
      latlng: [44.6820, -63.7443],
      region: "Atlantic Canada",
    },
    {
      value: "Ontario",
      label: "Ontario",
      latlng: [51.2538, -85.3232],
      region: "Central Canada",
    },
    {
      value: "Prince Edward Island",
      label: "Prince Edward Island",
      latlng: [46.5107, -63.4168],
      region: "Atlantic Canada",
    },
    {
      value: "Quebec",
      label: "Quebec",
      latlng: [52.9399, -73.5491],
      region: "Central Canada",
    },
    {
      value: "Saskatchewan",
      label: "Saskatchewan",
      latlng: [52.9399, -106.4509],
      region: "Prairies",
    },
    {
      value: "Northwest Territories",
      label: "Northwest Territories",
      latlng: [64.8255, -124.8457],
      region: "Northern Canada",
    },
    {
      value: "Nunavut",
      label: "Nunavut",
      latlng: [70.2998, -83.1076],
      region: "Northern Canada",
    },
    {
      value: "Yukon",
      label: "Yukon",
      latlng: [64.2823, -135.0000],
      region: "Northern Canada",
    },
  ];
  
  const useProvinces = () => {
    const getAllProvince = () => provinces;
  
    return { getAllProvince };
  };
  
  export default useProvinces;
  