type Status = 'pending' | 'interviewed' | 'offered' | 'denied' | 'accepted';

export type Job = {
  id: string;
  company: string;
  link: string;
  title: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
};
