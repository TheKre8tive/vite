export default class C {
  static f = () => 0;
}

C = class {
  static f = () => 1;
}

C = class {
  static f = () => 2;
}

export function update() {
  C = class {
    static f = () => 3;
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dep.js
