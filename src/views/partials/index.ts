import { Input, Select } from "@/components/form";

const filters: Select = {
  id: "filters-select",
  name: "filters_select",
  default: "Select filter",
  value: "",
  options: [
    {
      value: "all",
      label: "None",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "currency",
      label: "Currency",
    },
    {
      value: "lang",
      label: "Language",
    },
    {
      value: "capital",
      label: "Capital",
    },
    {
      value: "region",
      label: "Region",
    },
    {
      value: "subregion",
      label: "Subregion",
    },
  ],
};
const value: Input = {
  id: "value-select",
  name: "value_select",
  placeholder: "Portugal",
  value: "",
};

const form = {
  filter: "",
  value: "",
};

export const useInputs = () => {
  return {
    filters,
    value,
  };
};
export const useForm = () => {
  return form;
};
