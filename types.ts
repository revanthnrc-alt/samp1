export enum UserRole {
  COMMAND = 'Command',
  FIELD_AGENT = 'Field Agent',
  ANALYST = 'Analyst',
}

export interface RoleConfig {
  role: UserRole;
  path: string;
}

export enum AlertLevel {
  CRITICAL = 'Critical',
  WARNING = 'Warning',
  INFO = 'Info',
}

export enum AlertStatus {
  PENDING = 'Pending',
  ACKNOWLEDGED = 'Acknowledged',
  RESOLVED = 'Resolved',
}

export interface ChatMessage {
  id: string;
  sender: 'Command' | 'Agent';
  text: string;
  timestamp: string;
}

export interface Evidence {
  id: string;
  fileName: string;
  timestamp: string;
  hash: string;
}

export interface Alert {
  id: string;
  level: AlertLevel;
  title: string;
  timestamp: string;
  location: string;
  coordinates: { lat: number; lng: number };
  hash?: string;
  status: AlertStatus;
  dispatchLog: ChatMessage[];
  evidence: Evidence[];
}

export enum SystemStatus {
  OPERATIONAL = 'Operational',
  DEGRADED = 'Degraded',
  OFFLINE = 'Offline',
}

export interface SystemComponentHealth {
  name: string;
  status: SystemStatus;
}
