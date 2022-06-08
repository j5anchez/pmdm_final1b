/* eslint-disable @typescript-eslint/naming-convention */
export interface Datos {
  data: Suceso;
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

export interface Suceso {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
