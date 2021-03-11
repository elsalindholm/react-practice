import { action, observable } from 'mobx';


export interface Light {
  id: string;
  className: string;
}

export class AppState {
  @observable public lights: Light[] = [];

  @action public addLight(className: string) {
    const light: Light = {
      id: `${this.lights.length}`,
      className,
    };
    this.lights.push(light);
  }

  @action public removeLight(id: string) {
    this.lights = this.lights.filter((light) => light.id !== id);
    }
}
