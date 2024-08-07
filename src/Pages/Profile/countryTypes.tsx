interface Response {
  ip: string;
  continentCode: string;
  continentName: string;
  countryCode: string;
  countryName: string;
  countryNameNative: string;
  officialCountryName: string;
  regionCode: string;
  regionName: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  capital: string;
  phoneCode: string;
  countryFlagEmoj: string;
  countryFlagEmojUnicode: string;
  isEu: boolean;
  borders: string[];
  topLevelDomains: string[];
  languages: En;
  currency: Currency;
  timeZoneName: TimeZoneName;
  userAgent: UserAgent;
  connection: Connection;
  security: Security;
}

interface En {
  code: string;
  name: string;
  native: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
  number: string;
  rates: Rates;
}

interface Rates {
  EURUSD: number;
}

interface TimeZoneName {
  id: string;
  currentTime: string;
  code: string;
  timeZoneName: string;
  utcOffset: number;
}

interface UserAgent {
  isMobile: boolean;
  isiPod: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmartTV: boolean;
  isRaspberry: boolean;
  isBot: boolean;
  browser: string;
  browserVersion: string;
  operatingSystem: string;
  platform: string;
  source: string;
}

interface Connection {
  asn: string;
  isp: string;
  descr: string;
  regCountry: string;
  isActive: boolean;
  website: string;
  abuseEmail: string;
  type: string;
  created: string;
  updated: string;
  rir: string;
}

interface Security {
  isProxy: boolean;
  isBogon: boolean;
  isTorExitNode: boolean;
  isCloud: boolean;
  isHosting: boolean;
  isSpamhaus: boolean;
  suggestion: string;
  network: string;
}

export type {
  Response,
  En,
  Currency,
  Rates,
  TimeZoneName,
  UserAgent,
  Connection,
  Security,
};
