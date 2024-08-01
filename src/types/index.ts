export type Count = number;
export type Solved = boolean;
export type Flag = boolean;
// Generic type for set state function
type Box = {
  value: number;
  color: string;
};
export type Boxes = Box[];

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type BoxGroupProps = {
  boxes: Boxes;
  setBoxes: (prevBoxes: any[]) => void;
  setTouchUpFlag: SetState<boolean>;
};
export type BoxItemProps = {
  box: Box;
  setTouchUpFlag: SetState<boolean>;
};
export type ProgressProps = {
  count: Count;
  solved: Solved;
  boxes: Boxes;
};
