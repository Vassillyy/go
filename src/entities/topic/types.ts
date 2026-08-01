export interface ITopic {
  value: string;
  name: string;
  content: {
    introduction: string;
    sections: ITopicSection[];
  };
}

export interface ITopicSection {
  title: string;
  content: string;
  addition: string;
  examples?: string;
}

export type IConfig = ITopic[];
