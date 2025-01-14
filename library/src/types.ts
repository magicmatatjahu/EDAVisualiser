import { ReactElement } from 'react';
import { FlowElement } from 'react-flow-renderer';

export type InternalProps = {
  internal?: {
    addApplicationCallback: (node: ApplicationNodeData) => void;
    addIncomingCallback: (node: IncomingNodeData) => void;
    addOutgoingCallback: (node: OutgoingNodeData) => void;
  };
};

export interface ApplicationLicenseData {
  name: string;
  url: string;
}
export interface ApplicationServerData {
  name: string;
  url: string;
  description: string;
  protocol: string;
  protocolVersion?: string;
}
export interface ApplicationNodeData {
  id: string;
  defaultContentType?: string;
  description?: string;
  title: string;
  version: string;
  license?: ApplicationLicenseData;
  externalDocs?: string;
  servers?: ApplicationServerData[];
  hideHandlers?: boolean;
  hideInHandler?: boolean;
  hideOutHandler?: boolean;
  topExtended?: ReactElement;
}
export interface ExternalApplicationNodeData {
  id: string;
  defaultContentType?: string;
  description?: string;
  title: string;
  version: string;
  license?: ApplicationLicenseData;
  externalDocs?: string;
  servers?: ApplicationServerData[];
  side?: 'outgoing' | 'incoming';
  topExtended?: ReactElement;
}
export interface ExternalApplicationNodeProps {
  data: ExternalApplicationNodeData;
}
export interface ApplicationNodeProps {
  data: ApplicationNodeData;
}
export interface MessageData {
  title: string;
}
export interface IncomingNodeData {
  id: string;
  description?: string;
  channel: string;
  messages?: MessageData[];
  forApplication?: string;
}
export interface IncomingNodeProps {
  data: IncomingNodeData;
}
export interface OutgoingNodeData {
  id: string;
  description?: string;
  channel: string;
  messages: MessageData[];
  forApplication?: string;
}
export interface OutgoingNodeProps {
  data: OutgoingNodeData;
}
export interface LayoutProps {
  elementsToRender: FlowElement[];
}
