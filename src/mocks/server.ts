/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Model, Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export function makeServer(environment = 'development') {
  return createServer({
    environment,
    models: {
      job: Model,
    },
    routes() {
      this.namespace = 'api';
      this.get('/jobs', (schema: any) => {
        return schema.jobs.all();
      });
    },
    seeds(server) {
      server.createList('job', 10);
    },
    factories: {
      job: Factory.extend({
        title() {
          return faker.lorem.sentence(4);
        },
        company() {
          return faker.company.companyName();
        },
        link() {
          return faker.internet.url();
        },
        status() {
          return 'pending';
        },
        createdAt() {
          return new Date().toISOString();
        },
        updatedAt() {
          new Date().toISOString();
        },
      }),
    },
  });
}
