export interface RequestsPerHour {
  [hour: string]: number;
}

export interface ResourceCount {
  [resource: string]: number;
}

export interface ResponseCodes {
  [code: number]: number;
}



export interface LogEntry {
    dateTime: string;
    requestType: string;
    resource: string;
    responseCode: number;
    responseSize: string;
    referrerUrl: string;
    userAgent: string;
  }