import { ClientJS } from 'clientjs';
import { DeviceType } from '../common/enums/device-type.enums';

export interface Fingerprint {
  userAgent: string;
  fingerprint: string | number;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: string;
  deviceType: DeviceType;
}

export function buildFingerprint(): Fingerprint {
  const client = new ClientJS();

  const userAgent = client.getUserAgent();
  const browser = client.getBrowser();
  const os = client.getOS();
  const osVersion = client.getOSVersion();
  const device = client.getDevice();
  const deviceType = client.getDeviceType();
  const browserVersion = client.getBrowserVersion();

  const canvasPrint = client.getCanvasPrint();
  const availableResolution = client.getAvailableResolution();
  const cpu = client.getCPU();
  const timeZone = client.getTimeZone();
  const language = client.getLanguage();

  const fingerprint = client.getCustomFingerprint(
    canvasPrint,
    availableResolution,
    cpu,
    timeZone,
    language,
    userAgent,
    browser,
    os,
    osVersion,
    device,
    deviceType,
  );

  return {
    userAgent,
    browser,
    browserVersion,
    os,
    osVersion,
    fingerprint,
    device: device || 'Unknown',
    deviceType:
      deviceType === undefined ? DeviceType.DESKTOP : DeviceType.MOBILE,
  };
}
