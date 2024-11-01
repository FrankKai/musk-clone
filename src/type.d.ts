export type MuskCloneProps = {
  source: SourceType;
  repeat?: number;
  ignores?: Array<string>;
  fieldCallbacks?: Record<string, Function>;
};

export type SourceType = Array<any> | Record<any, any>;

export type BaseItemType = string | number | boolean | SourceType;

export type GenerateItemType = BaseItemType | SourceType;

export type GenerateOptions = Omit<MuskCloneProps, "source" | "repeat"> & {
  objectKey?: string;
};
