import { Service } from './core-api/service';
import { Controller } from './core-api/controller';

type ControllerConfig = Controller;

type ServiceConfig = Service;

type HandlerConfig = {
  auth: false | { scope: string[] };
  policies: string[];
  middlewares: string[];
};

type SingleTypeRouterConfig = {
  find: HandlerConfig;
  update: HandlerConfig;
  delete: HandlerConfig;
};

type CollectionTypeRouterConfig = {
  find: HandlerConfig;
  findOne: HandlerConfig;
  create: HandlerConfig;
  update: HandlerConfig;
  delete: HandlerConfig;
};

type RouterConfig = {
  prefix: string;
  only: string[];
  except: string[];
  config: SingleTypeRouterConfig | CollectionTypeRouterConfig;
};

interface Route {
  method: string;
  path: string;
}
interface Router {
  prefix: string;
  routes: Route[];
}

export function createCoreRouter(uid: string, cfg: RouterConfig): () => Router;
export function createCoreController(uid: string, cfg: ControllerConfig): () => Controller;
export function createCoreService(uid: string, cfg: ServiceConfig): () => Service;
