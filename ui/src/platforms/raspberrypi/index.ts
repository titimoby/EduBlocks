import { PlatformInterface } from '../../types';

export function newRaspberryPiPlatform(): PlatformInterface {
  return {
    key: 'RaspberryPi',
    name: 'Raspberry Pi',
    image: '/images/pi.png',
    capabilities: ['RemoteShell'],
    defaultExtensions: [
      'Pi General',
    ],
    extensions: [],
  };
}
