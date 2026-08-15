export interface ITopicExample {
  caption?: string;
  code: string;
}

export interface ITopicSection {
  heading: string;
  body: string;
  examples?: ITopicExample[];
}

export interface ITopicConfig {
  sections: ITopicSection[];
}
