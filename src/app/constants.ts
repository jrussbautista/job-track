export const APP_TITLE = 'JobTrack';

export const ENVIRONMENT = process.env.NODE_ENV;

export const JOB_STATUSES = ['pending', 'interviewed', 'offered', 'denied', 'accepted'];

type Link = {
  title: string;
  href: string;
};

export const LINKS: Link[] = [];
