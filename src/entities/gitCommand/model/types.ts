export interface IGitCommandFlag {
  name: string;
  description: string;
}

export interface IGitCommandSection {
  heading: string;
  body: string;
  keys?: IGitCommandFlag[];
  examples?: string;
}

export interface IGitCommand {
  name: string;
  syntax: string;
  description: string;
  parameters?: IGitCommandFlag[];
  flags: IGitCommandFlag[];
  examples: string;
  specification: string;
  sections?: IGitCommandSection[];
}