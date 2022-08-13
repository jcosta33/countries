import { IParams } from ".";

export interface CountriesParams extends IParams {
  filter?: string;
  value?: string;
}

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  KWD?: Currency;
  USD?: Currency;
  CHF?: Currency;
  MDL?: Currency;
  AOA?: Currency;
  BOB?: Currency;
  AUD?: Currency;
  TVD?: Currency;
  PEN?: Currency;
  XPF?: Currency;
  EUR?: Currency;
  BWP?: Currency;
  AFN?: Currency;
  HUF?: Currency;
  XOF?: Currency;
  CAD?: Currency;
  IDR?: Currency;
  TWD?: Currency;
  XCD?: Currency;
  AWG?: Currency;
  XAF?: Currency;
  SHP?: Currency;
  LRD?: Currency;
  DZD?: Currency;
  MAD?: Currency;
  MRU?: Currency;
  TRY?: Currency;
  SOS?: Currency;
  DKK?: Currency;
  FOK?: Currency;
  CUC?: Currency;
  CUP?: Currency;
  BYN?: Currency;
  BBD?: Currency;
  TND?: Currency;
  ILS?: Currency;
  MMK?: Currency;
  DJF?: Currency;
  GIP?: Currency;
  CDF?: Currency;
  BZD?: Currency;
  BMD?: Currency;
  GBP?: Currency;
  RUB?: Currency;
  JPY?: Currency;
  KYD?: Currency;
  HNL?: Currency;
  BIF?: Currency;
  PYG?: Currency;
  ARS?: Currency;
  STN?: Currency;
  LSL?: Currency;
  ZAR?: Currency;
  SDG?: BAM;
  KGS?: Currency;
  BRL?: Currency;
  KHR?: Currency;
  GTQ?: Currency;
  AZN?: Currency;
  MYR?: Currency;
  COP?: Currency;
  BHD?: Currency;
  CLP?: Currency;
  MKD?: Currency;
  MZN?: Currency;
  ETB?: Currency;
  INR?: Currency;
  KZT?: Currency;
  OMR?: Currency;
  Currency?: Currency;
  PLN?: Currency;
  LKR?: Currency;
  TJS?: Currency;
  SYP?: Currency;
  LYD?: Currency;
  HTG?: Currency;
  TOP?: Currency;
  GEL?: Currency;
  ERN?: Currency;
  TZS?: Currency;
  CZK?: Currency;
  BTN?: Currency;
  EGP?: Currency;
  VND?: Currency;
  PGK?: Currency;
  BSD?: Currency;
  HRK?: Currency;
  UZS?: Currency;
  GYD?: Currency;
  YER?: Currency;
  MWK?: Currency;
  GMD?: Currency;
  PAB?: Currency;
  IMP?: Currency;
  KRW?: Currency;
  GGP?: Currency;
  PKR?: Currency;
  NZD?: Currency;
  AMD?: Currency;
  TMT?: Currency;
  DOP?: Currency;
  SBD?: Currency;
  VUV?: Currency;
  MGA?: Currency;
  LAK?: Currency;
  CKD?: Currency;
  MNT?: Currency;
  SZL?: Currency;
  ISK?: Currency;
  NPR?: Currency;
  GHS?: Currency;
  IQD?: Currency;
  THB?: Currency;
  RSD?: Currency;
  UGX?: Currency;
  SAR?: Currency;
  JOD?: Currency;
  SRD?: Currency;
  KES?: Currency;
  MXN?: Currency;
  BAM?: BAM;
  SCR?: Currency;
  BGN?: Currency;
  FKP?: Currency;
  GNF?: Currency;
  LBP?: Currency;
  MUR?: Currency;
  NOK?: Currency;
  KMF?: Currency;
  VES?: Currency;
  IRR?: Currency;
  SEK?: Currency;
  FJD?: Currency;
  PHP?: Currency;
  HKD?: Currency;
  UYU?: Currency;
  MOP?: Currency;
  TTD?: Currency;
  RWF?: Currency;
  ALL?: Currency;
  KPW?: Currency;
  MVR?: Currency;
  SGD?: Currency;
  ZWL?: Currency;
  QAR?: Currency;
  ANG?: Currency;
  CRC?: Currency;
  CVE?: Currency;
  RON?: Currency;
  SLL?: Currency;
  NIO?: Currency;
  JMD?: Currency;
  JEP?: Currency;
  WST?: Currency;
  NGN?: Currency;
  ZMW?: Currency;
  UAH?: Currency;
  CNY?: Currency;
  SSP?: Currency;
  BDT?: Currency;
  NAD?: Currency;
  BND?: Currency;
  KID?: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
